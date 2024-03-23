"use server";

import {promises as fs} from "fs";

export default async function RemovedaDataFromCitiesJson() {
    console.log("ok");
    const file = await fs.readFile(
        process.cwd() + "/countries+cities.json",
        "utf8",
    );
    let data = JSON.parse(file);

    let arr = [
        "iso3",
        "numeric_code",
        "phone_code",
        "capital",
        "subregion",
        "translations",
        "native",
        "region_id",
        "latitude",
        "longitude",
        "emoji",
        "emojiU",
        "currency",
        "currency_name",
        "currency_symbol",
        "tld",
        "region",
        "subregion_id",
        "nationality",
        "id",
        "timezones",
    ];

    const countries = [
        {country: "australia", iso: "AU"},
        {country: "austria", iso: "AT"},
        {country: "belgium", iso: "BE"},
        {country: "bulgaria", iso: "BG"},
        {country: "canada", iso: "CA"},
        {country: "croatia", iso: "HR"},
        {country: "cyprus", iso: "CY"},
        {country: "czech republic", iso: "CZ"},
        {country: "denmark", iso: "DK"},
        {country: "egypt", iso: "EG"},
        {country: "estonia", iso: "EE"},
        {country: "finland", iso: "FI"},
        {country: "france", iso: "FR"},
        {country: "georgia", iso: "GE"},
        {country: "germany", iso: "DE"},
        {country: "gibraltar", iso: "GI"},
        {country: "greece", iso: "GR"},
        {country: "hong kong", iso: "HK"},
        {country: "hungary", iso: "HU"},
        {country: "iceland", iso: "IS"},
        {country: "india", iso: "IN"},
        {country: "ireland", iso: "IE"},
        {country: "italy", iso: "IT"},
        {country: "japan", iso: "JP"},
        {country: "latvia", iso: "LV"},
        {country: "lithuania", iso: "LT"},
        {country: "luxembourg", iso: "LU"},
        {country: "malaysia", iso: "MY"},
        {country: "malta", iso: "MT"},
        {country: "monaco", iso: "MC"},
        {country: "montenegro", iso: "ME"},
        {country: "netherlands", iso: "NL"},
        {country: "new zealand", iso: "NZ"},
        {country: "norway", iso: "NO"},
        {country: "philippines", iso: "PH"},
        {country: "poland", iso: "PL"},
        {country: "portugal", iso: "PT"},
        {country: "qatar", iso: "QA"},
        {country: "romania", iso: "RO"},
        {country: "serbia", iso: "RS"},
        {country: "singapore", iso: "SG"},
        {country: "slovakia", iso: "SK"},
        {country: "slovenia", iso: "SI"},
        {country: "south africa", iso: "ZA"},
        {country: "spain", iso: "ES"},
        {country: "sweden", iso: "SE"},
        {country: "switzerland", iso: "CH"},
        {country: "thailand", iso: "TH"},
        {country: "united arab emirates", iso: "AE"},
        {country: "united kingdom", iso: "GB"},
        {country: "united states", iso: "US"},
    ];

    let nd = data
        .map((el, i) => {
            for (const countrie of countries) {
                if (el.name.toLowerCase() === countrie.country.toLowerCase()) {
                    for (const del of arr) {
                        delete el[del];
                    }

                    let seenCityNames = new Set();
                    el.cities = el.cities.filter((city) => {
                        if (!seenCityNames.has(city.name)) {
                            seenCityNames.add(city.name);
                            delete city.id;
                            delete city.latitude;
                            delete city.longitude;
                            return true;
                        }
                        return false;
                    });

                    return el;
                }
            }
        })
        .filter(Boolean); // Remove undefined values
    let updatedData = JSON.stringify(nd, null, 2);

    await fs.writeFile(
        process.cwd() + "/countries_cities_new.json",
        updatedData,
        "utf8",
    );
}
