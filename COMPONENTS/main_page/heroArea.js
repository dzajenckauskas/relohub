"use client";
import Image from "next/image";
import HeroInputs from "./heroInputs";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function MainPAgeHeroArea() {
    const router = useRouter();
    const [enableButton, setEnableButton] = useState(false);

    function herotextrightwrp() {
        return (
            <p className="instantquotewrp">
                <span>{"Get an "}</span>
                <span>
                    <b>Instant Quote</b>
                </span>
                <span>{" now"}</span>
            </p>
        );
    }

    return (
        <section className="mainpageheroareaglobalwrp">
            <div className="mainpageheroarealeftwrp">
                <Image
                    width={74}
                    height={93}
                    src={"/logo.png"}
                    alt="logo"
                    style={{objectFit: "contain"}}
                />
                <div className="logospacer"></div>
                <div className="heroareatitlewrp">
                    <div>We promise</div>
                    <span>{"to "}</span>
                    <span className="heroareapinktitle">Deliver1</span>{" "}
                    <div>flawless</div>
                    relocation
                </div>
            </div>

            <div className="mainpageheroarearightwrp">
                <div className="mainpageheroareawhitewrp">
                    {herotextrightwrp()}
                    <HeroInputs
                        enableButton={(st) => {
                            setEnableButton(st);
                        }}
                    />
                    <button
                        disabled={!enableButton}
                        className="herobuttongetestimate"
                        onClick={() => {
                            router.push(
                                `/offer?data=${encodeURIComponent(
                                    JSON.stringify(enableButton),
                                )}`,
                            );
                        }}
                    >
                        GET ESTIMATE
                    </button>
                </div>
            </div>
        </section>
    );
}
