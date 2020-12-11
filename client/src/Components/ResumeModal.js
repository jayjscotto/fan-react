import React, { useEffect, useState } from 'react';
import { Grid, Link, Tooltip, Typography } from '@material-ui/core';
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
    gridItemAuto: {
        
    },
    textContainer: {
        margin: '1em auto',
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
        fontSize: '1.25em'
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
    }
  }));
  
  
const ResumeModal = (props) => {
    const classes = useStyles();
    const [userResume, setUserResume] = useState('http://via.placeholder.com/400x500');

    useEffect(() => {
        API.getResume().then(link => {
          if (link.data) {
            setUserResume(link.data);
          }
        })
      }, []);

    return (
        <>
            <Grid container justify='center'>
                <Grid  className={classes.gridItem} item xl={12} lg={12} md={12} sm={12} xs={12}>
                    {/* Card titles */}
                    <Typography className={classes.title} variant='body1' component='p'>
                        Jared Waimon
                    </Typography>
                </Grid>
                <Grid item justify='center' alignContent='center' className={classes.gridItem} xl={9} lg={10} md={10} sm={12} xs={12}> 

                    <Grid container spacing={3} alignContent='center' justify='center' alignItems="center">
                        <Grid item xl={6} lg={6} md={8} sm={12} xs={12}> 
                            {/* card photos */}
                            <img src={userResume} width={"100%"} /> 
                        </Grid>
                        <Grid alignItems='center' item xl={6} lg={6} md={8} sm={12} xs={12}>
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
            <Grid container justify="center">
                <Grid item style={{border: '1px solid red'}} className={classes.gridItemAuto} xl={9} lg={10} md={10} sm={12} xs={12}>
                    {/* bio paragraph */}
                    <div className={classes.textContainer}>
                        <Typography className={classes.bio} variant='body1' component='p'>
                            Jared Waimon is the Founder/Owner for Pro Crease Goaltending
                        </Typography>

                        <Typography className={classes.bio} variant='body1' component='p'>In addition to overseeing the year-round operation of Pro Crease Goaltending, Waimon is an NHL Stanly Cup Champion Goaltending Scout for the Tampa Bay Lightning. 
                        </Typography>
                        
                        <Typography className={classes.bio} variant='body1' component='p'>
                            Waimon is also the Regional Mentor for the USA Hockey/Warren Strelow National Goaltending Program, USA Hockey Goaltending Coach/Evaluator; New England and Atlantic Districts and goaltending instructor/consultant for several nationally ranked elite travel teams and prep schools including the Mid Fairfield Youth Hockey Association, Avon Old Farms, Salisbury School, Taft School and Westminster School.
                        </Typography>

                        <Typography className={classes.bio} variant='body1' component='p'>Waimon also serves as Goaltender Development Coordinator for the Connecticut Hockey Conference.</Typography>
                            
                        <Typography className={classes.bio} variant='body1' component='p'>Waimon serves in a number of senior coaching & consultant capacities for a prestigious mix of private and public organizations.
                        </Typography>
                            
                        <Typography className={classes.bio} variant='body1' component='p'>A number of recent Pro Crease Goaltending clients have been drafted and/or signed as free agents and play professionally including:
                        </Typography>
                        
                        <Typography className={classes.bio} variant='body1' component='p'>
                            Michael Garteig (Vancouver Canucks; Quinnipiac University)
                            Steve Michalek (Minnesota Wild; Harvard University)
                            Andrew Shortridge (San Jose Sharks; Quinnipiac University)
                            Spencer Knight (Florida Panthers; Boston College)
                            Thatcher Demko (Vancouver Canucks; Boston College)
                            Peyton Jones (Chicago Blackhawks; Penn State)
                        </Typography>
                    
                        <Typography className={classes.bio} variant='body1' component='p'>Pro Crease Goaltending provides a wide range of services from summer and year-round camps to elite private instruction for prep schools, Division I colleges and youth organizations.
                        </Typography>
                            
                        <Typography className={classes.bio} variant='body1' component='p'>Our camps and instructional sessions are operated at premier facilities including Quinnipiac University, Colgate University, University of New England, Avon Old Farms School, Westminster School and select public facilities including Chelsea Piers Connecticut (Stamford, Connecticut), Newington Arena (Newington, Connecticut) and Brewster Ice Arena (Brewster, New York).
                        </Typography>  
                        
                        <Typography className={classes.bio} variant='body1' component='p'>Our summer camp population is approximately 500-600 students, while our year-round camps and semi and private population is an additional 400 students.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                    {/*  quick hits titles */}
                </Grid>
                <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                    {/* quick hits values */}
                </Grid>
            </Grid>
        </>
    )
};

export default ResumeModal;
