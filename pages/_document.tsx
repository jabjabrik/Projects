import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import theme from '../src/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

    render() {
        return (
            <Html lang="en" className="dark">
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body className="dark:bg-gray-800 bg-gray-100 transition">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDocument;
