import { NavbarComponents } from "../../components/navbar/index.navbar.jsx";
import { OffcanvasComponents } from "../../components/offcanvas/index.offcanvas.jsx";
import { SectionMovementAmount } from "../../components/section-movement-amount/index.section-movement-amount.jsx";
import * as C from "../../components-style/section/index.section.js";
import { MainStyled } from "../../components-style/main/index.main.js";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <MainStyled>
        <C.SectionStyled>
          <SectionMovementAmount />

          <C.SectionMovementInformation>
            <C.CardFilter>
              <OffcanvasComponents />
            </C.CardFilter>
          </C.SectionMovementInformation>
        </C.SectionStyled>
      </MainStyled>
    </>
  );
};
