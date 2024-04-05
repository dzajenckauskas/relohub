"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";

export const countries = [
    { country: "A" },
    { country: "australia", iso: "AU", continent: "Oceania" },
    { country: "austria", iso: "AT", continent: "Europe" },
    { country: "B" },
    { country: "belgium", iso: "BE", continent: "Europe" },
    { country: "bulgaria", iso: "BG", continent: "Europe" },
    { country: "C" },
    { country: "canada", iso: "CA", continent: "North America" },
    { country: "croatia", iso: "HR", continent: "Europe" },
    { country: "cyprus", iso: "CY", continent: "Europe" },
    { country: "czech republic", iso: "CZ", continent: "Europe" },
    { country: "D" },
    { country: "denmark", iso: "DK", continent: "Europe" },
    { country: "E" },
    { country: "egypt", iso: "EG", continent: "Africa" },
    { country: "estonia", iso: "EE", continent: "Europe" },
    { country: "F" },
    { country: "finland", iso: "FI", continent: "Europe" },
    { country: "france", iso: "FR", continent: "Europe" },
    { country: "G" },
    { country: "georgia", iso: "GE", continent: "Europe" },
    { country: "germany", iso: "DE", continent: "Europe" },
    { country: "gibraltar", iso: "GI", continent: "Europe" },
    { country: "greece", iso: "GR", continent: "Europe" },
    { country: "H" },
    { country: "hong kong", iso: "HK", continent: "Asia" },
    { country: "hungary", iso: "HU", continent: "Europe" },
    { country: "I" },
    { country: "iceland", iso: "IS", continent: "Europe" },
    { country: "india", iso: "IN", continent: "Asia" },
    { country: "ireland", iso: "IE", continent: "Europe" },
    { country: "italy", iso: "IT", continent: "Europe" },
    { country: "J" },
    { country: "japan", iso: "JP", continent: "Asia" },
    { country: "L" },
    { country: "latvia", iso: "LV", continent: "Europe" },
    { country: "lithuania", iso: "LT", continent: "Europe" },
    { country: "luxembourg", iso: "LU", continent: "Europe" },
    { country: "M" },
    { country: "malaysia", iso: "MY", continent: "Asia" },
    { country: "malta", iso: "MT", continent: "Europe" },
    { country: "monaco", iso: "MC", continent: "Europe" },
    { country: "montenegro", iso: "ME", continent: "Europe" },
    { country: "N" },
    { country: "netherlands", iso: "NL", continent: "Europe" },
    { country: "new zealand", iso: "NZ", continent: "Oceania" },
    { country: "norway", iso: "NO", continent: "Europe" },
    { country: "P" },
    { country: "philippines", iso: "PH", continent: "Asia" },
    { country: "poland", iso: "PL", continent: "Europe" },
    { country: "portugal", iso: "PT", continent: "Europe" },
    { country: "Q" },
    { country: "qatar", iso: "QA", continent: "Asia" },
    { country: "R" },
    { country: "romania", iso: "RO", continent: "Europe" },
    { country: "S" },
    { country: "serbia", iso: "RS", continent: "Europe" },
    { country: "singapore", iso: "SG", continent: "Asia" },
    { country: "slovakia", iso: "SK", continent: "Europe" },
    { country: "slovenia", iso: "SI", continent: "Europe" },
    { country: "south africa", iso: "ZA", continent: "Africa" },
    { country: "spain", iso: "ES", continent: "Europe" },
    { country: "sweden", iso: "SE", continent: "Europe" },
    { country: "switzerland", iso: "CH", continent: "Europe" },
    { country: "T" },
    { country: "thailand", iso: "TH", continent: "Asia" },
    { country: "U" },
    { country: "united arab emirates", iso: "AE", continent: "Asia" },
    { country: "united kingdom", iso: "GB", continent: "Europe" },
    { country: "united states", iso: "US", continent: "North America" },
];

