import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script id="gtagjs" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_GAID}`} />
            <Script
                id="gtagset"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_GAID}', {
                                page_path: window.location.pathname,
                            });
                            `,
                }}
            />

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
