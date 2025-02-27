import { promises as fs } from "fs";
import { NextResponse } from "next/server";

// Cache data to prevent re-reading the file on every request
let cachedData = null;

// Load and parse the file once, caching the data
async function loadCountriesData() {
    if (!cachedData) {
        const file = await fs.readFile(process.cwd() + "/countries_cities_new.json", "utf8");
        cachedData = JSON.parse(file);
    }
    return cachedData;
}

export async function POST(req) {
    try {
        const body = await req.json();
        if (!body.country) {
            return NextResponse.json({ error: "Country is required" }, { status: 400 });
        }

        const data = await loadCountriesData(); // Load cached data
        const countryEntry = data.find(el => el.name.toLowerCase() === body.country.toLowerCase());

        if (!countryEntry) {
            return NextResponse.json({ error: "Country not found" }, { status: 404 });
        }

        // Sort cities alphabetically using localeCompare
        const sortedCities = countryEntry.cities.sort((a, b) => a.name.localeCompare(b.name));

        return NextResponse.json(sortedCities, { status: 200 });
    } catch (error) {
        console.error("Error fetching cities:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
