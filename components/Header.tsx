import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Variant from './DynamicHeader';
import ButtonNew from './buttons/ButtonNew';
import ButtonGray from './buttons/ButtonGray';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return <Fragment>{trigger ? <Variant /> : children}</Fragment>;
}

const useStyle = makeStyles({
  app: {
    padding: '40px 0',
    background: 'transparent',
    boxShadow: 'none',
  },
  root: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  logo: {
    width: 118,
    height: 32,
    marginTop: 7,
  },
  navRight: {},
  ml3: {
    marginLeft: 20,
  },
  ml4: {
    marginLeft: 26,
  },
  announcement: {
    fontSize: 15,
    padding: '6px 10px',
    marginTop: 7,
    height: 35,
    borderRadius: 20,
    background: '#000',
    fontFamily: 'sans-serif',
  },
});

function Header() {
  const classes = useStyle();
  const [width, setWidth] = useState(window.innerWidth);
  const announcementTitle =
    'We are hiring awesome designers and developers! Learn more';
  const announcementTitleMobile = 'We are hiring! Learn more';

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.app}>
          <Container className={classes.root}>
            <Image className={classes.logo} src="/images/prysm.svg" alt="Prysm" width={118} height={32} />
            <Typography
              onClick={() => {
                window.open(
                  'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
                );
              }}
              style={{
                cursor: 'pointer',
              }}
              className={classes.announcement}
            >
              &#x2728;
              {width > 1100 ? announcementTitle : announcementTitleMobile}
              &#x2728;
            </Typography>
            <div className={classes.navRight}>
              <ButtonNew />
              <ButtonGray
                link="https://beta.prysm.xyz/signin"
                title="Launch App"
                font={18}
                top="0px"
              />
              <IconButton
                onClick={() => {
                  window.open('https://twitter.com/prysm_xyz');
                }}
                className={classes.ml4}
                aria-label="twitter"
              >
                <Image src="/images/twitter.svg" alt="Twitter" width={26} height={21} />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open('https://discord.gg/p5SED4XbU6');
                }}
                className={classes.ml3}
                aria-label="discord"
              >
                <Image src="/images/discord.svg" alt="Discord" width={28} height={23} />
              </IconButton>
            </div>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}

export default Header;
