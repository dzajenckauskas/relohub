import { Open_Sans } from "next/font/google";
import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";
import Script from "next/script";

const osans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children }) {
    const gaId = 'GTM-MNL6VBLH'
    return (
        <html lang="en">
            <head>
                <meta property="og:image" content="https://deliver1.co.uk/sofa2cut.png" />
                <meta name="twitter:image" content="https://deliver1.co.uk/sofa2cut.png" />
                {gaId && <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy="afterInteractive"
                    rel={'preload'}
                />}
                {gaId && <Script id="google-analytics" strategy="afterInteractive" rel={'preload'}>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script>}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta
                    name="google-site-verification"
                    content="9OrdpSBzrVlAPw36L_LZtXnMywNGG2R59g0Ix6ZFQzc"
                />
            </head>

            <body className={osans.className}>
                {children}
            </body>
        </html>
    );
}
