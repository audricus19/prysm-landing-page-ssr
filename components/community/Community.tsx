import React from 'react';
import Image from 'next/image';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ButtonTrans from '../buttons/ButtonTrans';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 82,
    marginBottom: 79,
    background:
      'linear-gradient(180deg, #EED9FF 0%, rgba(238, 217, 255, 0) 100%)',
  },
  font18: {
    fontSize: '18.17px',
    color: '#1F1F41',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '25.15px',
    width: 320,
    margin: 'auto',
    marginTop: 32,
  },
  mTop: {
    marginTop: 110,
    marginBottom: 15,
  },
  pt2: {
    paddingTop: 85,
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  },
  polychain: {
    width: 157,
  },
}));

function Community() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.pt2} variant="h3">
        Let's Hang Out
      </Typography>
      <Typography className={classes.font18}>
        We’re talking about the markets and jamming on product improvements
        live. Top users on Prysm will also get access to special channels and
        roles.
      </Typography>
      <ButtonTrans link="https://discord.gg/p5SED4XbU6" title="Join our Discord" font={18} top={40} arrow={false} />
      <Typography className={classes.mTop} variant="body1">
        Incubated by
      </Typography>
      <Image
        className={classes.polychain}
        src="/images/polychain-capital-logo.png"
        alt="Polychain_Capital_Logo"
        width={157}
        height={157}
      />
    </div>
  );
}

export default Community;
