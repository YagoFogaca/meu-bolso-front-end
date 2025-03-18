import { NavbarComponents } from "../../components/navbar/index.navbar";
import { MainStyled } from "../../components-style/main/index.main";
import { FormUpdateUser } from "../../components/form-update-user/index.form-update-user";

export const UserPersonalInfo = () => {
  return (
    <>
      <NavbarComponents />
      <MainStyled>
        <FormUpdateUser />
      </MainStyled>
    </>
  );
};
