import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./global.style";
import { Home } from "./pages/home/index.home.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
