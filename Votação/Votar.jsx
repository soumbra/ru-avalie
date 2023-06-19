import Checkbox from '@mui/material/Checkbox';
import { Card, Container, Typography, Button, TextField, FormGroup, FormControlLabel, Box } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Votar = () => {
    return (
        <Container sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Card sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom:1 }}>
                <CardContent>
                    <Typography variant='h5' fontWeight="900" fontSize="19" >
                        Almoço 12/05/2024
                    </Typography>
                    <FormGroup sx={{ mt: 2 }}>
                        <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox defaultChecked />} label="Carne Vermelha" />
                        <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox defaultChecked />} label="Carne Branca" />
                        <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox defaultChecked />} label="Vegetariano" />
                    </FormGroup>
                </CardContent>
                <CardActions >
                    <Button variant="contained" sx={{ backgroundColor: "#D32F2F" }}>Ruim</Button>
                    <Button variant="contained" sx={{ backgroundColor: "#ED6C02" }}>Regular</Button>
                    <Button variant="contained" sx={{ backgroundColor: "#2E7D32" }}>Bom</Button>
                </CardActions>
            </Card>
            <Box sx={{width:"100%" ,mt: 8, display:"flex", flexDirection:"column", alignItems:"center" }}>
                <TextField
                    sx={{mb: 5}}
                    margin="normal"
                    required
                    fullWidth
                    variant='standard'

                    label="Comentários"
                    id="comentarios-basic"
                    name="comentário"
                    type="text"
                />


                <Typography
                    component="subtitle1"
                    variant='subtitle1'
                    color="#00000099"
                >
                    Confirme seu voto !
                </Typography>

                <Button
                    
                    size='medium'
                    variant="contained"
                    sx={{
                        //margin top margin bottom
                        mt: 5
                    }}
                >
                    Confirmar
                </Button>
            </Box>
        </Container>
    )
}

export default Votar;