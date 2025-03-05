import * as C from "./index.section-movement-amount.styled.js";

export const SectionMovementAmount = () => {
  return (
    <>
      <C.SectionMovementAmount>
        <C.CardsInfosAmount>
          <C.DivIcons>
            <i class="bi bi-arrow-up-short"></i>
          </C.DivIcons>
          <C.CardDivInfos>
            <h5>Receita no mês</h5>
            <h6>R$8.000,00</h6>
          </C.CardDivInfos>
        </C.CardsInfosAmount>

        <C.CardsInfosAmount>
          <C.DivIconsVariant>
            <i class="bi bi-arrow-down-short"></i>
          </C.DivIconsVariant>
          <C.CardDivInfos>
            <h5>Gastos no mês</h5>
            <h6>R$2.500,00</h6>
          </C.CardDivInfos>
        </C.CardsInfosAmount>
      </C.SectionMovementAmount>
    </>
  );
};
