import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";
import Script from "next/script";

export default function RootLayout({ children }) {
    const gaId = 'GTM-MNL6VBLH';
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm-script" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${gaId}');`}
                </Script>
                {/* End Google Tag Manager */}

                {gaId && (
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                        rel={'preload'}
                    />
                )}
                {gaId && (
                    <Script id="google-analytics" strategy="afterInteractive" rel={'preload'}>
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                    </Script>
                )}
                <link rel="preload" href="/relohub-logo.svg" as="image" />
                {/* <link
                    rel="preload"
                    href="/fonts/Uniform-Condensed.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Uniform-Condensed-Medium.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Uniform-Condensed-Light.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Uniform-Condensed-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Uniform-Condensed-Black.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                /> */}

                {/* <!-- Light theme icons --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" media="(prefers-color-scheme: light)" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" media="(prefers-color-scheme: light)" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" media="(prefers-color-scheme: light)" />

                {/* <!-- Dark theme icons --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-dark.png" media="(prefers-color-scheme: dark)" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32-dark.png" media="(prefers-color-scheme: dark)" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16-dark.png" media="(prefers-color-scheme: dark)" />

                {/* <!-- Fallback for older browsers --> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="icon" href="/favicons/favicon.ico" />

                {/* <!-- Manifest --> */}
                <link rel="manifest" href="/favicons/site.webmanifest" />

                <meta
                    name="google-site-verification"
                    content="9OrdpSBzrVlAPw36L_LZtXnMywNGG2R59g0Ix6ZFQzc"
                />
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${gaId}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
            </body>
        </html>
    );
}
