import Layout from "@/COMPONENTS/common/Layout";
import Chat from "@/COMPONENTS/common/chat";
import FaqWrapper from "@/COMPONENTS/main_page/faqwrapper";
import MainPAgeHeroArea from "@/COMPONENTS/main_page/heroArea";
import Postheroimages from "@/COMPONENTS/main_page/postheroimages";
import ProcessWrapper from "@/COMPONENTS/main_page/processWrapper";
import Reviews from "@/COMPONENTS/main_page/reviews";
import VideoArea from "@/COMPONENTS/main_page/videoarea";
import Image from "next/image";
import React from "react";

export default async function BlogPage() {
    return (
        <>
            <Layout>
                <Chat />
                {/* <RemovedaDataFromCitiesJson /> */}
                {/* <div className="bckimagewrp">
                    <div className="heroareaimgwrp">
                        <Image
                            className="herobckgimg"
                            alt="backgorund"
                            src={"/herobg.svg"}
                            fill={true}
                        ></Image>
                    </div>
                    <MainPAgeHeroArea />
                    <Postheroimages />
                </div>

                <VideoArea />
                <ProcessWrapper />
                <FaqWrapper />
                <Reviews /> */}
            </Layout>

        </>

    );
}
