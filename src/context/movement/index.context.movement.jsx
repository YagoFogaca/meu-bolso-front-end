import { createContext, useState } from "react";

const initialMovements = {
  amount: 0,
  date: "",
  description: "",
  hour: "",
  id: 0,
  type: "",
  user_id: "",
};
const initialMovementAmount = {
  entry: "",
  exit: "",
};

export const MovementContext = createContext({
  movements: [],
  movementsAmount: {},
  setMovements: () => {},
  setMovementsAmount: () => {},
});

export const MovementContextProvider = ({ children }) => {
  const [movements, setMovements] = useState([initialMovements]);
  const [movementsAmount, setMovementsAmount] = useState(initialMovementAmount);

  return (
    <MovementContext.Provider
      value={{ movements, movementsAmount, setMovements, setMovementsAmount }}
    >
      {children}
    </MovementContext.Provider>
  );
};
