import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  Slide
} from '@material-ui/core';
import resumeImg from '../images/JasonScottoResume.pdf';

// transition for help modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  dialogPaper: {
    minHeight: '80vh',
    maxHeight: '80vh',
    minWidth: '80vw',
    maxWidth: '95vw'
  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
        {props.resume ? <iframe src={resumeImg} height="700px"></iframe> : <></>}
        {props.blog ? <h1>Blog Posts:</h1> : <></>}
        {props.videos ? <h1>Videos:</h1> : <></>}
        {props.network ? <h1>Networks:</h1> : <></>}
        {/* Add conditions for other props */}
      <DialogActions>
        <Button onClick={props.handleClose} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
