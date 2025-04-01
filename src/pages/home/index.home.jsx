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
import { HandlingMovementContext } from "../../utils/handling-movement-context/index.handling-movement-context.js";
import { LoadingSpinner } from "../../components/loading-spinner/index.loading-spinner.jsx";

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

      setMovements(
        HandlingMovementContext.filterMovementContext(movementsFind.movements)
      );
      setMovementsAmount(movementsFind.movementsAmount);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    findMovements();
  }, []);

  return (
    <>
      <NavbarComponents />
      <MainStyled>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <SectionStyled>
            <SectionMovementInformation movements={movements} />
            <SectionMovementAmount amount={movementsAmount} />
          </SectionStyled>
        )}
      </MainStyled>
    </>
  );
};
