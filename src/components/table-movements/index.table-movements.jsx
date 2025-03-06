import { Table } from "react-bootstrap";
import * as C from "./index.table-movements.styled.js";

import {
  IconMovimentRevenueVariant,
  IconMovimentExpensesVariant,
} from "../../components-style/div-icons/index.div-icons";

export const TableMovements = () => {
  return (
    <>
      <Table striped responsive>
        <thead>
          <tr>
            <C.ThStyled>Tipo</C.ThStyled>
            <C.ThStyled>Dia</C.ThStyled>
            <C.ThStyled>Hora</C.ThStyled>
            <C.ThStyled>Valor</C.ThStyled>
            <C.ThStyled>Ações</C.ThStyled>
          </tr>
        </thead>
        <tbody>
          <tr>
            <C.TdStyled>
              <IconMovimentExpensesVariant>
                <i class="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>12h0</C.TdStyled>
            <C.TdStyled>R$12,00</C.TdStyled>
            <C.TdStyled>
              <i class="bi bi-pencil-fill"></i>
              <i class="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
          <tr>
            <C.TdStyled>
              <IconMovimentRevenueVariant>
                <i class="bi bi-arrow-up-short"></i>
              </IconMovimentRevenueVariant>
            </C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>13h45</C.TdStyled>
            <C.TdStyled>R$120,00</C.TdStyled>
            <C.TdStyled>
              <i class="bi bi-pencil-fill"></i>
              <i class="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
          <tr>
            <C.TdStyled>
              <IconMovimentExpensesVariant>
                <i class="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>9h0</C.TdStyled>
            <C.TdStyled>R$18,70</C.TdStyled>
            <C.TdStyled>
              <i class="bi bi-pencil-fill"></i>
              <i class="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
