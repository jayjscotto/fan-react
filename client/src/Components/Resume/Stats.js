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
    }
  }));
  

export default function Stats() { 
    const classes = useStyles();
    const [stats, setStats] = useState({});

    useEffect(() => {
        API.getStats().then(stats => {
            if (stats.data) {
                console.log(stats)
                setStats(stats.data);
            }
        });
    }, []);

    const submitStats = () => {
        const statObj = {};
        statObj.sportsDrink = inputs.favSportsDrink;
        statObj.sportsBrand = inputs.favSportsBrand;
        statObj.preGameMeal = inputs.favMeal;
        statObj.favMusic = inputs.favMusic;
        statObj.favDrink =  inputs.favNonSportsDrink;

        console.log(statObj)
         
        API.storeStats({ statObj }).then(res => { 
            console.log(res)
            // inputs.favSportsDrink = "";
            // inputs.favSportsBrand = "";
            // inputs.favMeal = "";
            // inputs.favMusic = "";
            // inputs.favNonSportsDrink = "";
            setStats(statObj);
        })
    }

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(submitStats);

    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant='h3' component='h3'>Stats</Typography>
            </Grid>
            <Grid item className={classes.formContainer}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid item className={classes.gridItem} >
                        <Typography className={classes.stat} variant="h5" component="h5">What is your favorite sports drink?</Typography>
                        <Typography variant="body1" component="p">{stats.sportsDrink}</Typography>
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
                        <Typography variant="body1" component="p">{stats.sportsBrand}</Typography>
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
                        <Typography variant="body1" component="p">{stats.preGameMeal}</Typography>
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
                        <Typography variant="body1" component="p">{stats.favMusic}</Typography>
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
                        <Typography variant="body1" component="p">{stats.favDrink}</Typography>
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
    
    