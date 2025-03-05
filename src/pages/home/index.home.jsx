import { NavbarComponents } from "../../components/navbar/index.navbar.jsx";
import { SectionMovementAmount } from "../../components/section-movement-amount/index.section-movement-amount.jsx";
import { SectionMovementInformation } from "../../components/section-movement-information/index.section-movement-information.jsx";
import { MainStyled } from "../../components-style/main/index.main.js";
import { SectionStyled } from "../../components-style/section/index.section.js";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <MainStyled>
        <SectionStyled>
          <SectionMovementAmount />
          <SectionMovementInformation />
        </SectionStyled>
      </MainStyled>
    </>
  );
};
