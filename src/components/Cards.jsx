import { Typography, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";
import Card from "./Card";

const useStyles = makeStyles({
    component: {
        margin: '50px 0',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex'
    },
    container: {
        color: '#8ACA2B',
        marginBottom: 40
    }
})

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
    const classes = useStyles();

    if(!confirmed) {
        return <CircularProgress></CircularProgress>
    }

    return(
        <Box className = {classes.component}>
            <Typography className = {classes.container} variant="h4" gutterBottom>Coronovirus cases Global</Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Card cardTitle="Infected" value={confirmed.value} desc="Number of infected cases of COVID-19" lastUpdate={lastUpdate} />
                <Card cardTitle="Recovered" value={recovered.value} desc="Number of recovered cases from COVID-19" lastUpdate={lastUpdate} />
                <Card cardTitle="Deaths" value={deaths.value} desc="Number of deaths due to COVID-19" lastUpdate={lastUpdate} />
            </Grid>    
        </Box>
        
    )
}

export default Cards;