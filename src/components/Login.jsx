import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const loginindex = async (login, senha) => {
    const response = await fetch("https://ru-avalie-sigaa.vercel.app/sigaa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, senha }),
    });
    if (response.ok) {
      return response.json();
    } else {
      return response.text();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginindex(matricula, senha)
      .then((data) => {
        console.log(data.status);
        if (data.status === "ATIVO") {
          alert("bem vindo: " + data.nome);
          navigate("/votarRuAvalie");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="xs">
      <Typography
        component="h1"
        variant="h2"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 20,
          fontWeight: "900",
          fontSize: 84,
        }}
      >
        RU.Avalie
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Typography component="h2" variant="h5">
          Login com o SIGAA
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          standard={matricula}
          label="Login"
          id="login"
          name="login"
          type="login"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          standard={senha}
          label="Senha"
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            //margin top margin bottom
            my: 2,
          }}
        >
          Login
        </Button>

        <Box
          //colocar style
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link underline="none" href="#">
            Não é aluno? Cadastre-se Aqui
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
