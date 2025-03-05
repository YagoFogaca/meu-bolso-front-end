import { OffcanvasComponents } from "../offcanvas/index.offcanvas.jsx";
import * as C from "./section-movement-information.styled.js";

export const SectionMovementInformation = () => {
  return (
    <>
      <C.SectionMovementInformation>
        <C.CardFilter>
          <OffcanvasComponents />
        </C.CardFilter>
      </C.SectionMovementInformation>
    </>
  );
};
