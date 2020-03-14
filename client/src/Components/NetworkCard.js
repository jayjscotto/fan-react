import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core';
import useForm from '../Hooks/Formhook';
import API from '../Utils/API';

const useStyles = makeStyles({
  root: {
    margin: '2em',
    minWidth: '350px'
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  center: {
    margin: 'auto'
  },
  button: {
    margin: '1em'
  }
});

const NetworkCard = props => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  const networkEdit = () => {
    API.storeNetwork(inputs.networkLink, props.networkName).then(result => {
      setEdit(false);
    });
  };

  // for editing fields
  const { inputs, handleChange, handleSubmit } = useForm(networkEdit);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5' component='h5'>
          {props.networkName}
        </Typography>
        <Typography variant='body2' component='p' align='center'>
          {props.dbNetworkLink}
        </Typography>
      </CardContent>
      <CardActions>
        {edit ? (
          <form className={classes.center} onSubmit={handleSubmit}>
            <TextField
              label={`${props.networkName} Link`}
              name={`${props.networkName}Link`}
              onChange={handleChange}
              value={inputs.networkLink}
              defaultValue={props.dbNetworkLink}
            />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
              size='medium'
            >
              Save
            </Button>
          </form>
        ) : (
          <Button
            className={classes.center}
            onClick={() => setEdit(true)}
            size='medium'
          >
            Edit 
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default NetworkCard;
