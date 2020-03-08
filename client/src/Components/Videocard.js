import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: '2em'
  },
  pos: {
    marginBottom: 12
  },
  link: {
    textDecoration: 'none',
    margin: '0 auto'
  },
  center: {
    margin: '0 auto'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [ edit, setEdit ] = useState(false)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h5' component='h5'>
          Video #{props.index}
        </Typography>
        <iframe width="350" height="225" src={`https://www.youtube.com/embed/${props.videoLink}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Typography variant='body2' component='p' align='justify'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        { edit ? (
          <>
           <TextField label="Outlined" variant="outlined" />
           <Button className={classes.center} size='medium'>Save Video</Button>
          </>
        ) : (
          <Button className={classes.center} size='medium'>Edit Video</Button>
        )}
      </CardActions>
    </Card>
  );
}
