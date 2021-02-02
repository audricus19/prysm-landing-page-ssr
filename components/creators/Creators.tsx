import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CreatorsSlider from './CreatorsSlider';
import ButtonTrans from '../buttons/ButtonTrans';
import { contentCreators } from '@/utils/mock';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 120,
    [theme.breakpoints.down('sm')]: {
      marginTop: 70,
    },
  },
  leftAlign: {
    maxWidth: 345,
    textAlign: 'left',
    marginTop: 60,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  },
  subTitle1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  subTitle2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  },
}));

function Creators() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.subTitle1} variant="subtitle1">
        Creators
      </Typography>
      <Typography className={classes.subTitle2} variant="subtitle2">
        Engage and Monetize.
      </Typography>
      <Grid container>
        {contentCreators.map((item, index: number) => (
          <Grid item md={4} key={index}>
            <Typography className={classes.leftAlign} variant="body2">
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item md={2} />
        <Grid item md={8} xs={12}>
          <CreatorsSlider />
        </Grid>
      </Grid>
      <ButtonTrans
        link="https://vpagmq8r6ld.typeform.com/to/ZXSRlbZI"
        title="Let's work together"
        font={18}
        top={40}
        arrow={true}
      />
    </div>
  );
}

export default Creators;
