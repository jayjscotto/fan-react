import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import API from '../../Utils/API';
import { storage } from '../../firebase-config';
import {
  Grid,
  Button,
  TextField,
  Typography,
  TextareaAutosize
} from '@material-ui/core';
import useForm from '../../Hooks/Formhook';


const useStyles = makeStyles(theme => ({
    button: {
      margin: '1.5em auto'
    },
    stat: {
      marginTop: '0.5em'
    },
    formContainer: {

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    statContainer: {
        margin: '0 auto',
    }
  }));
  

export default function Stats() { 
    const classes = useStyles();
    const [stats, setStats] = useState({
        favSportsDrink: "",
        favSportsBrand: "",
        favMeal: "",
        favMusic: "",
        favNonSportsDrink: ""
    });

    useEffect(() => {
        // API.getStats().then(stats => {
        //     if (stats.data) {
        //         //console.log(stats)
        //     // set inputs data equal to stats.data
        //     }
        // });
    })

    const submitStats = () => {
        console.log(inputs.favSportsBrand);
        const stats = {};
        stats.sportsDrink = inputs.favSportsDrink;
        stats.sportsBrand = inputs.favSportsBrand;
        stats.preGameMeal = inputs.favMeal;
        stats.favMusic = inputs.favMusic;
        stats.favDrink =  inputs.favNonSportsDrink;
        console.log(stats.sportsBrand);


        API.storeStats({ stats }).then(resetFields => {
            inputs.favSportsDrink = '';
            inputs.favSportsBrand = '';
            inputs.favMeal = '';
            inputs.favMusic = '';
            inputs.favNonSportsDrink = '';
            setStats(stats);
        })
    }

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(submitStats);
    return (
        <Grid container direction="column" className={classes.statContainer}>
            <Grid item>
                <Typography variant='h2' component='h2'>Stats</Typography>
            </Grid>
            <Grid item className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid item className={classes.gridItem} >
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite sports drink?</Typography>
                        <TextField
                            label='Favorite Sports Drink'
                            name='favSportsDrink'
                            onChange={handleChange}
                            value={inputs.favSportsDrink}
                            className={classes.statInput}
                        />
                    </Grid>
              
                    <Grid item className={classes.gridItem}>
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite sports brand?</Typography>
                        <TextField
                            label='Favorite Sports Brand'
                            name='favSportsBrand'
                            onChange={handleChange}
                            value={inputs.favSportsBrand}
                            className={classes.statInput}
                        />
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite pre-game meal?</Typography>
                        <TextField
                            label='Favorite Pre-game Meal'
                            name='favMeal'
                            onChange={handleChange}
                            value={inputs.favMeal}
                            className={classes.statInput}
                        />
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite type of music?</Typography>
                        <TextField
                            label='Favorite Music'
                            name='favMusic'
                            onChange={handleChange}
                            value={inputs.favMusic}
                            className={classes.statInput}
                        />
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite non sports drink?</Typography>
                        <TextField
                            label='Favorite Non-sports Drink'
                            name='favNonSportsDrink'
                            onChange={handleChange}
                            value={inputs.favNonSportsDrink}
                            className={classes.statInput}
                        />
                    </Grid>

                    <Button variant='contained' type='submit' className={classes.button}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
    
    