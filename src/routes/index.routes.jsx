import { Routes, Route } from "react-router";
import { Home } from "../pages/home/index.home";
import { Login } from "../pages/login/index.login";
import { UserPersonalInfo } from "../pages/user-personal-info/index.user-personal-info";
import { MovementContextProvider } from "../context/movement/index.context.movement";

export const RoutesApp = () => {
  return (
    <MovementContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Home />} />
        <Route path="/user/personal_info" element={<UserPersonalInfo />} />
      </Routes>
    </MovementContextProvider>
  );
};
