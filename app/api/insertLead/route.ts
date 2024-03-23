import axios from 'axios';
import {NextResponse} from "next/server";

const url = process.env.NEXT_PUBLIC_FETCH_URL;
const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;

export async function POST(req, res) {
    const data = await req.json();

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                "Referer": hv
            }
        });

        console.log('API Response:', response.data);

        return NextResponse.json(response.data, {status: 200});
    } catch (error) {
        console.error('Error calling external API:', error);
        return NextResponse.json(error.message, {status: 500});
    }
}