import Image from "next/image";

export default function NoPricePopup({setshownopricepopup}) {
    return (
        <section className="nopricepopupglobalwrp">
            <div className="nopricepopupcenterwrp">
                <button
                    className="alotoftextclosebutton"
                    onClick={() => {
                        setshownopricepopup(false);
                    }}
                >
                    &#10006;
                </button>
                <h3>Request has been received</h3>
                <p>
                    Sit tight, our sales team are looking for the best options
                    and will be in contact within 24 hours.
                </p>
                <p>
                    If you are feeling very inpatient or your move is imminent,
                    please call us on{" "}
                    <strong>
                        <a href="tel:03330907053">0333 090 7053</a>
                    </strong>{" "}
                    or email{" "}
                    <strong>
                        {" "}
                        <a href="mailto:hello@deliver1.co.uk">
                            hello@deliver1.co.uk
                        </a>{" "}
                    </strong>
                </p>
                <div className="nopricepopupimagewrp">
                    <Image
                        fill={true}
                        className="nopriceofferssofaimg"
                        alt="sofa"
                        style={{objectFit: "contain"}}
                        src={"/sofa2cut.png"}
                        quality={100}
                    ></Image>
                </div>
            </div>
        </section>
    );
}
