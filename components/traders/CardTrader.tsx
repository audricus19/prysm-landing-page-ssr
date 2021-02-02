import React from 'react';
import { Grid, Divider, Typography, Card, Avatar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ButtonGray from '../buttons/ButtonGray';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 24,
  },
  title: {
    maxWidth: 380,
    textAlign: 'left',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      lineHeight: '30px',
    },
  },
  divider: {
    background: '#575A95',
    height: 3,
  },
  card: {
    display: 'flex',
    borderRadius: '9.93451px',
    padding: '19.87px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
  fontName: {
    fontSize: '11.18px',
    fontWeight: 500,
    lineHeight: '15.47px',
    color: '#9C8CB0',
  },
  imageGroup: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  secondPart: {
    marginLeft: '29.3px',
    textAlign: 'left',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10.3px',
    },
  },
  titlePart: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ETH: {
    fontSize: '14.9px',
    color: '#0E103C',
    fontWeight: 700,
  },
  perFont1: {
    fontSize: 12,
    color: '#0E103C',
    fontWeight: 400,
  },
  perFont2: {
    fontSize: 10,
    color: '#50F098',
    fontWeight: 400,
    marginLeft: 6,
  },
  avatar: {
    height: '17.39px',
    width: '17.39px',
    marginRight: 5,
    [theme.breakpoints.down('sm')]: {
      height: '15.39px',
      width: '15.39px',
    },
  },
  mainAvatar: {
    [theme.breakpoints.down('sm')]: {
      width: 74,
    },
  },
  titleFont: {
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  thirdPart: {
    width: 'calc(100% - 300px)',
  },
  markTitle: {
    fontSize: '9.93px',
    color: '#0E103C',
    fontWeight: 500,
    lineHeight: '13.75px',    
    fontFamily: 'sans-serif',
    padding: 7,
    [theme.breakpoints.down('sm')]: {
      padding: 7,
    },
  },
  kudos: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 30,
  },
  sFont: {
    fontSize: 14,
    color: '#B1B1B1',
    marginLeft: 5,
    marginTop: 3,
    fontFamily: 'sans-serif'
  },
  percentage: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  dFlex: {
    display: 'flex',
  },
}));

type Props = {
  title: string;
  avatar: string;
  name: string;
  headTitle: string;
  kudos: number;
  markTitle: string;
  markColor: string;
  buttonTitle: string;
  fund: string;
  percentage: string;
  option: number;
};

function CardTrader(props: Props) {
  const classes = useStyles();

  const buttonGroup = (
    <div className={classes.imageGroup}>
      <Avatar className={classes.avatar} alt="image" src={"/images/card_1.svg"} />
      <Avatar className={classes.avatar} alt="image" src={"/images/card_2.svg"} />
      <Avatar className={classes.avatar} alt="image" src={"/images/card_3.svg"} />
      <Avatar className={classes.avatar} alt="image" src={"/images/card_4.svg"} />
      <Avatar className={classes.avatar} alt="image" src={"/images/card_5.svg"} />
    </div>
  );

  return (
    <Grid container className={classes.root}>
      <Grid item md={5} xs={12}>
        <Divider className={classes.divider} light />
        <Typography className={classes.title} variant="h6">
          {props.title}
        </Typography>
      </Grid>
      <Grid item md={1} />
      <Grid item md={6} xs={12}>
        <Card className={classes.card} variant="outlined">
          <div>
            <img
              className={classes.mainAvatar}
              alt={props.name}
              src={props.avatar}
            />
            <Typography className={classes.fontName}>{props.name}</Typography>
          </div>
          <div className={classes.secondPart}>
            <div className={classes.titlePart}>
              <Typography className={classes.titleFont} variant="body2">
                {props.headTitle}
              </Typography>
              <Typography
                className={classes.markTitle}
                style={{ background: props.markColor }}
              >
                {props.markTitle}
              </Typography>
            </div>
            {props.option === 2 ? buttonGroup : null}
            <div className={classes.kudos}>
              <img src={"/images/card_thumb.svg"} alt="thumb" />
              <Typography className={classes.sFont}>{props.kudos}</Typography>
            </div>
            {props.option === 1 ? (
              <Typography className={classes.ETH}>ETH</Typography>
            ) : null}
            <div className={classes.percentage}>
              <div className={classes.dFlex}>
                <Typography className={classes.perFont1}>
                  {props.fund}
                </Typography>
                <Typography className={classes.perFont2}>
                  {props.percentage}
                </Typography>
              </div>
              <ButtonGray link="https://beta.prysm.xyz/signin" title={props.buttonTitle} font={15} top="-15px" />
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardTrader;
