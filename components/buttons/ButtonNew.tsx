import React from 'react';
import { Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginRight: 40,
    cursor: 'pointer',
  },
  main: {
    textTransform: 'none',
    color: '#000000',
    fontFamily: 'sans-serif',
  },
  customBadge: {
    border: 'solid 1px #9F9F9F',
    color: '#7000FF',
    marginTop: '-5px',
    fontFamily: 'sans-serif',
  },
});

function ButtonNew() {
  const classes = useStyles();

  return (
    <Badge
      onClick={() => {
        window.open(
          'https://www.notion.so/prysmxyz/Join-Us-on-Our-Mission-0c9a715bc3b64d56b5226b7c3e6b8d25',
        );
      }}
      // badgeContent={''}
      className={classes.root}
      classes={{
        badge: classes.customBadge,
      }}
    >
      <Typography className={classes.main}>Careers</Typography>
    </Badge>
  );
}

export default ButtonNew;
