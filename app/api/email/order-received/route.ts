import { NewOrderMail } from "@/EMAILHTML/NewOrderMail";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export async function GET() {//for testing with dummy data
export async function POST(req) {
    const data = await req.json();
    // console.log(data, "order-received data");

    // // Dummy test data
    // const data = {
    //     name: 'test test',
    //     email: '1000kaktusu@gmail.com',
    //     phone: '+44123',
    //     from_city: 'Absdorf',
    //     from_country: 'Austria',
    //     from_postCode: '',
    //     to_city: 'Abtenau',
    //     to_country: 'Austria',
    //     to_postCode: '',
    //     Collection_Date: '2025-06-09 08:17:41',
    //     Standard_box: 1,
    //     Own_items: [
    //         {
    //             quantity: 1,
    //             name: 'Test item',
    //             width: '123',
    //             height: '12',
    //             depth: '12',
    //             weight: '12'
    //         },
    //         {
    //             quantity: 1,
    //             name: 'Television',
    //             width: 134,
    //             height: 81,
    //             depth: 21,
    //             weight: 29
    //         }
    //     ],
    //     orderReferenceNumber: '1127D49818',
    //     uuid: 'bdd4c7a3-c80b-4f55-bedd-da65d13de2a2',
    //     type: 'AIR COURIER',
    //     price: 911.8144000000001
    // };

    // Set up transporter
    const transporter = nodemailer.createTransport({
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
            : process.env.EMAIL_FROM;

    // Compose mail
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to, // replace with your test email
        subject: `NEW BOOKING VIA RELOHUB WEBSITE by (${data.name})`,
        html: NewOrderMail(data),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("internal mail sent: " + info.response);
        return NextResponse.json({ success: true, info });
    } catch (error) {
        console.error("Error sending test email:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
