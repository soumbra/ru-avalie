import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography} from "@mui/material"
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';


const MyMenu = () => {
    return (
        <AppBar position="static">
        <Container>
            <Toolbar>
                <Box sx={{ml:2, width:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <HowToVoteIcon sx={{display:{xs:"none", md:"flex"}, mr:2}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration:"none",
                            color:"white",
                            fontFamily:"monospace",
                            fontWeight: 800
                        }}
                    >
                        Vote
                    </Typography>
                    
                    <LeaderboardIcon sx={{display:{xs:"none", md:"flex"}, mr:1, ml:2}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration:"none",
                            color:"white",
                            fontFamily:"monospace",
                            fontWeight: 800
                        }}
                    >
                        Resultados
                    </Typography>
                    
                    <SettingsIcon sx={{display:{xs:"none", md:"flex"}, mr:1, ml:2}}/>
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration:"none",
                            color:"white",
                            fontFamily:"monospace",
                            fontWeight: 800
                        }}
                    >
                        Ajustes
                    </Typography>
                </Box>
            </Toolbar>               
        </Container>
    </AppBar>
    )
}

export default MyMenu