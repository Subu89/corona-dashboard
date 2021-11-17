import { Grid, CardContent, Box, Typography, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Countup from 'react-countup';

const useStyles = makeStyles({
    header: {
        background: '#F5F5F5',
        padding: 10
    }
})

const CardComponent = ({cardTitle, value, desc, lastUpdate}) => {
    const classes = useStyles();
    return (
        <Grid component={Card} style={{margin:20, borderBottom: '10px solid yellow'}}>
            <Box className={classes.header}>
                <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <Countup start={0} end={value} duration={3} separator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent;