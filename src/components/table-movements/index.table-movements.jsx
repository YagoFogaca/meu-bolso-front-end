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
            <C.ThStyled>Descrição</C.ThStyled>
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
                <i className="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </C.TdStyled>
            <C.TdStyled>Lanche na rua</C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>12h0</C.TdStyled>
            <C.TdStyled>R$12,00</C.TdStyled>
            <C.TdStyled>
              <i className="bi bi-pencil-fill"></i>
              <i className="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
          <tr>
            <C.TdStyled>
              <IconMovimentRevenueVariant>
                <i className="bi bi-arrow-up-short"></i>
              </IconMovimentRevenueVariant>
            </C.TdStyled>
            <C.TdStyled>Manete PS4</C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>13h45</C.TdStyled>
            <C.TdStyled>R$120,00</C.TdStyled>
            <C.TdStyled>
              <i className="bi bi-pencil-fill"></i>
              <i className="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
          <tr>
            <C.TdStyled>
              <IconMovimentExpensesVariant>
                <i className="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </C.TdStyled>
            <C.TdStyled>Maço de palha</C.TdStyled>
            <C.TdStyled>05/03/2025</C.TdStyled>
            <C.TdStyled>9h0</C.TdStyled>
            <C.TdStyled>R$18,70</C.TdStyled>
            <C.TdStyled>
              <i className="bi bi-pencil-fill"></i>
              <i className="bi bi-trash3-fill"></i>
            </C.TdStyled>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
