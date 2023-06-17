import { Box, Container, TextField, Typography, Button, Link } from "@mui/material"

const Login = () => {
    return (
        <Container maxWidth="xs">
            <Typography
                component="h1"
                variant="h2"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 2,
                    fontWeight: "800",
                    fontSize: 84
                }}
            >
                RU.<br></br>Avalie
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 5
                }}

            >
                <Typography
                    component="h1"
                    variant="h5"
                >
                    Login com o SIGAA
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus

                    label="Login"
                    id="login"
                    name="login"
                    type="login"
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        //margin top margin bottom
                        my: 2
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
                        width: "100%"
                    }}
                >
                    <Link
                        underline="none"
                        href="#"
                    >
                        Não é aluno? Cadastre-se Aqui
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Login