import Image from "next/image";

type Props = {
    title?: string;
}

export default function ProcessWrapper({ title }: Props) {
    const txt = [
        { title: null, txt: "Get a free door to door quotation online", top: -40 },
        { title: null, txt: "Delivery of packing materials (if required)", top: -8 },
        { title: null, txt: "Pack your goods and complete customer portal", top: -42 },
        { title: null, txt: "We will come and collect your belongings", top: -90 },
        { title: null, txt: "Transport with updates until delivery is made", top: -46 },
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
                    {(txt).map((el, i) => {
                        return (
                            <p
                                className="processtxtp"
                                key={i}
                                style={{ transform: `translateY(${el.top}px)` }}
                            >
                                {el.txt}
                            </p>
                            // <Stack key={i} style={{ transform: `translateY(${el.top}px)` }}>
                            //     {el.title &&
                            //         <Typography sx={{ textAlign: "center", fontWeight: 500, pt: 3, mb: { md: -4, xs: -10 } }}>
                            //             {el.title}
                            //         </Typography>}
                            //     <p className="processtxtp">
                            //         {el.txt}
                            //     </p>
                            // </Stack>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
