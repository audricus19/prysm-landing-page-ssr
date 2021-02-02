import React from 'react';
import { Container, Grid, List, ListItemText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 70,
    marginBottom: 130,
  },
  logo: {
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      marginTop: 150,
    },
  },
  dFlexRight: {
    display: 'flex',
    textAlign: 'right',
  },
  dFlexLeft: {
    display: 'flex',
    textAlign: 'left',
  },
  head: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '44.91px',
  },
  link: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: 'sans-serif',
  },
  mobileLeft: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item md={6} xs={12} className={classes.dFlexLeft}>
          <Grid container>
            <Grid item md={4} xs={12}>
              <img className={classes.logo} src="/images/prysm.svg" alt="logo" />
            </Grid>
            <Grid className={classes.mobileLeft} item md={4} xs={12}>
              <List>
                <ListItemText
                  classes={{ primary: classes.head }}
                  primary="Made By Refractor, Inc."
                />
                <ListItemText
                  onClick={() => {
                    window.open('https://beta.prysm.xyz/termsAndConditions');
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="Terms of Service"
                />
                <ListItemText
                  onClick={() => {
                    window.open('https://beta.prysm.xyz/privacyPolicy');
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="Privacy Policy"
                />
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} className={classes.dFlexRight}>
          <Grid container>
            <Grid item md={4} />
            <Grid item md={4} xs={12}>
              <List>
                <ListItemText
                  classes={{ primary: classes.head }}
                  primary="Company"
                />
                <ListItemText
                  onClick={() => {
                    window.open(
                      'https://www.notion.so/prysmxyz/About-Prysm-7dee6e075a9b4403938112b32affbd45',
                    );
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="About Us"
                />
                <ListItemText
                  onClick={() => {
                    window.open(
                      'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
                    );
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="Careers"
                />
              </List>
            </Grid>
            <Grid item md={4} xs={12}>
              <List>
                <ListItemText
                  classes={{ primary: classes.head }}
                  primary="Connect"
                />
                <ListItemText
                  onClick={() => {
                    window.open('https://twitter.com/prysm_xyz');
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="Twitter"
                />
                <ListItemText
                  onClick={() => {
                    window.open('https://discord.gg/p5SED4XbU6');
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                  classes={{ primary: classes.link }}
                  primary="Discord"
                />
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
