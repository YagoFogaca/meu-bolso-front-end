import { OffcanvasComponents } from "../offcanvas/index.offcanvas.jsx";
import { ModalCreate } from "../modal-create/index.modal-create.jsx";
import * as C from "./section-movement-information.styled.js";

export const SectionMovementInformation = () => {
  return (
    <>
      <C.SectionMovementInformation>
        <C.CardFilter>
          <OffcanvasComponents />
          <ModalCreate />
        </C.CardFilter>
      </C.SectionMovementInformation>
    </>
  );
};