export default function HeroInputs({ enableButton, edit, newstate }) {
    const listRef = useRef(null);
    const zipfocus = useRef(null);
    const zipfocusdest = useRef(null);
    const inpt = [
        { label: "Collection Country", field: "from_country" },
        { label: "Destination Country", field: "to_country" },
        { label: "Collection City", field: "from_city" },
        { label: "Destination City", field: "to_city" },
    ];

    const [inputs, setinputs] = useState([]);
    const [width, setwidth] = useState(false);
    const [state, setstate] = useState({
        from_city: "",
        from_country: "",
        to_city: "",
        to_country: "",
        from_postCode: "",
        to_postCode: "",
    });
    const [selectedField, setSelectedField] = useState(null);
    const [inputvalue, setinputvalue] = useState("");
    const [citiesfrom, setcitiesfrom] = useState([]);
    const [citiesto, setcitiesto] = useState([]);
    const [inputletter, setinputletter] = useState("");
    const [listrefheight, setlistrefheight] = useState(230);
    const [manualCity, setManualCity] = useState(false);
    const [citiesletters, setcitiesletters] = useState([]);
    const [fetching, setfetching] = useState(false);
    const [zipinputfocused, setzipinputfocused] = useState(false);
    const [zipinputfocuseddest, setzipinputfocuseddest] = useState(false);

    useEffect(() => {
        if (listRef.current) {
            const height = listRef.current.offsetHeight;
            setlistrefheight(height);
        }
    }, [listRef.current]);

    useEffect(() => {
        setwidth(window.innerWidth);
        function resized() {
            setwidth(window.innerWidth);
        }
        window.addEventListener("resize", resized);

        return () => {
            window.removeEventListener("resize", resized);
        };
    }, []);

    useEffect(() => {
        if (state.from_country && !edit) {
            setinputvalue("");
            setSelectedField(inpt[2].label);
        }
    }, [state.from_country, edit]);
    useEffect(() => {
        if (state.to_country && !edit) {
            setinputvalue("");
            setSelectedField(inpt[3].label);
        }
    }, [state.to_country, edit]);

    async function fetchcity(country, ft) {
        let res = await fetch("/api/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country }),
        });

        if (res.ok) {
            let data = await res.json();

            let letters = [];
            let letter;
            for (const [i, el] of data.entries()) {
                if (el.name.charAt(0).toLowerCase() !== letter) {
                    letter = el.name.charAt(0).toLowerCase();

                    letters.push(letter.toUpperCase());
                    data.splice(i, 0, letter);
                }
            }

            setcitiesletters(letters);
            if (ft === "from") {
                setcitiesfrom(data);
            } else {
                setcitiesto(data);
            }
            setfetching(false);
        }
    }

    useEffect(() => {
        if (newstate) {
            setstate(newstate);
        }
    }, [newstate]);

    useEffect(() => {
        if (edit) {
            let c = [...inpt];
            if (edit === "from") {
                c.splice(1, 1);
                c.splice(2, 1);
            }
            if (edit === "to") {
                c.splice(0, 1);
                c.splice(1, 1);
            }
            setinputs(c);
        } else {
            setinputs(inpt);
        }
    }, [edit]);

    useEffect(() => {
        if (state.from_country) {
            setfetching(true);
            fetchcity(state.from_country, "from");
            setcitiesfrom([]);
        }
    }, [state.from_country]);
    useEffect(() => {
        if (state.to_country) {
            setfetching(true);
            fetchcity(state.to_country, "to");
            setcitiesto([]);
        }
    }, [state.to_country]);

    useEffect(() => {
        let enable = true;
        for (const input of inputs) {
            if (!state[input.field]) {
                enable = false;
                break;
            }
        }
        if (inputs.length === 0) {
            enable = false;
        }

        if ((state.from_country === "united states" || state.from_country === "united kingdom") && state.from_postCode == '') {
            enable = false;
        }

        if ((state.to_country === "united states" || state.to_country === "united kingdom") && state.to_postCode == '') {
            enable = false;
        }

        enableButton(enable ? { ...state } : false);
    }, [state, edit]);

    function citiesDropdown() {
        let arr = [];
        if (selectedField === inpt[2].label) {
            if (inputletter) {
                arr = citiesfrom.filter((city) => {
                    if (
                        city.name
                            ?.toLowerCase()
                            .startsWith(inputletter.toLowerCase()) ||
                        (city.length === 1 &&
                            city
                                .toLowerCase()
                                .startsWith(inputletter.toLowerCase()))
                    ) {
                        return city;
                    }
                });
            } else {
                arr = citiesfrom.filter((city) => {
                    if (
                        city.name
                            ?.toLowerCase()
                            .startsWith(inputvalue.toLowerCase()) ||
                        (city.length === 1 &&
                            city
                                .toLowerCase()
                                .startsWith(inputvalue.toLowerCase()))
                    ) {
                        return city;
                    }
                });
            }
        }
        if (selectedField === inpt[3].label) {
            if (inputletter) {
                arr = citiesto.filter((city) => {
                    if (
                        city.name
                            ?.toLowerCase()
                            .startsWith(inputletter.toLowerCase()) ||
                        (city.length === 1 &&
                            city
                                .toLowerCase()
                                .startsWith(inputletter.toLowerCase()))
                    ) {
                        return city;
                    }
                });
            } else {
                arr = citiesto.filter((city) => {
                    if (
                        city.name
                            ?.toLowerCase()
                            .startsWith(inputvalue.toLowerCase()) ||
                        (city.length === 1 &&
                            city
                                .toLowerCase()
                                .startsWith(inputvalue.toLowerCase()))
                    ) {
                        return city;
                    }
                });
            }
        }

        const Row = ({ index, style }) => {
            const el = arr[index];
            return (
                <li
                    className={
                        el.name
                            ? "searchlistlistlist"
                            : "searchlistlistlistempty"
                    }
                    key={index}
                    style={style}
                    onClick={() => {
                        setinputletter("");
                        switch (selectedField) {
                            case inpt[2].label:
                                if (
                                    state.from_country === "united states" ||
                                    state.from_country === "united kingdom"
                                ) {
                                    zipfocus.current.focus();
                                }

                                setstate((prevst) => {
                                    return {
                                        ...prevst,
                                        from_city: el.name,
                                    };
                                });
                                break;
                            case inpt[3].label:
                                if (
                                    state.to_country === "united states" ||
                                    state.to_country === "united kingdom"
                                ) {
                                    zipfocusdest.current.focus();
                                }

                                setstate((prevst) => {
                                    return {
                                        ...prevst,
                                        to_city: el.name,
                                    };
                                });
                                break;
                            default:
                                break;
                        }
                        setSelectedField(null);
                    }}
                >
                    <p className={el.name ? "" : "countrylisttxtpletter"}>
                        {el.name ? el.name : el}
                    </p>
                    {el.iso && <span className="countrylistbubble"></span>}
                </li>
            );
        };

        return (
            <ul className="searchlistlist" ref={listRef} >
                {arr.length !== 0 ? (
                    <List
                        height={listrefheight}
                        itemCount={arr.length}
                        itemSize={42}
                    >
                        {Row}
                    </List>
                ) : fetching ? (
                    <p className="cityspinner"></p>
                ) : (
                    <div>
                        <p>No city has been found.</p>
                        <button
                            className="nocityfoundbtn"
                            onClick={() => {
                                if (selectedField) {
                                    setManualCity(
                                        JSON.parse(
                                            JSON.stringify(selectedField),
                                        ),
                                    );
                                }

                                setSelectedField(null);
                            }}
                        >
                            Please enter manually
                        </button>
                    </div>
                )}
            </ul>
        );
    }
    function countriesDropdown(el, i) {
        let arr = [];

        if (inputletter) {
            arr = countries.filter((el) => {
                return el.country
                    .toLowerCase()
                    .startsWith(inputletter.toLowerCase());
            });
        } else {
            arr = countries.filter((el, i) => {
                if (
                    el.country
                        .toLowerCase()
                        .startsWith(inputvalue.toLowerCase())
                ) {
                    return el;
                }
            });
        }

        return (
            <ul className="searchlistlist">
                {arr.map((el, i) => {
                    return (
                        <li
                            className={
                                el.iso
                                    ? "searchlistlistlist"
                                    : "searchlistlistlistempty"
                            }
                            key={i}
                            onClick={() => {
                                setinputletter("");
                                switch (selectedField) {
                                    case inpt[0].label:
                                        setstate((prevst) => {
                                            return {
                                                ...prevst,
                                                from_country: el.country,
                                                from_city: "",
                                            };
                                        });

                                        break;
                                    case inpt[1].label:
                                        setstate((prevst) => {
                                            return {
                                                ...prevst,
                                                to_country: el.country,
                                                to_city: "",
                                            };
                                        });
                                        break;

                                    default:
                                        break;
                                }
                                setSelectedField(null);
                            }}
                        >
                            {el.iso && <Image
                                className="flag-ico"
                                loading="lazy"
                                width={24}
                                height={16}
                                style={{ objectFit: "contain" }}
                                src={`https://flagcdn.com/w20/${el.iso.toLowerCase()}.png`}
                                alt={`${el.iso} flag`}
                            />}
                            <p
                                className={
                                    el.country.length === 1
                                        ? "countrylisttxtpletter"
                                        : "countrylisttxtp"
                                }
                            >
                                {el.country}
                            </p>
                            {el.iso && <span className="countrylistbubble"></span>}
                        </li>
                    );
                })}
            </ul>
        );
    }

    function dropdown(el, i) {
        let letters = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];

        let included = [];

        if (
            selectedField === inpt[0].label ||
            selectedField === inpt[1].label
        ) {
            for (const countrie of countries) {
                if (letters.includes(countrie.country)) {
                    included.push(countrie.country);
                }
            }
        } else {
            letters = citiesletters;
            included = citiesletters;
        }

        return (
            <div
                style={{ marginTop: 0, zIndex: 100 }}
                className="heroselectiondropdownwrp"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <section className="heroareaselectionh3andclosebuttonwrp" style={{ top: 90, zIndex: 100 }}>
                    <h3 className="heroselectionh3">{el.label}:</h3>
                    <Button
                        variant="contained"
                        color="info"
                        className="selectionlistclosebtrn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedField(null);
                            setinputletter("");
                        }}
                    >
                        &#x2715;
                    </Button>
                </section>
                <section className="letterssection">
                    {letters.map((el, i) => {
                        return (
                            <p
                                className={
                                    included.includes(el)
                                        ? "letttersectionletterp"
                                        : "letttersectionletterpdisabled"
                                }
                                key={i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setinputvalue("");
                                    setinputletter(el);
                                }}
                            >
                                {el}
                            </p>
                        );
                    })}
                </section>

                <input
                    value={inputvalue}
                    onChange={(e) => {
                        setinputletter("");
                        setinputvalue(e.target.value);
                    }}
                    placeholder="Search list"
                    className="dropdowninputsearch"
                ></input>
                {selectedField === inpt[0].label ||
                    selectedField === inpt[1].label
                    ? countriesDropdown(el, i)
                    : citiesDropdown(el, i)}
            </div>
        );
    }

    useEffect(() => {
        switch (selectedField) {
            case inpt[2].label:
                setstate((prevst) => {
                    return {
                        ...prevst,
                        from_city: inputvalue,
                    };
                });

                break;
            case inpt[3].label:
                setstate((prevst) => {
                    return {
                        ...prevst,
                        to_city: inputvalue,
                    };
                });
                break;

            default:
                break;
        }
    }, [inputvalue, selectedField]);

    function editClassname(el, i) {
        if (i === 2) {
            if (!state.from_country) {
                return `heroinputselectwrp heroinputselectwrpdisabled`;
            } else {
                return `heroinputselectwrp`;
            }
        }
        if (i === 3) {
            if (!state.to_country) {
                return `heroinputselectwrp heroinputselectwrpdisabled`;
            } else {
                return `heroinputselectwrp`;
            }
        }
        return `heroinputselectwrp`;
    }

    function postcodetxt(txt, frt) {
        return `${edit ? "" : txt}${frt === "from"
            ? state.from_country === "united kingdom"
                ? " Post "
                : " Zip "
            : frt === "to"
                ? state.to_country === "united kingdom"
                    ? " Post "
                    : " Zip "
                : ""
            }Code${edit || width >= 500 ? ":" : ""}`;
    }

    function ifukofus() {
        const arr = [];

        if (
            state.from_country === "united states" ||
            state.from_country === "united kingdom"
        ) {
            if (!edit || edit === "from") {
                arr.push(
                    <label className="heroinputlabel  collpostcode" key={"a"}>
                        <p className={edit ? "" : "hiddenmobilelabel"}>
                            {postcodetxt("Collection", "from")}
                        </p>

                        <input
                            ref={zipfocus}
                            onFocus={() => {
                                setzipinputfocused(true);
                            }}
                            onBlur={() => {
                                setzipinputfocused(false);
                            }}
                            className="dropdowninputsearch  ifukorusinput"
                            value={state.from_postCode}
                            placeholder={
                                width && width <= 500 && !edit
                                    ? postcodetxt("Collection", "from")
                                    : ""
                            }
                            onChange={(e) => {
                                setstate({
                                    ...state,
                                    from_postCode: e.target.value.toUpperCase(),
                                });
                            }}
                        ></input>
                        {zipinputfocused && !edit ? (
                            <button
                                className="postcodeconfirmbutton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setzipinputfocused(false);
                                }}
                            >
                                Confirm
                            </button>
                        ) : null}
                    </label>,
                );
            }
        }
        if (
            state.to_country === "united states" ||
            state.to_country === "united kingdom"
        ) {
            if (!edit || edit === "to") {
                arr.push(
                    <label className="heroinputlabel destpostcode" key={"b"}>
                        <p className={edit ? "" : "hiddenmobilelabel"}>
                            {postcodetxt("Destination", "to")}
                        </p>

                        <input
                            placeholder={
                                width && width <= 500 && !edit
                                    ? postcodetxt("Destination", "to")
                                    : ""
                            }
                            ref={zipfocusdest}
                            onFocus={() => {
                                setzipinputfocuseddest(true);
                            }}
                            onBlur={() => {
                                setzipinputfocuseddest(false);
                            }}
                            className="dropdowninputsearch  ifukorusinput"
                            value={state.to_postCode}
                            onChange={(e) => {
                                setstate({
                                    ...state,
                                    to_postCode: e.target.value.toUpperCase(),
                                });
                            }}
                        ></input>
                        {zipinputfocuseddest && !edit ? (
                            <button
                                className="postcodeconfirmbutton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setzipinputfocused(false);
                                }}
                            >
                                Confirm
                            </button>
                        ) : null}
                    </label>,
                );
            }
        }

        return arr;
    }

    function addclassnametomobileinputs(el, i) {
        if (el.label === `Collection City`) {
            return `heroinputliner heroinputliner${i}  ${!state.from_country ? "heroinputlinerhide" : ""
                }`;
        }
        if (el.label === `Destination City`) {
            return `heroinputliner heroinputliner${i}  ${!state.to_country ? "heroinputlinerhide" : ""
                }`;
        }

        return `heroinputliner heroinputliner${i}`;
    }

    // useEffect(() => {
    //     if (state.) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [state.]);

    return (
        <div className={edit ? "heroinputswrpedit" : "heroinputswrp"}>
            <div
                className={
                    edit
                        ? "heroinputsinputsinsidewrpedit"
                        : "heroinputsinputsinsidewrp"
                }
            >
                {inputs.map((el, i) => {
                    return (
                        <div
                            className={addclassnametomobileinputs(el, i)}
                            key={i}
                        >
                            <label className="heroinputlabel">
                                {edit ? (
                                    `${el.label.split(" ").slice(1).join(" ")}:`
                                ) : (
                                    <p className="hiddenmobilelabel">
                                        {el.label}:
                                    </p>
                                )}

                                {manualCity === el.label ? (
                                    <div className="heroinputselectwrpmanual">
                                        <input
                                            value={state[el.field]}
                                            onChange={(e) => {
                                                setstate({
                                                    ...state,
                                                    [el.field]: e.target.value,
                                                });
                                            }}
                                            className="manualcityinput"
                                            autoFocus
                                        ></input>
                                        <button
                                            className="manualcityconfirmbutton"
                                            onClick={() => {
                                                setManualCity(null);
                                            }}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                ) : (
                                    <div
                                        className={editClassname(el, i)}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();

                                            if (
                                                !e.target.classList.contains(
                                                    "heroinputselectwrpdisabled",
                                                )
                                            ) {
                                                setinputvalue("");
                                                setSelectedField(
                                                    selectedField === el.label
                                                        ? null
                                                        : el.label,
                                                );
                                            }
                                        }}
                                    >
                                        {state[el.field] ? (
                                            <p className="inputtextforcountriesandcitiesp">
                                                {state[el.field]}
                                            </p>
                                        ) : (
                                            <div>
                                                <p className="hiddenmobilelabel">
                                                    Please select
                                                </p>
                                                <p className="shownmobilelebel">
                                                    {el.label}
                                                </p>
                                            </div>
                                        )}

                                        <span className="triangledown"></span>
                                    </div>
                                )}
                                {selectedField === el.label && !manualCity
                                    ? dropdown(el, i)
                                    : null}
                            </label>
                        </div>
                    );
                })}

                {ifukofus()}
            </div>
        </div>
    );
}
