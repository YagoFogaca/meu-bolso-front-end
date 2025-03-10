import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Api } from "../../api/index.api.user";
import {
  BtnStyledLogin,
  BtnStyledCreate,
} from "../../components-style/btn-primary/index.btn-primary.styled";
import { TextFeedback } from "../../components-style/text-feedback/index.text-feedback";
import { SpinnerComponents } from "../spinner/index.spinner";

export const FormLogin = () => {
  const [validated, setValidated] = useState(false);
  const [validatedLogin, setValidatedLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity() !== false) {
      setLoading(true);
      setValidatedLogin(false);
      try {
        const userLogin = await Api.login({
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
        });
        setLoading(false);
        Cookies.set("token", userLogin.token);
        Cookies.set("user_id", userLogin.data.user_id);
        navigate("/app");
      } catch (error) {
        setValidatedLogin(true);
        setLoading(false);
        console.log(error);
      }
    }
    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={login}>
        {validatedLogin ? (
          <TextFeedback>Email ou senha incorretos.</TextFeedback>
        ) : (
          <></>
        )}
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
          <BtnStyledLogin type="submit">Login</BtnStyledLogin>
        )}
        <BtnStyledCreate>Criar conta</BtnStyledCreate>
      </Form>
    </>
  );
};
