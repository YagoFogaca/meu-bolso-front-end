import { Routes, Route } from "react-router";
import { Home } from "../pages/home/index.home";
import { Login } from "../pages/login/index.login";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/app" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
