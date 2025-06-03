import { newOrder } from "@/EMAILHTML/newOrder";
import { NextResponse } from "next/server";

export async function POST(req) {
    const json = await req.json();

    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    let to =
        process.env.NODE_ENV === "development"
            ? `1000kaktusu@gmail.com`
            : `1000kaktusu@gmail.com`;
    // : process.env.EMAIL;
    // : `operations@Relohub.co.uk`;
    let mailOptions = {
        from: process.env.EMAIL_FROM,
        to,
        subject: `New deposit payment by (${json.first_last_name})`,
        html: newOrder(json),
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent to: ${to} ` + info.response);
        }
    });

    return NextResponse.json("", { status: 200 });
}
