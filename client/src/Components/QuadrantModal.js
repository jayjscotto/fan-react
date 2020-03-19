import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  Slide,
  Typography,
  Paper
} from '@material-ui/core';
import resumeImg from '../images/JasonScottoResume.pdf'

// transition for help modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();
  
  return (
    <Dialog
      style={{height: '100%', padding: '1em'}}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <Paper>
      {props.resume ? (
       <iframe src={resumeImg} frameborder="0" height='850px' width='650px'></iframe>
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
       </Paper>
      <DialogActions>
        <Button onClick={props.handleClose} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
