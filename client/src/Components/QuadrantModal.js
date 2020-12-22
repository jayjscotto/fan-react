import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, Slide } from '@material-ui/core';
import BlogModal from './BlogModal';
import VideoModal from './VideoModal';
import NetworkModal from './NetworkModal';
import ResumeModal from './ResumeModal';
//import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
//import API from '../Utils/API';

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
      width: '80%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '80%'
    },
    [theme.breakpoints.down('md')]: {
      width: '95%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    },
  },
  link: {
    textDecoration: 'none',
    color: '#000000',
  },
  button: {
    background: '#32CD32',	
    color: '#f7f3c2',	
    transition: 'all .2s ease-in-out',
    '&:hover': {
      background: '#32CD32',
      transform: 'scale(1.04)',
      color: '#FFFFFF'
    }
  }
}));

export default function QuadrantModal(props) {
  const classes = useStyles();

 // const { user } = useContext(UserContext);
 // const [userResume, setUserResume] = useState('http://via.placeholder.com/400x500');

  // useEffect(() => {
  //   API.getResume().then(link => {
  //     if (link.data) {
  //       setUserResume(link.data);
  //     }
  //   })
  // }, []);

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
      {props.resume ?     
        <Link to='/user/resume' className={classes.link}>
          <Button className={classes.button}>
            Edit
          </Button>
        </Link> : <></>}
      {props.blog ? 
        <Link to='/user/blog' className={classes.link}>
          <Button className={classes.button}>
            Edit
          </Button>
        </Link> : <></>}
      {props.videos ? 
        <Link to='/user/videos' className={classes.link}>
          <Button className={classes.button}>
            Edit
          </Button>
        </Link> : <></>}
      {props.network ?
        <Link to='/user/network' className={classes.link}>
          <Button className={classes.button}>
            Edit
          </Button>
        </Link> : <></>}
     
        <Button onClick={props.handleClose} color='inherit'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
