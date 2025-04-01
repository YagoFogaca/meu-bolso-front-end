import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Api } from "../../api/index.api.user";
import { Form } from "react-bootstrap";
import {
  BtnStyledLogin,
  BtnStyledCreate,
} from "../../components-style/btn-primary/index.btn-primary.styled";
import { TextFeedback } from "../../components-style/text-feedback/index.text-feedback";
import { SpinnerComponents } from "../spinner/index.spinner";

export const FormCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [validatedCreated, setValidatedCreated] = useState(false);

  const navigate = useNavigate();
  const navigateLoginUser = () => {
    navigate("/");
  };

  const create = async (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity() !== false) {
      setLoading(true);
      setValidatedCreated(false);
      try {
        const userCreated = await Api.createUser({
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
          name: event.currentTarget.name.value,
        });

        Cookies.set("token", userCreated.token);
        Cookies.set("user_id", userCreated.data.user_id);
        navigate("/app");
      } catch (error) {
        setValidatedCreated(true);
        setLoading(false);
      }
    } else {
      setValidated(true);
    }
  };
  return (
    <>
      <Form onSubmit={create} validated={validated} noValidate>
        {validatedCreated ? (
          <TextFeedback>
            Ocorreu um erro ao criar sua conta. Revise os dados.
          </TextFeedback>
        ) : (
          <></>
        )}

        <Form.Group className="mb-3" controlId="name" hasvalidation="true">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seu nome"
            name="name"
            required
          />
          <Form.Control.Feedback type="invalid">
            Preencha esse dado, com no minimo de 2 caracteres.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email" hasvalidation="true">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Preencha esse dado.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password" hasvalidation="true">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Preencha esse dado.
          </Form.Control.Feedback>
        </Form.Group>

        {loading ? (
          <SpinnerComponents text={"Carregando"} />
        ) : (
          <>
            <BtnStyledLogin type="submit">Criar conta</BtnStyledLogin>
            <BtnStyledCreate onClick={navigateLoginUser}>Login</BtnStyledCreate>
          </>
        )}
      </Form>
    </>
  );
};
