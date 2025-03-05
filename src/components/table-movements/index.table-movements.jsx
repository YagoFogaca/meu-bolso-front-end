import { Table } from "react-bootstrap";

import {
  IconMovimentRevenueVariant,
  IconMovimentExpensesVariant,
} from "../../components-style/div-icons/index.div-icons";

export const TableMovements = () => {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Dia</th>
            <th>Hora</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <IconMovimentExpensesVariant>
                <i class="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </td>
            <td>05/03/2025</td>
            <td>12h0</td>
            <td>R$12,00</td>
          </tr>
          <tr>
            <td>
              {" "}
              <IconMovimentRevenueVariant>
                <i class="bi bi-arrow-up-short"></i>
              </IconMovimentRevenueVariant>
            </td>
            <td>05/03/2025</td>
            <td>13h45</td>
            <td>R$120,00</td>
          </tr>
          <tr>
            <td>
              <IconMovimentExpensesVariant>
                <i class="bi bi-arrow-down-short"></i>
              </IconMovimentExpensesVariant>
            </td>
            <td>05/03/2025</td>
            <td>9h0</td>
            <td>R$18,70</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
