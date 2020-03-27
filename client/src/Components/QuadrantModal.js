import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Slide } from '@material-ui/core';
import BlogModal from './BlogModal';
import VideoModal from './VideoModal';
import NetworkModal from './NetworkModal';
import API from '../Utils/API';

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
    minWidth: '70vw',
    maxWidth: '95vw',
    overflow: 'auto'
  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();

  const [userResume, setUserResume] = useState('http://via.placeholder.com/400x500');

  useEffect(() => {
    API.getResume().then(link => {
      console.log(link)
      if (link.data) {
        setUserResume(link.data);
      }
    })
  }, []);

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
      {props.resume ? (
        <iframe title='user_resume' src={userResume} height='700px'></iframe>
      ) : (
        <></>
      )}
      {props.blog ? <BlogModal /> : <></>}
      {props.videos ? <VideoModal /> : <></>}
      {props.network ? <NetworkModal /> : <></>}
      {/* Add conditions for other props */}
      <DialogActions>
        <Button onClick={props.handleClose} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
