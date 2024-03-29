"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MaxWidthContainer } from "../common/MaxWidthContainer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function VideoArea() {
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
        videoRef.current.play();
    }

    function vide() {
        let src;
        if (pixelRatio >= 2 && pixelRatio > 1) {
            src = "/v(1080p).mp4";
        } else if (pixelRatio >= 1.5 && pixelRatio > 1) {
            src = "/v(720p).mp4";
        } else {
            src = "/v(540p).mp4";
        }

        return (
            <video
                ref={videoRef}
                className="videoelm"
                src={src}
                controls
            ></video>
        );
    }

    return (
        <Stack sx={{ backgroundColor: '#202020' }}>
            <MaxWidthContainer>
                <section className="videoareaglobalwrp">
                    <div className="videoareatopwrp">
                        <p>Transportation of your belongings by:</p>

                        <div className="videoareatoplinerrightwrp">
                            <button
                                className="transportcarouselbutton carouselbuttonmobileonly"
                                disabled={currentSlide === 0}
                                onClick={() => {
                                    setCurrentSlide(currentSlide - 1);
                                }}
                            >
                                &#x2039;
                            </button>
                            <div className="videoarrtoplinericonswrp">
                                <div
                                    className="videoarriconsrightwrpglobal"
                                    ref={slideelement}
                                >
                                    <div className="videoareatopliner">
                                        <Image
                                            src={"/Road.png"}
                                            style={{ objectFit: "contain" }}
                                            width={80}
                                            height={32}
                                            alt="road"
                                        ></Image>
                                        <p className="videoareatopp">Road Freight</p>
                                    </div>
                                    <div className="videoareatopliner">
                                        <Image
                                            src={"/sea.png"}
                                            style={{ objectFit: "contain" }}
                                            width={80}
                                            height={32}
                                            alt="sea"
                                        ></Image>
                                        <p className="videoareatopp">Sea Freight</p>
                                    </div>
                                    <div className="videoareatopliner">
                                        <Image
                                            src={"/air.png"}
                                            style={{ objectFit: "contain" }}
                                            width={80}
                                            height={32}
                                            alt="air"
                                        ></Image>
                                        <p className="videoareatopp">Air Freight</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="transportcarouselbutton carouselbuttonmobileonly"
                                disabled={currentSlide === 2}
                                onClick={() => {
                                    setCurrentSlide(currentSlide + 1);
                                }}
                            >
                                &#x203A;
                            </button>
                        </div>
                    </div>

                    <div className="videoareavideowrp">
                        {showvideohide ? (
                            <div className="videoareaplaybtnwrp">
                                <Typography variant="h1" component={'h2'}>View Our Presentation</Typography>
                                <button
                                    className="videopresentationtroundbutton"
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

                        {vide()}
                    </div>
                </section>
            </MaxWidthContainer>
        </Stack>
    );
}
