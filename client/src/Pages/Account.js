import React, { useContext } from 'react';
import { UserContext } from '../Components/UserContext';
import Stars from '../Components/Stars';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import Colorpicker from '../Components/colorPicker/Colorpicker';
import NameEdit from '../Components/NameEdit';
import EmailEdit from '../Components/EmailEdit';
import logo from '../images/logo3.JPG'



const useStyles = makeStyles({ 

});

const Account = () => {
    const { user } = useContext(UserContext);

    return (
      <Grid style={{margin: '4em 0'}}container justify="center" direction="column">

        {/* <Grid item xl={10} lg={10} md={10} sm={10} xs={11} style={{ margin: 'auto'}}>
          <Grid container direction="column" justify="center">

            <Grid item style={{display: 'flex', flexDirection:'row', margin: '5em auto 0 auto'}}>
              <Typography style={{marginRight: '1em', fontSize: '1.75em'}} variant='body1' component='p'>Pick your star color:</Typography>
              <Colorpicker/>
            </Grid>

            <Grid item style={{marginBottom: '6em'}}>
              <Stars/>
            </Grid>

          </Grid>
        </Grid> */}

        <Grid item xl={10} lg={10} md={10} sm={10} xs={11} style={{margin: 'auto'}}>
          <Paper elevation={3}>
            
            <Grid container justify="center" direction="column">
              
            <Grid item style={{display: 'flex', flexDirection:'row', margin: '5em auto 0 auto'}}>
              <Typography style={{marginRight: '1em', fontSize: '1.75em'}} variant='body1' component='p'>Pick your star color:</Typography>
              <Colorpicker/>
            </Grid>
            <Grid item style={{textAlign:'center'}}>
              <img src={logo} alt="logo"/>
            </Grid>
            <Grid item style={{marginBottom: '1em'}}>
              <Stars/>
            </Grid>

              <Grid item>
                {/* Edit Name */}
                <NameEdit />
                {/*  Edit email */}
                <EmailEdit />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Account;