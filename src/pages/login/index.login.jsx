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
import { FormLogin } from "../../components/form-login/index.form-login.jsx";

export const Login = () => {
  return (
    <>
      <MainStyledVariant>
        <CardLogin>
          <SectionCard>
            <h5>Digite seu Email e senha para iniciar sessão</h5>
          </SectionCard>
          <SectionCard>
            <FormLogin />
          </SectionCard>
        </CardLogin>
      </MainStyledVariant>
    </>
  );
};
