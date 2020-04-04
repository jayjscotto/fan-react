import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 475,
    margin: '1em auto',
    '&:hover' : {
      boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.3);'
    }
  },
  pos: {
    marginBottom: 12
  },
  link: {
    textDecoration: 'none',
    margin: '0.5em auto'
  },
  center: {
    margin: '0 auto'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align='center' variant='h4' component='h2'>
          {props.title}
        </Typography>
        <Typography align='center' className={classes.pos} color='textSecondary'>
          {props.title2}
        </Typography>
        <Typography variant='body2' component='p' align='justify'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/user/${props.link}`}>
          <Button variant='contained' className={classes.center} size='medium'>{props.buttonTitle}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
