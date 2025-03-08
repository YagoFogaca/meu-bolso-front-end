import * as C from "./index.section-movement-amount.styled.js";
import {
  IconMovimentRevenue,
  IconMovimentExpenses,
} from "../../components-style/div-icons/index.div-icons.js";

export const SectionMovementAmount = () => {
  return (
    <>
      <C.SectionMovementAmount>
        <C.CardsInfosAmount>
          <IconMovimentRevenue>
            <i className="bi bi-arrow-up-short"></i>
          </IconMovimentRevenue>
          <C.CardDivInfos>
            <h5>Receita no mês</h5>
            <h6>R$8.000,00</h6>
          </C.CardDivInfos>
        </C.CardsInfosAmount>

        <C.CardsInfosAmount>
          <IconMovimentExpenses>
            <i className="bi bi-arrow-down-short"></i>
          </IconMovimentExpenses>
          <C.CardDivInfos>
            <h5>Gastos no mês</h5>
            <h6>R$2.500,00</h6>
          </C.CardDivInfos>
        </C.CardsInfosAmount>
      </C.SectionMovementAmount>
    </>
  );
};
