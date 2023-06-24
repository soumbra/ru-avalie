import Checkbox from '@mui/material/Checkbox';
import { Card, Container, Typography, Button, TextField, FormGroup, FormControlLabel, Box, FormControl, InputLabel, Select, FormLabel } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';

const Votar = (props) => {
    
    const [comentario, setComentario] = useState("");
    const [voto, setVoto] = useState({ruim: 0, regular: 0, bom: 0})
    const [tipo, setTipo] = useState({cv:false, cb:false, vg:false});

    const {cv, cb, vg} = tipo

    function handleSubmit(event) {
        event.preventDefault();
        console.log(comentario);
        console.log(voto);
        console.log(tipo);
    }
    
    function handleCheckbox(event) {
        setTipo({
            ...tipo,
            [event.target.name]:event.target.checked,
        })
    }

    function handleButton(options) {
        setVoto(prevVotes => ({
            ...prevVotes,
            [options]: prevVotes[options] + 1
          }));
    }

    return (
        <Container sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Card sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom:1 }}>
                <CardContent>
                    <Typography variant='h5' fontWeight="900" fontSize="19" >
                        {props.data}
                    </Typography>
                        <FormControl component="fieldset" sx={{width:"100%"}}>
                            <FormLabel component="legend" sx={{width:"100%"}}>
                                <FormGroup sx={{ mt: 2 }}>
                                    <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox name='cv' checked={cv} onChange={handleCheckbox} />} label="Carne Vermelha" />
                                    <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox name='cb' checked={cb} onChange={handleCheckbox} />} label="Carne Branca" />
                                    <FormControlLabel sx={{color:"#757575", borderBottom: 1, borderColor:'grey.500'}} control={<Checkbox name='vg' checked={vg} onChange={handleCheckbox} />} label="Vegetariano" />
                                </FormGroup>
                            </FormLabel>
                        </FormControl>
                </CardContent>
                <CardActions >
                    <Button variant="contained" onClick={() => handleButton('ruim')} sx={{ backgroundColor: "#D32F2F" }}>Ruim</Button>
                    <Button variant="contained" onClick={() => handleButton('regular')} sx={{ backgroundColor: "#ED6C02" }}>Regular</Button>
                    <Button variant="contained" onClick={() => handleButton('bom')} sx={{ backgroundColor: "#2E7D32" }}>Bom</Button>
                </CardActions>
            </Card>
            <Box component="form" onSubmit={handleSubmit} sx={{width:"100%" ,mt: 8, display:"flex", flexDirection:"column", alignItems:"center"}}>
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
                    onChange={(event)=>setComentario(event.target.value)}
                />


                <Typography
                    component="h5"
                    variant='subtitle1'
                    color="#00000099"
                >
                    Confirme seu voto !
                </Typography>

                <Button
                    type='submit'
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