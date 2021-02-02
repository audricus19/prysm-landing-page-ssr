import React, { Fragment, ReactNode } from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import Footer from '@/components/Footer';

const useStyle = makeStyles({
  main: {
    marginTop: 118,
  },
});

function MainLayout({ children }: { children: ReactNode }) {
  const classes = useStyle();

  return (
    <Fragment>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden mdUp>
        <HeaderMobile />
      </Hidden>
      <div className={classes.main}>{children}</div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
