import { Open_Sans } from "next/font/google";
import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";

const osans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Your trusted International moving provider.",
    description: `Here at Deliver1 we’re your go-to choice for International moving. We offer fast, secure, cost-effective door to door services for Sea, Road and Air freight.`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
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
