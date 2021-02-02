import React from 'react';
import { Grid, Divider, Typography, Card, Avatar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 24,
  },
  title: {
    maxWidth: 380,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      lineHeight: '30px',
      marginBottom: 15,
    },
  },
  divider: {
    background: '#575A95',
    height: 3,
  },
  card: {
    display: 'block',
    borderRadius: '9.93451px',
    padding: '19.87px',
  },
  fontName: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '27.68px',
    marginLeft: 19,
  },
  avatar: {
    height: '17.39px',
    width: '17.39px',
    marginRight: 5,
  },
  headerFont: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '22.14px',
  },
  dFlex: {
    display: 'flex',
  },
  dFlexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '7.45px',
    marginTop: 1,
  },
  smallFont: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '20.62px',
    margin: 10,
    fontFamily: 'sans-serif'
  },
  fWidth: {
    width: '100%',
  },
}));

function CardTraderOther() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={5}>
        <Divider className={classes.divider} light />
        <Typography className={classes.title} variant="h6">
          Uncover the consensus on a trending market
        </Typography>
      </Grid>
      <Grid item md={1} />
      <Grid className={classes.fWidth} item md={6}>
        <Card className={classes.card} variant="outlined">
          <div className={classes.dFlex}>
            <img className="avatar" alt="avatar" src="/images/avatar_Rari.svg" />
            <Typography className={classes.fontName}>RARI</Typography>
          </div>
          <div className={classes.dFlexBetween}>
            <Typography className={classes.headerFont}>BUY</Typography>
            <Typography className={classes.headerFont}>SELL</Typography>
          </div>
          <Grid container>
            <Grid item xs={6}>
              <div
                className={classes.dFlexBetween}
                style={{
                  background: '#D1A9F8',
                  borderTopLeftRadius: '27.44px',
                  borderBottomLeftRadius: '27.44px',
                }}
              >
                <AvatarGroup max={4}>
                  <Avatar alt="Shelby" src={"/images/avatar_s_1.svg"} />
                  <Avatar alt="Martin" src={"/images/avatar_s_3.svg"} />
                </AvatarGroup>
                <Typography className={classes.smallFont}>51%</Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                className={classes.dFlexBetween}
                style={{
                  background: '#FFD2BF',
                  borderTopRightRadius: '27.44px',
                  borderBottomRightRadius: '27.44px',
                }}
              >
                <Typography className={classes.smallFont}>49%</Typography>
                <AvatarGroup max={4}>
                  <Avatar alt="Travis Howard" src={"/images/avatar_s_2.svg"} />
                </AvatarGroup>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardTraderOther;
