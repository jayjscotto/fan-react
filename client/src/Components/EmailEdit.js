import React, { useEffect, useState, useContext } from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import API from '../Utils/API';
import { UserContext } from './UserContext';
import { makeStyles } from '@material-ui/core/styles';
import useForm from '../Hooks/Formhook';


const useStyles = makeStyles(theme => ({
    button: {
      margin: '1.5em'
    },
    container: {
        minWidth: '35vw',
        minHeight: '15vh',
        justifyContent: 'center',
        padding: '1.5em',
        margin: '.5em'
    },
    form: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

const NameEdit = () => {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [edit, setEdit] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        API.getEmail().then(apiEmail => {
            setEmail(apiEmail.data.email)
        });
    }, []);

    const handleEdit = () => {
        inputs.email = email;
        setEdit(edit => !edit);
    }

    const submitName = () => {
        API.storeEmail({ email: inputs.email }).then(res => {
            console.log(res);
            setEmail(inputs.email);
        })
    }

    // for editing fields
    const { inputs, handleChange, handleSubmit } = useForm(submitName);

    return (
        <Grid container className={classes.container}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {/* User Name */}
                <Typography variant="h5" component="h5" style={{textAlign: 'center'}}>
                    Current Email: {email}
                </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} direction='row' style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around'}}>
                {/* Edit Button */}
                <Button className={classes.button} onClick={handleEdit} variant="contained">Edit</Button>
            {edit ? (
      
                    <form onSubmit={handleSubmit} className={classes.form}>
                    {/* Text field */}
                    <TextField
                        label='Email'
                        name='email'
                        onChange={handleChange}
                        value={inputs.email}
                    />
                    <Button variant='contained' type='submit' className={classes.button}>
                        Submit
                    </Button>
                    </form>
                
            ):(<></>)}
            </Grid>
        </Grid>
    )

}

export default NameEdit