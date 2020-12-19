import React, { useEffect, useState } from 'react';
import { Grid, 
    //Link, 
    //Tooltip,
    Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Twitter from './TwitterEmbed';
import API from '../Utils/API';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      margin: '2em auto',
    },
    gridItem: {
        textAlign: 'center',
    },
    textContainer: {
        margin: '0 auto 1em auto',
    },
    title: {
      margin: '0.25em auto',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2em'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.5em'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3em'
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '3em'
      },
    },
    image: {
        // margin: '0 auto'
    },
    cardStatsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'spacearound',
    },
    cardStats: {
        textAlign: 'left',
        margin: 'auto 0',
        border: '2px solid black',
        fontSize: '1.2em'
    },
    networkGrid: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    networkLink: {
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    bio: {
        margin: '1em 0',
        whiteSpace: 'pre-wrap'
    },
    stat: {
        fontSize: '1.1em'
    }
  }));
  
  
const ResumeModal = (props) => {
    const classes = useStyles();
    const [userResume, setUserResume] = useState('http://via.placeholder.com/400x500');
    const [bio, setBio] = useState('');
    const [stats, setStats] = useState({});

    useEffect(() => {

        API.getResume().then(link => {
          if (link.data) {
            setUserResume(link.data);
          }
        });

        API.getBio().then(bio => {
            if(bio) {
                // console.log(bio.data.bio);
                setBio(bio.data.bio);
            }
        });

        API.getStats().then(stats => {
            if (stats.data) {
                setStats(stats.data);
            }
        });

      }, []);

    return (
        <>
            <Grid container justify='center'>
                <Grid className={classes.gridItem} item xl={12} lg={12} md={12} sm={12} xs={12}>
                    {/* Card titles */}
                    <Typography className={classes.title} variant='body1' component='p'>
                        Jared Waimon
                    </Typography>
                </Grid>
                <Grid item className={classes.gridItem} xl={9} lg={10} md={10} sm={12} xs={12}> 
                    <Grid container spacing={3} alignContent='center' justify='center' alignItems="center">
                        <Grid item xl={6} lg={6} md={8} sm={12} xs={12}> 
                            {/* card photos */}
                            <img alt="user" src={userResume} width={"100%"} /> 
                        </Grid>
                        <Grid item xl={6} lg={6} md={8} sm={10} xs={10}>
                            {/* card stats */}
                            <div className={classes.cardStatsContainer}>
                                <Typography className={classes.cardStats} variant='body1' component='p'>
                                    Position: Coach
                                </Typography>
                                <Typography className={classes.cardStats} variant='body1' component='p'>
                                    USA Hockey Level: Level 5
                                </Typography>
                                <Typography className={classes.cardStats} variant='body1' component='p'>
                                    Experience: 10+ years
                                </Typography>
                                <Typography className={classes.cardStats} variant='body1' component='p'>
                                    Highest Levels: NHL, Olympic, NCAA
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: '1em'}} justify="center">
                <Grid item className={classes.gridItemAuto} xl={9} lg={10} md={10} sm={10} xs={10}>
                <Typography variant='h5' component='h5'>Bio</Typography>
                    {/* bio paragraph */}
                    <div className={classes.textContainer}>
                        <Typography className={classes.bio} variant='body1' component='p'>
                            {bio}
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.gridItemAuto} xl={6} lg={6} md={8} sm={10} xs={10}>
                    {/* stats */}

                    <Typography variant='h5' component='h5'>Fun Facts</Typography>

                    <div className={classes.cardStatsContainer}>
                        <Grid item className={classes.cardStats} style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                Favorite Sports Drink:
                            </Typography>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                {stats.sportsDrink}
                            </Typography>
                        </Grid>
                        
                        <Grid item className={classes.cardStats} style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                Favorite Sports Brand: 
                            </Typography>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                {stats.sportsBrand}
                            </Typography>
                        </Grid>

                        <Grid item className={classes.cardStats} style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                Favorite Pre Game Meal:
                            </Typography>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                {stats.preGameMeal}
                            </Typography>
                        </Grid>

                        <Grid item className={classes.cardStats} style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                Favorite Type of Music: 
                            </Typography>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                {stats.favMusic}
                            </Typography>
                        </Grid>

                        <Grid item className={classes.cardStats} style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                Favorite Non Sports Drink:
                            </Typography>
                            <Typography className={classes.stat} variant='body1' component='p'>
                                {stats.favDrink}
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};

export default ResumeModal;
