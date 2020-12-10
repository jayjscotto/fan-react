import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Slide } from '@material-ui/core';
import BlogModal from './BlogModal';
import VideoModal from './VideoModal';
import NetworkModal from './NetworkModal';
import ResumeModal from './ResumeModal';
import { UserContext } from './UserContext';
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
    maxWidth: '80vw',
    overflow: 'auto',    
    [theme.breakpoints.down('xl')]: {
      width: '40%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '40%'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },

  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();

  const { user } = useContext(UserContext);
  const [userResume, setUserResume] = useState('http://via.placeholder.com/400x500');

  useEffect(() => {
    API.getResume().then(link => {
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
      {/* {props.resume ? (
        <iframe title='user_resume' src={userResume} height='700px'></iframe>
      ) : (
        <></>
      )} */}
      {props.resume ? <ResumeModal/> : <></>}
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
