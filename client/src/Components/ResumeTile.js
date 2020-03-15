import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import QuadrantModal from '../Components/QuadrantModal';

const useStyles = makeStyles(theme => ({
  tile: {
    display: 'flex',
    width: '50vw',
    height: '45vh',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#CCCCCC',
      cursor: 'pointer',
      border: '1px solid black'
    }
  },
  cardText: {
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '300px'
  }
}));

const ResumeTile = props => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <Grid
      item
      className={classes.tile}
      xl={6}
      lg={6}
      md={6}
      sm={10}
      onClick={handleModalToggle}
    >
      <Typography className={classes.cardText}>
        R
      </Typography>
      <QuadrantModal
        open={modalOpen}
        handleClose={handleModalToggle}
        resume={true}
        blog={false}
        video={false}
        network={false}
      />
    </Grid>
  );
};

export default ResumeTile;
