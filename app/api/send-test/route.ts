// app/api/send-test/route.ts
import { NewOrderClientMail } from "@/EMAILHTML/NewOrderClientMail";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    // Dummy test data
    const testData = {
        "name": "test test",
        "email": "test@test.test",
        "phone": "+44123",
        "from_city": "Absam",
        "from_country": "Austria",
        "from_postCode": "",
        "to_city": "Aggsbach",
        "to_country": "Austria",
        "to_postCode": "",
        "Collection_Date": "2025-06-06 17:23:51",
        "Standard_box": 1,
        "Own_items": [
            {
                "quantity": 1,
                "name": "test",
                "width": "12",
                "height": "12",
                "depth": "12",
                "weight": "12"
            },
            {
                "quantity": 1,
                "name": "Television",
                "width": 134,
                "height": 81,
                "depth": 21,
                "weight": 29
            }
        ]
    };

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

    // Compose mail
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: "1000kaktusu@gmail.com", // replace with your test email
        subject: `📦 TEST: New deposit by (${testData.name})`,
        // html: NewOrderMail(testData),
        html: NewOrderClientMail(testData),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Test email sent: " + info.response);
        return NextResponse.json({ success: true, info });
    } catch (error) {
        console.error("Error sending test email:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
