import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import QuadrantModal from '../Components/QuadrantModal';

const useStyles = makeStyles(theme => ({
  tile: {
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#CCCCCC',
      cursor: 'pointer',
      opacity: '0.7'
    }
  },
  cardText: {
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '250px'
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
      xl={5}
      lg={5}
      md={5}
      sm={10}
      xs={10}
      style={{margin: '1em'}}
    >
      <Grid item className={classes.tile} onClick={handleModalToggle}>
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
    </Grid>
  );
};

export default ResumeTile;
