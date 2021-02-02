import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/styles';
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import ReactGA from 'react-ga';

import MainLayout from '@/components/layouts/MainLayout';

import theme from '@/styles/theme/theme';
import '@/styles/global.css'


const instance = createInstance({
  urlBase: "https://admin-516fb.web.app/",
  siteId: 2,
  disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
  // userId: 'undefined', // optional, default value: `undefined`.
  // trackerUrl: 'http://prysm.surge.sh//tracking.php', // optional, default value: `${urlBase}matomo.php`
  // srcUrl: 'http://prysm.surge.sh/tracking.js', // optional, default value: `${urlBase}matomo.js`
  heartBeat: {
    // optional, enabled by default
    active: true, // optional, default value: true
    seconds: 10, // optional, default value: `15
  },
  linkTracking: true, // optional, default value: true
  configurations: {
    // optional, default value: {}
    // any valid matomo configuration, all below are optional
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: "POST",
  },
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isGAEnabled = process.env.NODE_ENV === 'production';

  useEffect(() => {
    if (isGAEnabled) {
      ReactGA.initialize("UA-164179424-1");
    }
  }, []);

  useEffect(() => {
    const { asPath: page } = router;
    const { location } = window;

    if (isGAEnabled) {
      ReactGA.set({
        page,
        location: `${location.origin}${page}`,
      });
      ReactGA.pageview(page);
    }
  }, [router]);

  if (process.env.NODE_ENV === 'production') {
    return (
      <ThemeProvider theme={theme}>
        <MatomoProvider value={instance}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </MatomoProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
