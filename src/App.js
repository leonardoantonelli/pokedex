import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Myheader from "./component/Myheader.jsx";
import Pokedex from "./component/Pokedex.js";
import CardDetail from "./component/CardDetail";
import "./sass/color.css";
function App() {
  return (
    <>
      <Myheader />
      <Router>
        <Routes>
          <Route exact path="/" Component={Pokedex} />
          <Route exact path="/pokemon/:id" Component={CardDetail} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
