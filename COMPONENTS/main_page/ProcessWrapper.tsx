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
        { title: "Get a Free Quote", txt: "Get a free door to door quotation online", top: -14, topxs: -66, left: -50 },
        { title: "Packing Materials", txt: "Delivery of packing materials (if required)", top: 12, topxs: 26, left: 50 },
        { title: "Pack Your Goods", txt: "Pack your goods and complete customer portal", top: -14, topxs: 124, left: -50 },
        { title: "Collection", txt: "We will come and collect your belongings", top: -46, topxs: 226, left: 50 },
        { title: "Transport and Updates", txt: "Transport with updates until delivery is made", top: -14, topxs: 270, left: -50 },
    ];

    return (
        <Stack py={2} id={'process'}>
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
                    <div
                        className="processimagewrappertextwrp"
                    >
                        {(txt).map((el, i) => {
                            return (
                                <Stack className="processtxtp" key={i}
                                    sx={{ transform: { xs: `translateY(${el.topxs}px)`, sm: `translateY(${el.topxs}px) translateX(${el.left}px)`, md: `translateY(${el.top}px)` } }}
                                >
                                    {el.title &&
                                        <Typography sx={{ lineHeight: 1, pb: .5, textAlign: "center", color: theme.palette.secondary.main, fontWeight: 600, mb: { md: 0, xs: -.25 } }}>
                                            {el.title}
                                        </Typography>}
                                    <p style={{ textAlign: 'center' }}>
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
