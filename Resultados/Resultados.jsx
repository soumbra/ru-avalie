import { Box, Container, Checkbox, FormGroup, FormControlLabel, Typography, Button } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';

const Resultados = () => {
    return (
        <Container sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{width: "100%"}}>
            <FormGroup sx={{ mt: 2 }}>
                <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox defaultChecked />} label="Carnes-Vermelhas" />
                <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox defaultChecked />} label="Carnes-Brancas" />
                <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox defaultChecked />} label="Vegetariano" />
            </FormGroup>
            <Box sx={{width:"95%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", mt: 4 }}>
                <Typography sx={{ color: "#00000099", mr: 1 }}>12/04/2021</Typography>
                <Box sx={{width:"100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <CalendarTodayIcon sx={{ color: "#1976D2" }} />
                    <SearchIcon sx={{ border: 1, borderRadius: '50%', borderColor: '#1976D2', backgroundColor: "#1976D2", color: "#FFFFFF", padding: 0.7 }} />
                </Box>
            </Box>
                <Button
                    size='large'
                    variant="contained"
                    sx={{
                        //margin top margin bottom
                        mt: 30
                    }}
                >
                    Buscar
                </Button>
            </Box>
        </Container>
    )
}

export default Resultados;