"use client";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MaxWidthContainer } from "../common/MaxWidthContainer";
import { VideSectionType } from "../types/CountryType";

type Props = {
    hideIcons?: boolean;
    videoSection?: VideSectionType;
}

export default function VideoSection({ hideIcons, videoSection }: Props) {
    const videoRef = useRef();
    const slideelement = useRef(null);
    const [showvideohide, setshowvideohide] = useState(true);
    const [pixelRatio, setPixelRatio] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPixelRatio(window.devicePixelRatio || 1);
        }
    }, []);

    useEffect(() => {
        const elm = slideelement.current;
        if (elm) {
            elm.style.transform = `translateX(${currentSlide * -200}px)`;
        }
    }, [currentSlide, slideelement]);

    function handleButtonClick() {
        setshowvideohide(false);
        if (videoRef?.current) {
            (videoRef?.current as any)?.play();
        }
    }
    return (
        <Stack sx={{ backgroundColor: '#202020', pt: hideIcons ? 6 : 0, pb: hideIcons ? 3 : 0 }}>
            <MaxWidthContainer>
                <section className="videoareaglobalwrp">
                    <div className="videoareavideowrp">
                        {showvideohide ? (
                            <div className="videoareaplaybtnwrp">
                                <button
                                    className="videopresentationtroundbuttonNew"
                                    onClick={handleButtonClick}
                                >
                                    <Image
                                        src={"/play.svg"}
                                        style={{ objectFit: "contain" }}
                                        className="playsvgbtn"
                                        width={40}
                                        height={40}
                                        alt="play button"
                                    ></Image>
                                </button>
                            </div>
                        ) : null}

                        {videoSection?.video?.data?.attributes?.url &&
                            <video
                                ref={videoRef}
                                className="videoelm"
                                src={`${process.env.NEXT_PUBLIC_API_URL}${videoSection?.video?.data?.attributes?.url}`}
                                controls
                            ></video>}
                    </div>
                </section>
            </MaxWidthContainer>
        </Stack>
    );
}
