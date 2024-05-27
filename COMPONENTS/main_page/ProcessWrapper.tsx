import Image from "next/image";

type Props = {
    title?: string
}

export default function ProcessWrapper({ title }: Props) {
    const txt = [
        { txt: "Get a free door to door quotation online", top: -40 },
        { txt: "Delivery of packing materials (if required)", top: -8 },
        { txt: "Pack your goods and complete customer portal", top: -42 },
        { txt: "We will come and collect your belongings", top: -90 },
        { txt: "Transport with updates until delivery is made", top: -46 },
    ];

    return (
        <section className="processglobalwrapper">
            {!title && <p className="processwrphowitworksp">HOW IT WORKS</p>}
            <h2 className="processwrptheprocess">{title ?? 'The Process'}</h2>
            <div className="procesimagewrappermainwrp">
                <div className="processimagewrapper">
                    <Image
                        src={"/process-1.png"}
                        fill={true}
                        style={{ objectFit: "contain" }}
                        alt="process image"
                    ></Image>
                </div>
                <div className="processimagewrappermob">
                    <Image
                        src={"/prmob.png"}
                        fill={true}
                        style={{ objectFit: "contain" }}
                        alt="process image"
                    ></Image>
                </div>
                <div className="processimagewrappertextwrp">
                    {txt.map((el, i) => {
                        return (
                            <p
                                className="processtxtp"
                                key={i}
                                style={{ transform: `translateY(${el.top}px)` }}
                            >
                                {el.txt}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
