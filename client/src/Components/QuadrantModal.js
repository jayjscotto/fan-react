import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  Slide,
  Typography
} from '@material-ui/core';
import resumeImg from '../images/resume.png'

// transition for help modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();
  
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      {props.resume ? (
        <img src={resumeImg} alt='resume image'/>
      ) : ( <></>)}
      {props.blog ? (
        <h1>Blog Posts:</h1>
      ) : ( <></>)}
      {props.videos ? (
        <h1>Videos:</h1>
      ) : ( <></>)}
      {props.network ? (
        <h1>Networks:</h1>
      ) : ( <></>)}
       {/* Add conditions for other props */}
      <DialogActions>
        <Button onClick={props.handleClose} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
