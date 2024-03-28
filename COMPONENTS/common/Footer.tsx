"use client";

import { useEffect, useState } from "react";
import TermsAndConditions from "../main_page/footerPopups/termsConditions";
import PrivacyPolicy from "../main_page/footerPopups/privacyPolicy";
import InclusionsExclusions from "../main_page/footerPopups/inclusionsExclusions";
import FAQ from "../main_page/footerPopups/faq";
import Stack from "@mui/material/Stack";

export default function Footer() {
    const [clicked, setclicked] = useState(null);

    const list = [
        `Terms & conditions`,
        `Privacy policy`,
        `Inclusions and exclusions`,
        "F.A.Q.",
    ];

    useEffect(() => {
        if (clicked) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [clicked]);

    return (
        <div className="gitfooterwrp">
            {clicked ? (
                <section className="popupmainwrp">
                    <Stack className="closebuttonandscrollwrp" sx={{ position: 'relative', top: { xs: 90, sm: 0 } }}>
                        <div className="alotoftexttopwrp">
                            <h1 className="alotoftexttopwrph2">{clicked}</h1>

                            <button
                                className="alotoftextclosebutton"
                                onClick={() => {
                                    setclicked(null);
                                }}
                            >
                                &#10006;
                            </button>
                        </div>

                        {clicked === list[0] ? <TermsAndConditions /> : null}
                        {clicked === list[1] ? <PrivacyPolicy /> : null}
                        {clicked === list[2] ? <InclusionsExclusions /> : null}
                        {clicked === list[3] ? <FAQ /> : null}
                    </Stack>
                </section>
            ) : null}

            <div className="footerwrptopwrp">
                {list.map((el, i) => {
                    return (
                        <p
                            className="footerwrpp"
                            key={i}
                            onClick={() => {
                                setclicked(el);
                            }}
                        >
                            {el}
                        </p>
                    );
                })}
            </div>
            <p className="footerlastp">Deliver1 © 2019</p>
        </div>
    );
}
