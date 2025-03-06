import {
  BtnStyledLogin,
  BtnStyledCreate,
} from "../../components-style/btn-primary/index.btn-primary.styled";
import { MainStyledVariant } from "../../components-style/main/index.main";
import {
  CardLogin,
  SectionCard,
} from "../../components-style/card-login/index.card-login.js";
import { Form } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <MainStyledVariant>
        <CardLogin>
          <SectionCard>
            <h5>Digite seu Email e senha para iniciar sessão</h5>
          </SectionCard>
          <SectionCard>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <BtnStyledLogin>Login</BtnStyledLogin>
              <BtnStyledCreate>Criar conta</BtnStyledCreate>
            </Form>
          </SectionCard>
        </CardLogin>
      </MainStyledVariant>
    </>
  );
};
