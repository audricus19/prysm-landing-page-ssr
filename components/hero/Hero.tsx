import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ButtonTransWaitlist from '../buttons/ButtonTransWaitlist';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 120,
    marginTop: 100,
    paddingBottom: 85,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30,
      textAlign: 'center',
    },
  },
  title: {
    fontSize: 57,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: '72px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '58px',
    },
  },
  description: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
    maxWidth: 470,
    marginTop: 20,
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item md={7} xs={12}>
        <Typography className={classes.title}>
          Outsmart the Market, Together.
        </Typography>
        <Typography className={classes.description}>
          Prysm is a collaborative trading economy built on DeFi. Discover your
          next trade, execute on top liquidity, and earn for your contributions.
        </Typography>
        <ButtonTransWaitlist
          title="Join Beta Waitlist"
          font={24}
          top={80}
          arrow={true}
        />
      </Grid>
    </Grid>
  );
}

export default Hero;
