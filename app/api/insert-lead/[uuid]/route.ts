import axios from 'axios';
import { NextResponse } from "next/server";

const externalApiUrl = process.env.NEXT_PUBLIC_FETCH_URL;
const referrerHeaderValue = process.env.NEXT_PUBLIC_HEADER_VALUE;

export async function PUT(request: Request, context: { params: { uuid: string } }) {
    const { uuid } = context.params;
    const data = await request.json(); // Get the updated data from the request body

    if (!uuid) {
        return NextResponse.json({ message: 'UUID is required for this PUT request endpoint' }, { status: 400 });
    }

    try {
        const targetExternalUrl = `${externalApiUrl}/${uuid}`;
        const response = await axios.put(targetExternalUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                "referer": referrerHeaderValue
            }
        });

        console.log('Backend: External API PUT Response:', response.data);

        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        console.error('Backend: Error calling external API in PUT:', error.message);
        if (axios.isAxiosError(error) && error.response) {
            console.error('External API PUT Error Details:', error.response.status, error.response.data);
            const status = error.response.status;
            const message = error.response.data.message || error.response.data || 'External API Error';
            return NextResponse.json({ message: 'Error processing PUT request', details: message }, { status: status });
        }
        const status = error.status || 500;
        const message = error.message || 'Internal Server Error';
        return NextResponse.json({ message: 'Error processing PUT request', details: message }, { status: status });
    }
}
