import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMenu2 from "./Menuv2";
import { Container, Typography } from "@mui/material";
//Rotas
import Votar from "./Votar";
import Resultados from "./Resultados";
import Login from "./Login";

//Setando as rotas do projeto (install react-router-dom)
const MainPage = () => {
  return (
    <>
      <BrowserRouter>
        <MyMenu2 />
        <Container sx={{ mt: 8 }}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="*" element={<Login />}></Route>
            <Route
              path="/votarRuAvalie"
              element={<Votar data="Almoço 12/05/2024" />}
            />
            <Route
              path="/resultadosRuAvalie"
              element={<Resultados data="12/04/2021" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default MainPage;
