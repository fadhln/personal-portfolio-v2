import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fontbit.io/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Piazzolla:ital,wght@0,600;0,700;0,800;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="bg-base-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
