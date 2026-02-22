import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="WonderUI - Design System & Component Library"
        />
        <meta name="theme-color" content="#6366f1" />

        <link rel="icon" type="image/svg+xml" href="/wonderui-logo-circle.svg" />
        <link rel="apple-touch-icon" href="/wonderui-logo-circle.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
