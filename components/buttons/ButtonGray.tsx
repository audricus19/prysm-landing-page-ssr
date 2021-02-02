import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  link: string;
  title: string;
  font: number;
  top: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 25,
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: 400,
    lineHeight: '24px',
    fontFamily: 'sans-serif',
  },
}));

function ButtonGray(props: Props) {
  const classes = useStyles();

  return (
    <Button
      onClick={() => {
        window.open(props.link);
      }}
      className={classes.root}
      variant="contained"
      style={{ fontSize: props.font, marginTop: props.top }}
    >
      {props.title}
    </Button>
  );
}

export default ButtonGray;
