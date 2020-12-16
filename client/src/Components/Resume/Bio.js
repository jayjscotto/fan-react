import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import API from '../Utils/API';
import { storage } from '../firebase-config';
import { UserContext } from '../Components/UserContext';
import {
  Grid,
  Button,
  TextField,
  Typography,
  TextareaAutosize
} from '@material-ui/core';
import useForm from '../Hooks/Formhook';

const useStyles = makeStyles(theme => ({
    button: {
      margin: '1.5em auto'
    },
    cardPhoto: {
      margin: 'auto',
      height: '275px',
      width: '375px'
    },
    stat: {
      border: '1px solid red',
      margin: '1em auto'
    },
  }));
  

export default function Bio() { 

    return (
        <Grid container>
            <Grid item>
                {/* stat 1 */}

            </Grid>
            <Grid item>
                {/* stat 2 */}
            </Grid>
            <Grid item>
                {/* stat 3 */}
            </Grid>
            <Grid item>
                {/* stat 4 */}
            </Grid>
            <Grid item>
                {/* stat 5 */}
            </Grid>

    {/*        
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container>
                        <Grid item>
                            <TextField
                                label='Favorite Sports Drink'
                                name='favSportsDrink'
                                onChange={handleChange}
                                value={inputs.favSportsDrink}
                                className={classes.stat}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='Favorite Sports Drink'
                                name='favSportsDrink'
                                onChange={handleChange}
                                value={inputs.favSportsDrink}
                                className={classes.stat}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='Favorite Sports Drink'
                                name='favSportsDrink'
                                onChange={handleChange}
                                value={inputs.favSportsDrink}
                                className={classes.stat}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='Favorite Sports Drink'
                                name='favSportsDrink'
                                onChange={handleChange}
                                value={inputs.favSportsDrink}
                                className={classes.stat}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label='Favorite Sports Drink'
                                name='favSportsDrink'
                                onChange={handleChange}
                                value={inputs.favSportsDrink}
                                className={classes.stat}
                            />
                        </Grid>
                    </Grid>
                    <Button variant='contained' type='submit' className={classes.button}>
                      Submit
                    </Button>
                </form>
                   */}
        </Grid>
    );
}

