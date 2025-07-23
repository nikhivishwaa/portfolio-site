import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2572036731662606"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
