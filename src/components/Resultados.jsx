import { Box, Container, Checkbox, FormControl, FormGroup, FormControlLabel, Typography, Button, FormLabel, IconButton } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Resultados = (props) => {

    const [currentDate, setCurrentData] = useState(new Date());
    const [tipo, setTipo] = useState({ cv: false, cb: false, vg: false });

    const { cv, cb, vg } = tipo


    function handleCheckbox(event) {
        setTipo({
            ...tipo,
            [event.target.name]: event.target.checked,
        })
    }

    return (
        <Container sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
                <FormControl component="fieldset" sx={{ width: "100%" }}>
                    <FormLabel component="legend" sx={{ width: "100%" }}>
                        <FormGroup sx={{ mt: 2 }}>
                            <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox checked={cb} name='cb' onChange={handleCheckbox} />} label="Carnes-Vermelhas" />
                            <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox checked={cv} name='cv' onChange={handleCheckbox} />} label="Carnes-Brancas" />
                            <FormControlLabel sx={{ color: "#757575", borderBottom: 1, borderColor: 'grey.500' }} control={<Checkbox checked={vg} name='vg' onChange={handleCheckbox} />} label="Vegetariano" />
                        </FormGroup>
                    </FormLabel>
                </FormControl>
                <Box sx={{ width: "95%", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", mt: 4 }}>
                    <Typography sx={{ color: "#00000099", mr: 1 }}>
                        {props.data}
                    </Typography>
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <CalendarTodayIcon sx={{ color: "#1976D2" }} />
                                <IconButton sx={{ border: 1, borderRadius: '50%', borderColor: '#1976D2', backgroundColor: "#1976D2", color:"FFFFFF"}}>
                                    <SearchIcon sx={{color:"#FFFFFF"}} />
                                </IconButton>
                    </Box>
                </Box>
                <Button
                    type="submit"
                    size='large'
                    variant="contained"
                    sx={{
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