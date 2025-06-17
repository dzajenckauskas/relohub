import axios from 'axios';
import { NextResponse } from "next/server";

const externalApiUrl = process.env.NEXT_PUBLIC_FETCH_URL;
const referrerHeaderValue = process.env.NEXT_PUBLIC_HEADER_VALUE;

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const response = await axios.post(externalApiUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                "referer": referrerHeaderValue
            }
        });

        console.log('Backend: External API POST Response:', response.data);

        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        console.error('Backend: Error calling external API in POST:', error.message);
        const status = error.response?.status || 500;
        const message = error.response?.data || error.message || 'Internal Server Error';
        return NextResponse.json({ message: 'Error processing POST request', details: message }, { status: status });
    }
}

