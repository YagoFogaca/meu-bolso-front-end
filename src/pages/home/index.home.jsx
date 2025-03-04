import { NavbarComponents } from "../../components/navbar/index.navbar.jsx";
import * as C from "../../components-style/section/index.section.jsx";
import { MainStyled } from "../../components-style/main/index.main.jsx";
import { Dropdown } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <MainStyled>
        <C.SectionStyled>
          <C.SectionMovementInformationAmount>
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
          </C.SectionMovementInformationAmount>

          <C.SectionMovementInformation>
            <C.CardFilter>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Filtro
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Receitas</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Gastos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </C.CardFilter>
          </C.SectionMovementInformation>
        </C.SectionStyled>
      </MainStyled>
    </>
  );
};
