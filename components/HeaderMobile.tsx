import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Variant from './DynamicHeaderMobile';

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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  app: {
    padding: '15px 0',
    background: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    width: 118,
    height: 32,
  },
  navRight: {
    float: 'right',
  },
  icon: {
    background: '#FFFFFF',
    color: '#000000',
    fontSize: 25,
  },
  menu: {
    marginTop: 30,
  },
  menuItem: {
    fontSize: 20,
    paddingLeft: 45,
  },
  mr: {
    marginLeft: 25,
  },
  navbar: {
    width: '100%',
  },
  font35: {
    fontSize: 35,
  },
  announcement: {
    fontSize: 15,
    padding: '6px 10px',
    marginBottom: 15,
    height: 35,
    borderRadius: 20,
    background: '#000',
    width: 245,
    marginLeft: 'calc(50% - 100px)',
    fontFamily: 'sans-serif',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (side: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (side: string) => (
    <div
      className={classes.menu}
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <CloseIcon
          classes={{ root: classes.icon }}
          onClick={toggleDrawer('right', false)}
          style={{ fontSize: 30, float: 'right', marginRight: 16 }}
        />
        <ListItem className={classes.menuItem} button>
          <ListItemText
            onClick={() => {
              window.open(
                'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
              );
            }}
            classes={{
              primary: classes.font35,
            }}
            primary={'Careers'}
          />
        </ListItem>
        <ListItem className={classes.menuItem} button>
          <ListItemText
            onClick={() => {
              window.open('https://twitter.com/prysm_xyz');
            }}
            classes={{
              primary: classes.font35,
            }}
            primary={'Launch App'}
          />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.open('https://twitter.com/prysm_xyz');
          }}
        >
          <IconButton className={classes.mr} aria-label="twitter">
            <Image src="/images/twitter.svg" alt="Twitter" width={26} height={21} />
          </IconButton>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.open('https://discord.gg/p5SED4XbU6');
          }}
        >
          <IconButton className={classes.mr} aria-label="discord">
            <Image src="/images/discord.svg" alt="Discord" width={28} height={23} />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.app}>
          <Container>
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
              &#x2728; We are hiring! Learn more &#x2728;
            </Typography>
            <Image src="/images/prysm.svg" alt="Prysm" width={118} height={32} />
            <div className={classes.navRight}>
              <MenuIcon
                classes={{ root: classes.icon }}
                onClick={toggleDrawer('right', true)}
                style={{ fontSize: 30 }}
              />
              <Drawer
                open={open}
                anchor="right"
                onClose={toggleDrawer('right', false)}
                classes={{
                  paper: classes.navbar,
                }}
              >
                {list('right')}
              </Drawer>
            </div>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}
