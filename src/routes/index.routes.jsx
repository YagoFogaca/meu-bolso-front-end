import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/home/index.home";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
