import {NextResponse} from "next/server";
import {promises as fs} from "fs";
const fsPromises = require("fs").promises;

import path from "path";

export async function POST(req) {
    const body = await req.json();
    const file = await fs.readFile(
        process.cwd() + "/countries_cities_new.json",
        "utf8",
    );
    let data = JSON.parse(file);
    let cities = [];
    for (const el of data) {
        if (body.country.toLowerCase() === el.name.toLowerCase()) {
            cities = el.cities;

            function sortByABC(arr) {
                return arr.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            }

            cities = sortByABC(cities);

            break;
        }
    }

    return NextResponse.json(cities, {status: 200});
}
