import { MainStyledVariant } from "../../components-style/main/index.main";
import {
  CardLogin,
  SectionCard,
} from "../../components-style/card-login/index.card-login.js";
import { FormCreateUser } from "../../components/form-create-user/index.form-create-user.jsx";

export const UserCreate = () => {
  return (
    <>
      <MainStyledVariant>
        <CardLogin>
          <SectionCard>
            <h5>Crie sua conta e comece a controlar seu dinheiro.</h5>
          </SectionCard>
          <SectionCard>
            <FormCreateUser />
          </SectionCard>
        </CardLogin>
      </MainStyledVariant>
    </>
  );
};
