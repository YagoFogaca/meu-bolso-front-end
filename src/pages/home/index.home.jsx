import Cookies from "js-cookie";
import { NavbarComponents } from "../../components/navbar/index.navbar.jsx";
import { SectionMovementAmount } from "../../components/section-movement-amount/index.section-movement-amount.jsx";
import { SectionMovementInformation } from "../../components/section-movement-information/index.section-movement-information.jsx";
import { MainStyled } from "../../components-style/main/index.main.js";
import { SectionStyled } from "../../components-style/section/index.section.js";
import { useEffect, useState } from "react";
import { Api } from "../../api/index.api.user.js";
import { MovementsAmount } from "../../utils/movements-mount/index.movements-mount.js";

export const Home = () => {
  // precisa de um context

  const [movements, setMovements] = useState([]);
  const [movementsAmount, setMovementsAmount] = useState([]);
  const findMovements = async () => {
    console.log("COMEÇOU");

    try {
      const movements = await Api.findAllMovimentUser(Cookies.get("user_id"));
      setMovementsAmount(MovementsAmount(movements));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findMovements();
  }, []);

  return (
    <>
      <NavbarComponents />
      <MainStyled>
        <SectionStyled>
          <SectionMovementInformation />
          <SectionMovementAmount amount={movementsAmount} />
        </SectionStyled>
      </MainStyled>
    </>
  );
};
