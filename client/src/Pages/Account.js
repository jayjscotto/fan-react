import React, { useContext } from 'react';
import { UserContext } from '../Components/UserContext';
import Stars from '../Components/Stars';
import { Grid } from '@material-ui/core';


const Account = () => {
    const { user } = useContext(UserContext);

    return (
        <Grid container>
            <Stars/>
        </Grid>
    )
}

export default Account;