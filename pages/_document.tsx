import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <title>Prysm</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.jQuery ||
                document.write(
                  '<scr' +
                    'ipt src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/sc' +
                    'ript>',
                );`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.$kol_jquery = window.jQuery;`
            }}
          />
          <script src="https://cdn.kickoffpages.com/widgets/1.9.9/kol_bounce.js"></script>
          <script src="https://cdn.kickoffpages.com/w/151168/308230.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
