import { Routes, Route } from "react-router";
import { Home } from "../pages/home/index.home";
import { Login } from "../pages/login/index.login";
import { UserPersonalInfo } from "../pages/user-personal-info/index.user-personal-info";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/app" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/user/personal_info" element={<UserPersonalInfo />} />
      </Routes>
    </>
  );
};
