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
        minWidth: '30vw',
        minHeight: '10vh',
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
    const [name, setName] = useState('');
    const [edit, setEdit] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        API.getName().then(apiName => {
            setName(apiName.data.name)
        });
    }, []);

    const handleEdit = () => {
        inputs.name = name;
        setEdit(edit => !edit);
    }

    const submitName = () => {
        API.storeName({ name: inputs.name }).then(res => {
            console.log(res);
            setName(inputs.name);
        })
    }

    // for editing fields
    const { inputs, handleChange, handleSubmit } = useForm(submitName);

   

    return (
        <Grid container className={classes.container}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {/* User Name */}
                <Typography variant="h5" component="h5" style={{textAlign: 'center'}}>
                    Current Name: {name}
                </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} direction='row' style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around'}}>
                {/* Edit Button */}
                <Button className={classes.button} onClick={handleEdit} variant="contained">Edit</Button>
            {edit ? (
      
                    <form onSubmit={handleSubmit} className={classes.form}>
                    {/* Text field */}
                    <TextField
                        label='Name'
                        name='name'
                        onChange={handleChange}
                        value={inputs.name}
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