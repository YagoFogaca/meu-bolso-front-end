import * as C from "./index.table-movements.styled.js";
import * as I from "../../components-style/div-icons/index.div-icons";

export const TableMovements = ({ movements }) => {
  return (
    <>
      <C.TableStyled striped responsive>
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
          {movements.map((movement, index) => {
            return (
              <tr key={`${index}}`}>
                <C.TdStyled>
                  {movement.type === "ENTRY" ? (
                    <>
                      <I.IconMovimentRevenueVariant>
                        <i className="bi bi-arrow-up-short"></i>
                      </I.IconMovimentRevenueVariant>
                    </>
                  ) : (
                    <I.IconMovimentExpensesVariant>
                      <i className="bi bi-arrow-down-short"></i>
                    </I.IconMovimentExpensesVariant>
                  )}
                </C.TdStyled>
                <C.TdStyled>{movement.description}</C.TdStyled>
                <C.TdStyled>{movement.date}</C.TdStyled>
                <C.TdStyled>{movement.hour}</C.TdStyled>
                <C.TdStyled>
                  R$
                  {movement.amount.toLocaleString("PT", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </C.TdStyled>
                <C.TdStyled>
                  <i className="bi bi-pencil-fill"></i>
                  <i className="bi bi-trash3-fill"></i>
                </C.TdStyled>
              </tr>
            );
          })}
        </tbody>
      </C.TableStyled>
    </>
  );
};
