import Cookies from "js-cookie";
import { NavbarComponents } from "../../components/navbar/index.navbar.jsx";
import { SectionMovementAmount } from "../../components/section-movement-amount/index.section-movement-amount.jsx";
import { SectionMovementInformation } from "../../components/section-movement-information/index.section-movement-information.jsx";
import { MainStyled } from "../../components-style/main/index.main.js";
import { SectionStyled } from "../../components-style/section/index.section.js";
import { useContext, useEffect, useState } from "react";
import { Api } from "../../api/index.api.user.js";
import { GenerateDate } from "../../utils/generate-date/index.generate-date.js";
import { MovementContext } from "../../context/movement/index.context.movement.jsx";

export const Home = () => {
  const { movements, movementsAmount, setMovements, setMovementsAmount } =
    useContext(MovementContext);
  const [loading, setLoading] = useState(true);

  const findMovements = async () => {
    try {
      const movementsFind = await Api.findAllMovimentUser(
        Cookies.get("user_id"),
        GenerateDate.execute()
      );

      localStorage.setItem("date", GenerateDate.execute());

      setMovements(movementsFind.movements);
      setMovementsAmount(movementsFind.movementsAmount);

      setLoading(false);
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
      {loading ? (
        <h1>Calma ai cara</h1>
      ) : (
        <MainStyled>
          <SectionStyled>
            <SectionMovementInformation movements={movements} />
            <SectionMovementAmount amount={movementsAmount} />
          </SectionStyled>
        </MainStyled>
      )}
    </>
  );
};
