import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="Adam Kovalik in depth" />
                <meta name="copyright" content="2022 © Adam Kovalik" />
                <meta name="country" content="Hungary" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="system Administrator, it, programmer, adam kovalik, kovalik, tojgli, tojglee, linux" />
                <meta name="content-language" content="en" />
                {/* <meta property="og:description" content="Kalandozas.hu - Utazás, nyaralas, kirándulás, Görögország, Spanyolország, Olaszország" />
                <meta property="og:site_name" content="Kalandozás Utazási iroda" />
                <meta property="og:title" content="Kalandozás Utazási iroda" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="hu_HU" />
                <meta property="og:image" content="https://kalandozas.hu/img/conti_logo.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Kalandozás Utazási iroda" />
                <meta name="twitter:description" content="kalandozas.hu - Utazás, nyaralas, kirándulás, Görögország, Spanyolország, Olaszország" />
                <meta property="twitter:image" content="https://kalandozas.hu/img/conti_logo.png" /> */}
                {/* <meta name="robots" content="noindex, nofollow" /> */}
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <title>kvlk.hu</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
