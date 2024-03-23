import Chat from "@/COMPONENTS/common/chat";
import FaqWrapper from "@/COMPONENTS/main_page/faqwrapper";
import GetInTOuch from "@/COMPONENTS/main_page/getInTouch";
import MainPageHeader from "@/COMPONENTS/main_page/header";
import MainPAgeHeroArea from "@/COMPONENTS/main_page/heroArea";
import Postheroimages from "@/COMPONENTS/main_page/postheroimages";
import ProcessWrapper from "@/COMPONENTS/main_page/processWrapper";
import RemovedaDataFromCitiesJson from "@/COMPONENTS/main_page/removeDataFromCitiesJson";
import Reviews from "@/COMPONENTS/main_page/reviews";
import VideoArea from "@/COMPONENTS/main_page/videoarea";
import Image from "next/image";

export default async function Home() {
    return (
        <main className="mainpagemainwrp">
            <Chat />

            {/* <RemovedaDataFromCitiesJson /> */}
            <div className="mainpageheaderwrpbckg">
                <MainPageHeader />
            </div>
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
            <GetInTOuch />
        </main>
    );
}
