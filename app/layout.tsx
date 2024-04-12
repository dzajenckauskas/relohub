import { Open_Sans } from "next/font/google";
import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";
import Script from "next/script";

const osans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNL6VBLH');`}</Script>

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

            <body className={osans.className}>{children}</body>
        </html>
    );
}
