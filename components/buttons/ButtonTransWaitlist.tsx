import React from 'react';
import Image from 'next/image';
import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  title: string;
  font: number;
  top: number;
  arrow: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 40,
    textTransform: 'none',
    padding: '16px 40px',
    border: '1px solid #000000',
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px',
    },
  },
  arrow: {
    width: 49,
    [theme.breakpoints.down('sm')]: {
      width: 35,
    },
  },
  underlineNone: {
    textDecoration: 'none'
  }
}));

function ButtonTransWaitlist(props: Props) {
  const classes = useStyles();

  return (
    <a
      className={classes.underlineNone}
      href="#kol-popup-308230"
    >
      <Button
        className={classes.root}
        variant="outlined"
        color="primary"
        endIcon={
          props.arrow ? (
            <Image className={classes.arrow} src="/images/arrow.svg" alt="arrow" width={49} height={44} />
          ) : null
        }
        style={{ fontSize: props.font, marginTop: props.top }}
      >
        {props.title}
      </Button>
    </a>
  );
}

export default ButtonTransWaitlist;
