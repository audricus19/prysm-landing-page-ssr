import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  image: {
    height: 175,
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      height: 140,
    },
  },
  title: {
    fontSize: 33,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '45.6px',
  },
  description: {
    width: 275,
    margin: 'auto',
    marginTop: 20,
    paddingBottom: 5
  },
}));

type Props = {
  image: string;
  title: string;
  subTitle: string;
  color: string;
};

function ItemTrader({ image, title, subTitle, color }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <img src={image} alt="img" />
      </div>
      <Typography className={classes.title} style={{ color: color }}>
        {title}
      </Typography>
      <Typography className={classes.description} variant="body2">
        {subTitle}
      </Typography>
    </Card>
  );
}

export default ItemTrader;
