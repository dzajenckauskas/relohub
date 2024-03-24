import PageLayout from "@/COMPONENTS/common/PageLayout";
import FaqWrapper from "@/COMPONENTS/main_page/faqwrapper";
import MainPAgeHeroArea from "@/COMPONENTS/main_page/heroArea";
import Postheroimages from "@/COMPONENTS/main_page/postheroimages";
import ProcessWrapper from "@/COMPONENTS/main_page/processWrapper";
import Reviews from "@/COMPONENTS/main_page/reviews";
import VideoArea from "@/COMPONENTS/main_page/videoarea";
import Image from "next/image";

export default async function Home() {
    return (
        <>
            <PageLayout>
                {/* <RemovedaDataFromCitiesJson /> */}
                <div className="bckimagewrp">
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
                <Reviews />
            </PageLayout>

        </>

    );
}
