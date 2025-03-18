import { Api } from "../../api/index.api.user.js";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form } from "react-bootstrap";
import * as C from "./index.form-update-user.styled.js";
import { BtnStyledLogin } from "../../components-style/btn-primary/index.btn-primary.styled";
import { SpinnerComponents } from "../spinner/index.spinner";
import { TextFeedback } from "../../components-style/text-feedback/index.text-feedback.js";

export const FormUpdateUser = () => {
  const [validatedUpdateError, setValidateUpdateError] = useState(false);
  const [validatedUpdated, setValidateUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validatedUpdateError) setValidateUpdateError(false);

    try {
      const email = event.currentTarget.email.value.trim();
      const name = event.currentTarget.name.value.trim();

      const user = {};
      if (email) user.email = email;
      if (name) user.name = name;

      if (Object.keys(user).length === 0) {
        setLoading(false);
        setValidateUpdateError(true);
        return;
      }

      await Api.updateUser(Cookies.get("user_id"), user);
      setLoading(false);
      setValidateUpdated(true);
    } catch (error) {
      setLoading(false);
      setValidateUpdateError(true);
    }
  };

  return (
    <C.SectionFormUpdate>
      <C.SectionInfoForm>
        <h6>Dados Pessoias</h6>
        <p>Esses dados não serão compartilhados com ninguém.</p>
      </C.SectionInfoForm>
      {validatedUpdateError ? (
        <C.SectionInfoForm>
          <TextFeedback>Email ou nome inválidos.</TextFeedback>
        </C.SectionInfoForm>
      ) : validatedUpdated ? (
        <C.SectionInfoForm>
          <TextFeedback className="sucess">
            Informações atualizadas com sucesso.
          </TextFeedback>
        </C.SectionInfoForm>
      ) : (
        <></>
      )}
      <Form onSubmit={updateUser}>
        <Form.Group className="mb-3" controlId="email" hasvalidation="true">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" name="name" />
          <Form.Text className="text-muted">
            O nome não pode ser menor que 2 caracteres.
          </Form.Text>
        </Form.Group>
        {loading ? (
          <SpinnerComponents text={"Carregando"} />
        ) : (
          <BtnStyledLogin type="submit">Atualizar</BtnStyledLogin>
        )}
      </Form>
    </C.SectionFormUpdate>
  );
};
