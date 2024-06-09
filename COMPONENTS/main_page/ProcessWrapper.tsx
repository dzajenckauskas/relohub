"use client"
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { theme } from "../common/shared/Theme";

type Props = {
    title?: string;
}

export default function ProcessWrapper({ title }: Props) {
    const txt = [
        { title: "Get a Free Quote", txt: "Get a free door to door quotation online", top: -40 },
        { title: "Packing Materials", txt: "Delivery of packing materials (if required)", top: -8 },
        { title: "Pack Your Goods", txt: "Pack your goods and complete customer portal", top: -42 },
        { title: "Collection", txt: "We will come and collect your belongings", top: -90 },
        { title: "Transport and Updates", txt: "Transport with updates until delivery is made", top: -46 },
    ];

    return (
        <Stack py={2}>
            <section className="processglobalwrapper">
                {/* {!title && <p className="processwrphowitworksp">HOW IT WORKS</p>} */}
                <Typography variant="h2" textAlign={'center'} pt={0} pb={{ xs: 4, sm: 6 }}>{title ?? 'The Process'}</Typography>
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
                                // <p
                                //     className="processtxtp"
                                //     key={i}
                                //     style={{ transform: `translateY(${el.top}px)` }}
                                // >
                                //     {el.txt}
                                // </p>
                                <Stack className="processtxtp" key={i} style={{ transform: `translateY(${el.top}px)` }}>
                                    {el.title &&
                                        <Typography sx={{ textAlign: "center", color: theme.palette.secondary.main, fontWeight: 600, mb: { md: 0, xs: -.25 } }}>
                                            {el.title}
                                        </Typography>}
                                    <p >
                                        {el.txt}
                                    </p>
                                </Stack>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Stack>
    );
}
