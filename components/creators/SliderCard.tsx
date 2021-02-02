import React, { Fragment } from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
  root: {
    margin: 16,
    borderRadius: 20,
  },
  background: {
    width: '100%'
  },
  avatar: {
    position: 'relative',
    top: '-50px',
    left: 'calc((100% - 65px)/2)',
    [theme.breakpoints.down('sm')]: {
      top: '-75px',
      left: 'calc((100% - 95px)/2)',
      width: 100
    },
  },
  info: {
    marginTop: '-60px',
    padding: 20
  },
  name: {
    fontSize: '18.75px',
    fontWeight: 400,
    lineHeight: '25.15px',
  },
  dFlex: {
    display: 'flex',
    marginTop: 20,
  },
  font10: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '13.84px',
    color: '#B8B8B8'
  },
  font18: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '25px',
    marginLeft: 'calc(50% - 50px);',
    marginRight: 5
  },
  font14: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '19.38px',
    color: '#B8B8B8',
  },
  font26: {
    fontSize: 26,
    fontWeight: 500,
    lineHeight: '35.98px',
  },
  font13: {
    fontSize: '13.22px',
    fontWeight: 500,
    lineHeight: '18.29px',
    color: '#B8B8B8'
  },
  description: {
    margin: 20,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '22.14px',
    color: '#A78EAB'
  }
}));

type Props = {
  background: string,
  avatar: string,
  name: string,
  count: number,
  percentage: string,
  fund: string,
  description: string
}

function SliderCard(props: Props) {
  const classes = useStyles();

  return (
    <Fragment>
      <Card
        className={classes.root}
      >
        <div className={classes.background}>
          <img 
            className={classes.background}
            src={props.background}
            alt="background" 
          />
          <img 
            className={classes.avatar}
            src={props.avatar} 
            alt="avatar"
          />
          <div
            className={classes.info}
          >
            <Typography
              className={classes.name}
            >
              {props.name}
            </Typography>
            <div
              className={classes.dFlex}
            >
              <Typography
                className={classes.font10}
              >
                CLOUT
              </Typography>
              <Typography
                className={classes.font18}
              >
                {props.count}
              </Typography>
              <Typography
                className={classes.font14}
              >
                {props.percentage}
              </Typography>
            </div>
            <Typography
              className={classes.font26}
            >
              {props.fund}
            </Typography>
            <Typography
              className={classes.font13}
            >
              Earned
            </Typography>
          </div>
        </div>
      </Card>
      <Typography
        className={classes.description}
      >
        {props.description}
      </Typography>
    </Fragment>
  )
};

export default SliderCard;