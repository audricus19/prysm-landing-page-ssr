import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ItemTrader from './ItemTrader';
import CardTrader from './CardTrader';
import CardTraderOther from './CardTraderOther';
import ButtonTransWaitlist from '../buttons/ButtonTransWaitlist';

import { cardTraders, itemTraders } from '../../utils/mock';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginTop: 250,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  txtCenter: {
    textAlign: 'center',
  },
  cards: {
    marginBottom: 100,
  },
  subTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
      lineHeight: '50px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  fWidth: {
    width: '100%',
  },
}));

function Traders() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="subtitle1">
        Traders
      </Typography>

      <Typography className={classes.subTitle} variant="subtitle2">
        Cut out the Noise.
      </Typography>

      <Grid container className={classes.cards} spacing={2}>
        {itemTraders.map((item, index: number) => (
          <Grid className={classes.fWidth} item key={index} md={4}>
            <ItemTrader
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>

      {cardTraders.map((item, index: number) => (
        <React.Fragment key={index}>
          <CardTrader
            title={item.title}
            avatar={item.avatar}
            name={item.name}
            headTitle={item.headTitle}
            kudos={item.kudos}
            markTitle={item.markTitle}
            markColor={item.markColor}
            buttonTitle={item.buttonTitle}
            fund={item.fund}
            percentage={item.percentage}
            option={item.option}
          />
        </React.Fragment>
      ))}
      <CardTraderOther />
      <div className={classes.txtCenter}>
        <ButtonTransWaitlist
          title="Join Beta Waitlist"
          font={24}
          top={110}
          arrow={true}
        />
      </div>
    </div>
  );
}

export default Traders;
