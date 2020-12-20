import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  //Card, 
  //CardContent,
  Grid, 
  Typography, 
  Paper, 
  Button } from '@material-ui/core';
import API from '../Utils/API';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import captainC from '../images/captainC.png';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: '80vh',
        width: '80vw',
        textAlign: 'center',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
		},
		
}));

const Welcomeback = (props) => {
    const classes = useStyles();
    const [color, setColor] = useState('');

    useEffect(() => {
        API.getColor().then(color => {
            setColor(color.data.color)
        })
    }, [])
    return(
			<Grid className={classes.gridContainer}container justify='center' alignContent='center' alignItems='center'>
				<Grid item style={{margin: '1em auto'}}>
					<Paper eleavtion={3} style={{margin: '1em auto'}}>
						<Typography variant='h2' component='h2'><em>Welcome Back</em></Typography>
						<img src={captainC} alt='captain C'/>
						<Grid container justify='center' alignContent='center' alignItems='center'>
							<Grid item style={{margin: '1em', display: 'flex', flexDirection: 'row', fontSize: '2rem'}}>
								<StarIcon style={{ color: `${color}`, fontSize: '3em'}}/>
								<StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
								<StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
								<StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
								<StarBorderIcon style={{ color: `${color}`, fontSize: '3em'}} />
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
    );
}

export default Welcomeback;