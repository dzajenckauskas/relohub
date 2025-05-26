"use client";
import Image from "next/image";
import { useState } from "react";

export default function Chat() {
    const [showchat, setshowchat] = useState(false);

    function show() {
        return (
            <div className="showchatglobalwtp">
                <div className="chatinsideimgwrp">
                    <a target="_blank" href="https://wa.me/447947751844">
                        <Image
                            alt="whats app"
                            src={"/wup.png"}
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                        ></Image>
                    </a>
                </div>
                <div className="chatinsideimgwrp">
                    <a target="_blank" href="https://m.me/Relohubuk">
                        <Image
                            alt="whats app"
                            src={"/msg.png"}
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                        ></Image>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div
            className="chatmainwrp"
            onMouseLeave={() => {
                setshowchat(false);
            }}
        >
            {showchat ? (
                show()
            ) : (
                <div
                    className="chatimagewrp"
                    onClick={() => {
                        setshowchat(true);
                    }}
                >
                    <div className="chatwithustxt">
                        <h3>CHAT</h3>
                        <p>WITH US</p>
                    </div>

                    <Image
                        alt="chat image"
                        className="chatmainimage"
                        src={"/chaticon.svg"}
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    ></Image>
                </div>
            )}
        </div>
    );
}
