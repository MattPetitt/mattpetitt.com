import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Matt Petitt" />
          <meta property="og:title" content="Matt Petitt" key="title" />
          <meta
            property="og:description"
            content="Front-End Developer"
            key="title"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-100 dark:bg-slate-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
