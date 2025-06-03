export async function POST(req) {
    try {
        const body = await req.json();
        const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;
        const url = process.env.NEXT_PUBLIC_FETCH_URL;

        const timeout = 10000; // 10 seconds timeout

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "http-referer": hv,
            },
            body: JSON.stringify(body),
            signal: controller.signal,
        });

        clearTimeout(timeoutId); // Clear timeout if request succeeds

        const contentType = response.headers.get("Content-Type");
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        console.log("Backend Response:", data);
        return new Response(JSON.stringify(data), { status: response.status });
    } catch (error) {
        console.error("Proxy Error:", error);
        return new Response(JSON.stringify({ error: "Failed to connect to backend" }), { status: 500 });
    }
}
