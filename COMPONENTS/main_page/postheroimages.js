import Image from "next/image";

export default function Postheroimages() {
    return (
        <section className="globalWrapperheropostimage">
            <Image
                src={"/deliveri-1-1.png"}
                width={180}
                height={163}
                style={{ objectFit: "contain" }}
                alt="human carying box"
                className="heropostimagecaryingimg"
            ></Image>

            <Image
                src={"/deliveri-2-1.png"}
                width={594}
                height={226}
                style={{
                    objectFit: "contain",
                    // position: 'relative', left: -100
                }}
                alt="human carying stuff"
                priority
                className="heropostimagecaryingsofaimg"
            ></Image>
        </section>
    );
}
