import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyMenu2 from "./Menuv2"
import { Container, Typography } from "@mui/material"
//Rotas
import Votar from "./Votação/Votar"
import Resultados from "./Resultados/Resultados"

//Setando as rotas do projeto (install react-router-dom)
const MainPage = () => {
    return (
        <>
            <BrowserRouter>
                <MyMenu2 />
                    <Container sx={{mt:8}}> 
                        <Routes>
                            <Route path="votarRuAvalie" element={<Votar />}/>
                            <Route path="resultadosRuAvalie" element={<Resultados />} />
                        </Routes>
                    </Container>
            </BrowserRouter>
        </>
    )
}

export default MainPage