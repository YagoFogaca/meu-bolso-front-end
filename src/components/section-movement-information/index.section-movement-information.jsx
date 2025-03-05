import { OffcanvasComponents } from "../offcanvas/index.offcanvas.jsx";
import { ModalCreate } from "../modal-create/index.modal-create.jsx";
import { TableMovements } from "../table-movements/index.table-movements.jsx";
import * as C from "./section-movement-information.styled.js";

export const SectionMovementInformation = () => {
  return (
    <>
      <C.SectionMovementInformation>
        <C.CardFilter>
          <OffcanvasComponents />
          <ModalCreate />
        </C.CardFilter>
        <C.SectionTable>
          <TableMovements />
        </C.SectionTable>
      </C.SectionMovementInformation>
    </>
  );
};
