import React, { useEffect } from 'react';
import Image from 'next/image';
import { Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMatomo } from "@datapunt/matomo-tracker-react";

import Hero from '@/components/hero/Hero';
import Traders from '@/components/traders/Traders';
import Creators from '@/components/creators/Creators';
import Community from '@/components/community/Community';

const useStyles = makeStyles({
  left: {
    position: 'absolute',
    width: '90vw',
    top: 0,
  },
  right: {
    position: 'absolute',
    width: '75vw',
    right: 0,
  },
});

function Home() {
  const classes = useStyles();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    trackPageView({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Hidden smDown>
        <img className={classes.left} src="/images/left.png" alt="left" />
        <img className={classes.right} src="/images/right.png" alt="left" />
      </Hidden>
      <Container>
        <Hero />
        <Traders />
        <Creators />
      </Container>
      <Community />
    </div>
  );
}

export default Home;
