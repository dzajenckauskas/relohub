import { getInTouchHTML } from "@/EMAILHTML/getintouch";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const json = await req.json();
    // console.log(json, "json");

    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD, // replace with your password
        },
    });
    let to =
        process.env.NODE_ENV === "development"
            ? `1000kaktusu@gmail.com`
            : `hello@relohub.co.uk`;
    let mailOptions = {
        from: `hello@relohub.co.uk`, // sender address
        to,
        subject: `New message via website (${json.data.name})`,
        html: getInTouchHTML(json),
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
