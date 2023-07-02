import Checkbox from "@mui/material/Checkbox";
import {
  Card,
  Container,
  Typography,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Box,
  FormControl,
  FormLabel,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import moment from "moment";
import { useEffect } from "react";
import axios from "axios";

const Votar = (props) => {
  const [comentario, setComentario] = useState("");
  const [voto, setVoto] = useState({ ruim: 0, regular: 0, bom: 0 });
  const [tipo, setTipo] = useState({ cv: false, cb: false, vt: false });
  const [datasets, setDatasets] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState("");
  let dataDeHoje = new Date();
  let ano = dataDeHoje.getFullYear();
  let mes = String(dataDeHoje.getMonth() + 1).padStart(2, "0");
  let dia = String(dataDeHoje.getDate()).padStart(2, "0");
  let data = ano + "-" + mes + "-" + dia;
  console.log(data);
  const [id, setId] = useState(0);

  const [votacao, setVotacao] = useState({
    Data: data,
    Periodo: currentPeriod,
    CV: {
      ruim: 0,
      regular: 0,
      bom: 0,
    },
    CB: {
      ruim: 0,
      regular: 0,
      bom: 0,
    },
    VT: {
      ruim: 0,
      regular: 0,
      bom: 0,
    },
  });

  useEffect(() => {
    const checkPeriod = () => {
      const currentTime = moment();
      const lunchStartTime = moment("11:30", "HH:mm");
      const lunchEndTime = moment("15:00", "HH:mm");
      const dinnerStartTime = moment("16:00", "HH:mm");
      const dinnerEndTime = moment("18:30", "HH:mm");

      if (currentTime.isBetween(lunchStartTime, lunchEndTime)) {
        setCurrentPeriod("Almoço");
      } else if (currentTime.isBetween(dinnerStartTime, dinnerEndTime)) {
        setCurrentPeriod("Jantar");
      } else {
        setCurrentPeriod("Outro período");
      }
    };

    checkPeriod();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/votacoes/`)
      .then((response) => {
        setDatasets(response.data);
        console.log(response.data.data[0]);
        console.log(response.data.data.length);
        for (let i = 0; i < response.data.data.length; i++) {
          console.log(
            response.data.data[i].attributes.Data + ":" + data.toString()
          );
          let teste = response.data.data[i].attributes.Data;
          console.log(teste.toString() + ":" + data.toString());
          if (teste.toString() === data.toString()) {
            console.log("Achou");
            setId(response.data.data[i].id);
            votacao.Periodo = currentPeriod;
            console.log(response.data.data[i].attributes.CV.ruim);

            // votacao.CV.ruim = response.data.data[i].attributes.CV.ruim;
            // console.log(votacao.CV.ruim);
            // votacao.CV.regular = response.data.data[i].attributes.CV.regular;
            // votacao.CV.bom = response.data.data[i].attributes.CV.bom;
            // votacao.CB.ruim = response.data.data[i].attributes.CB.ruim;
            // votacao.CB.regular = response.data.data[i].attributes.CB.regular;
            // votacao.CB.bom = response.data.data[i].attributes.CB.bom;
            // votacao.VT.ruim = response.data.data[i].attributes.VT.ruim;
            // votacao.VT.regular = response.data.data[i].attributes.VT.regular;
            // votacao.VT.bom = response.data.data[i].attributes.VT.bom;
            // setVotacao(votacao);
            setVotacao({ ...votacao, ...response.data.data[i].attributes });
            console.log(votacao);
          }
        }
        console.log(response.data.data[1].attributes.Data);
      })
      .catch((error) => console.log(error));
  }, []);

  const { cv, cb, vt } = tipo;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(comentario);
    console.log(voto);
    console.log(tipo);
    console.log(votacao.CV.ruim);
    console.log(currentPeriod);
    console.log(votacao);
    if (tipo.cv == true) {
      if (voto.ruim >= 1) {
        votacao.CV.ruim = votacao.CV.ruim + 1;
      } else if (voto.regular >= 1) {
        votacao.CV.regular = votacao.CV.regular + 1;
      } else if (voto.bom >= 1) {
        votacao.CV.bom = votacao.CV.bom + 1;
      }
    }
    if (tipo.cb == true) {
      if (voto.ruim >= 1) {
        votacao.CB.ruim = votacao.CB.ruim + 1;
      } else if (voto.regular >= 1) {
        votacao.CB.regular = votacao.CB.regular + 1;
      } else if (voto.bom >= 1) {
        votacao.CB.bom = votacao.CB.bom + 1;
      }
    }
    if (tipo.vt == true) {
      if (voto.ruim >= 1) {
        votacao.VT.ruim = votacao.VT.ruim + 1;
      } else if (voto.regular >= 1) {
        votacao.VT.regular = votacao.VT.regular + 1;
      } else if (voto.bom >= 1) {
        votacao.VT.bom = votacao.VT.bom + 1;
      }
    }
    setVotacao(votacao);
    console.log(votacao);
    axios
      .put(`http://localhost:1337/api/votacoes/${id}`, { data: votacao })
      .then(
        (response) => {
          console.log(response);
        }
        // (error) => {
        //   console.log(error);
        // }
      );
  }
  function handleCheckbox(event) {
    setTipo({
      ...tipo,
      [event.target.name]: event.target.checked,
    });
  }

  function handleButton(options) {
    setVoto((prevVotes) => ({
      ...prevVotes,
      [options]: prevVotes[options] + 1,
    }));
  }

  return (
    <Container
      sx={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 1,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="900" fontSize="19">
            {currentPeriod + " "} {data}
          </Typography>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <FormLabel component="legend" sx={{ width: "100%" }}>
              <FormGroup sx={{ mt: 2 }}>
                <FormControlLabel
                  sx={{
                    color: "#757575",
                    borderBottom: 1,
                    borderColor: "grey.500",
                  }}
                  control={
                    <Checkbox
                      name="cv"
                      checked={cv}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Carne Vermelha"
                />
                <FormControlLabel
                  sx={{
                    color: "#757575",
                    borderBottom: 1,
                    borderColor: "grey.500",
                  }}
                  control={
                    <Checkbox
                      name="cb"
                      checked={cb}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Carne Branca"
                />
                <FormControlLabel
                  sx={{
                    color: "#757575",
                    borderBottom: 1,
                    borderColor: "grey.500",
                  }}
                  control={
                    <Checkbox
                      name="vt"
                      checked={vt}
                      onChange={handleCheckbox}
                    />
                  }
                  label="Vegetariano"
                />
              </FormGroup>
            </FormLabel>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => handleButton("ruim")}
            sx={{ backgroundColor: "#D32F2F" }}
          >
            Ruim
          </Button>
          <Button
            variant="contained"
            onClick={() => handleButton("regular")}
            sx={{ backgroundColor: "#ED6C02" }}
          >
            Regular
          </Button>
          <Button
            variant="contained"
            onClick={() => handleButton("bom")}
            sx={{ backgroundColor: "#2E7D32" }}
          >
            Bom
          </Button>
        </CardActions>
      </Card>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ mb: 5 }}
          margin="normal"
          fullWidth
          variant="standard"
          label="Comentários"
          id="comentarios-basic"
          name="comentário"
          type="text"
          onChange={(event) => setComentario(event.target.value)}
        />

        <Typography component="h5" variant="subtitle1" color="#00000099">
          Confirme seu voto !
        </Typography>

        <Button
          type="submit"
          size="medium"
          variant="contained"
          sx={{
            //margin top margin bottom
            mt: 5,
          }}
        >
          Confirmar
        </Button>
      </Box>
    </Container>
  );
};

export default Votar;
