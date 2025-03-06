"use client";
import PageLayout from "@/COMPONENTS/common/PageLayout";
import HeroInputs from "@/COMPONENTS/main_page/heroInputs";
import NoPricePopup from "@/COMPONENTS/offer_page/nopricepopup";
import OfferPopup from "@/COMPONENTS/offer_page/offerPopup";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { theme } from "@/COMPONENTS/common/shared/Theme";
// import { theme } from '@/COMPONENTS/common/shared/Theme'

export default function OfferPage() {
    const globalsectionleft = useRef(null);
    const globalsectionright = useRef(null);
    const sectionleft = useRef(null);
    const sectionright = useRef(null);
    const searchParams = useSearchParams();
    const [edit, setedit] = useState(false);
    const [editstate, seteditstate] = useState({});
    const [customItem, setCustomItem] = useState({
        id: Date.now().toString(),
        quantity: "1",
    });
    const [notfilledustomItems, setNotFilledCustomItems] = useState([]);
    const [notfilledItems, setNotFilledItems] = useState([]);
    const [shownotfilledpopup, setshownotfilledpopup] = useState(false);
    const [showpopupofprices, setshowpopupofprices] = useState(false);
    const [nopricepopup, setshownopricepopup] = useState(false);
    const [hideemptyboxes, sethideemptyboxes] = useState(false);
    const [prices, setprices] = useState(null);
    const [showcustomiteminputs, setshowcustomiteminputs] = useState(false);
    const startingObj = {
        email: process.env.NODE_ENV === "development" ? "ak@gmail.com" : "",
        first_last_name: "",
        phone_number: null,
        phone: null,
        "bussness-customer": "",
        from_address_line_1: "",
        from_address_line_2: "",
        from_city: "",
        from_postCode: "",
        to_postCode: "",
        from_country: "",
        collect_from_address: "",
        to_address_line_1: "",
        to_address_line_2: "",
        to_city: "",
        to_country: "",
        collect_to_address: "",
        empty_box_delivery_date: "",
        move_date: "",
        move_time: "",
        package: "",
        special_instructions: "",
        additional_items: "",
        additional_weeks: "",
        additional_cost: "",
        Standard_box: "",
        Large_box: "",
        Suitcase_small: "",
        Suitcase_large: "",
        Own_items: [],
        Collection_Date: "",
    };

    const [state, setstate] = useState(startingObj);

    useEffect(() => {
        setstate({ ...state, Collection_Date: "" });
    }, [state.empty_box_delivery_date]);

    useEffect(() => {
        if (searchParams) {
            const data = JSON.parse(
                decodeURIComponent(searchParams.get("data")),
            );

            if (data) {
                let c = { ...state };

                Object.keys(data).forEach((key) => {
                    c[key] = data[key];
                });

                setstate(c);
            }
        }
    }, [searchParams]);
    useEffect(() => {
        setshowcustomiteminputs(window.innerWidth >= 900 ? true : false);
    }, []);

    useEffect(() => {
        setNotFilledItems(
            notfilledItems.filter((el) => {
                return el !== "Select at least one box, suitcase, or own item";
            }),
        );
    }, [
        state.Large_box,
        state.Own_items,
        state.Standard_box,
        state.Suitcase_large,
        state.Suitcase_small,
    ]);

    const bkgdtlarr = [
        {
            f: "first_last_name",
            p: "First and Last Name",
            t: "text",
        },
        {
            f: "email",
            p: "Email Address",
            t: "text",
        },
        {
            f: "phone",
            p: "Phone Number",
            t: "text",
        },
    ];

    function ownItemsShow() {
        return (
            <div className="ownitemsshowwrp">
                <h3>Own Boxes & Luggage</h3>

                <div className="boxesandluggageownwrp">
                    {state.Own_items?.map((el, i) => {
                        return (
                            <div className="boxesluggageliner" key={i}>
                                <Image
                                    src={"/a.png"}
                                    width={40}
                                    height={40}
                                    style={{ objectFit: "contain" }}
                                    alt={el.name}
                                />

                                <div className="boxesluggagelinerwrp2">
                                    <p>
                                        <strong>{el.name}</strong>{" "}
                                    </p>
                                    <p>
                                        {el.width} x {el.height} x {el.depth} cm
                                    </p>
                                </div>
                                <p className="boxesluggagekg">
                                    Weight {el.weight} Kg
                                </p>
                                {el.quantity ? (
                                    <div className="boxesluggageaddonbuttonwrp">
                                        <button
                                            className="boxesluggagebuttonaddorminus"
                                            onClick={() => {
                                                setTimeout(() => {
                                                    let c = [
                                                        ...state.Own_items,
                                                    ];

                                                    for (const it of c) {
                                                        if (it.id === el.id) {
                                                            if (
                                                                it.quantity ===
                                                                "1"
                                                            ) {
                                                                c = c.filter(
                                                                    (elm) => {
                                                                        if (
                                                                            it.id !==
                                                                            elm.id
                                                                        ) {
                                                                            return elm;
                                                                        }
                                                                    },
                                                                );
                                                            } else {
                                                                it.quantity = (
                                                                    parseFloat(
                                                                        it.quantity,
                                                                    ) - 1
                                                                ).toString();
                                                            }

                                                            break;
                                                        }
                                                    }

                                                    setstate({
                                                        ...state,
                                                        [`Own_items`]: c,
                                                    });
                                                }, 0);
                                            }}
                                        >
                                            -
                                        </button>
                                        <p className="boxeslugagequatityp">
                                            {el.quantity}
                                        </p>
                                        <button
                                            className="boxesluggagebuttonaddorminus"
                                            onClick={() => {
                                                let c = [...state.Own_items];

                                                for (const it of c) {
                                                    if (it.id === el.id) {
                                                        it.quantity =
                                                            it.quantity === ""
                                                                ? "1"
                                                                : parseFloat(
                                                                    it.quantity,
                                                                ) + 1;
                                                        break;
                                                    }
                                                }
                                                setstate({
                                                    ...state,
                                                    [`Own_items`]: c,
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="boxesluggageplusbutton"
                                        onClick={() => {
                                            let c = [...state.Own_items];
                                            for (const it of c) {
                                                if (it.id === el.id) {
                                                    it.quantity = "1";
                                                    break;
                                                }
                                            }
                                            setstate({
                                                ...state,
                                                [`Own_items`]: c,
                                            });
                                        }}
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    function standardItem() {
        const bandlgarr = [
            {
                name: "Standard box",
                size: `41 x 41 x 41 cm`,
                maxw: 20,
                image: "/sb.png",
                pos: "Standard_box",
            },
            {
                name: "Suitcase small",
                size: `18 x 32 x 45 cm`,
                maxw: 20,
                image: "/ss.png",
                pos: "Suitcase_small",
            },
            {
                name: "Large box ",
                size: `51 x 51 x 51 cm`,
                maxw: 30,
                image: "/lb.png",
                pos: "Large_box",
            },
            {
                name: "Suitcase large",
                size: `36 x 47 x 70 cm`,
                maxw: 30,
                image: "/sl.png",
                pos: "Suitcase_large",
            },
        ];
        return (
            <div className="boxesandluggagestandardwrp">
                {bandlgarr.map((el, i) => {
                    return (
                        <div className="boxesluggageliner" key={i}>
                            <Image
                                src={el.image}
                                width={40}
                                height={40}
                                style={{ objectFit: "contain" }}
                                alt={el.name}
                            />

                            <div className="boxesluggagelinerwrp2">
                                <p>
                                    <strong>{el.name}</strong>{" "}
                                </p>
                                <p>{el.size}</p>
                            </div>
                            <p className="boxesluggagekg">Max {el.maxw} Kg</p>
                            {state[el.pos] ? (
                                <div className="boxesluggageaddonbuttonwrp">
                                    <button
                                        className="boxesluggagebuttonaddorminus"
                                        onClick={() => {
                                            setstate({
                                                ...state,
                                                [el.pos]:
                                                    state[el.pos] === "1"
                                                        ? ""
                                                        : parseFloat(
                                                            state[el.pos],
                                                        ) - 1,
                                            });
                                        }}
                                    >
                                        -
                                    </button>
                                    <p className="boxeslugagequatityp">
                                        {state[el.pos]}
                                    </p>
                                    <button
                                        className="boxesluggagebuttonaddorminus"
                                        onClick={() => {
                                            setstate({
                                                ...state,
                                                [el.pos]:
                                                    parseFloat(state[el.pos]) +
                                                    1,
                                            });
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="boxesluggageplusbutton"
                                    onClick={() => {
                                        setstate({ ...state, [el.pos]: "1" });
                                    }}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    function ownItem(params) {
        const customItemsarr = [
            { name: "Custom item name", pos: "name", type: "text" },
            { name: "Width (cm)", pos: "width" },
            { name: "Height (cm)", pos: "height" },
            { name: "Depth (cm)", pos: "depth" },
            { name: "Weight (kg)", pos: "weight" },
        ];

        return (
            <div className="ownitemwrp">
                <p className="addownitemp"> Add your own item </p>

                {showcustomiteminputs
                    ? customItemsarr.map((el, i) => {
                        return (
                            <input
                                value={customItem[el.pos] || ""}
                                onChange={(e) => {
                                    setCustomItem({
                                        ...customItem,
                                        [el.pos]: e.target.value,
                                    });
                                    setNotFilledCustomItems(
                                        notfilledustomItems.filter((ci) => {
                                            return ci !== el.name;
                                        }),
                                    );
                                }}
                                required={
                                    notfilledustomItems.includes(el.name)
                                        ? true
                                        : false
                                }
                                spellCheck={false}
                                className="customiteminput"
                                type={el.type ? el.type : "number"}
                                placeholder={el.name}
                                key={i}
                                min={0}
                            ></input>
                        );
                    })
                    : null}
                <Button
                    variant="contained" color="secondary"
                    className="customitemaddbutton"
                    onClick={() => {
                        if (showcustomiteminputs) {
                            const notFilled = [];
                            for (const el of customItemsarr) {
                                if (!customItem[el.pos]) {
                                    notFilled.push(el.name);
                                }
                            }
                            setNotFilledCustomItems(notFilled);

                            if (notFilled.length === 0) {
                                setstate({
                                    ...state,
                                    Own_items: [...state.Own_items, customItem],
                                });
                                setCustomItem({
                                    id: Date.now().toString(),
                                    quantity: "1",
                                });
                            }
                        } else {
                            setshowcustomiteminputs(true);
                        }
                    }}
                >
                    ADD ITEM
                </Button>
            </div>
        );
    }

    async function fetchOfferData() {
        setNotFilledCustomItems([]);
        setNotFilledItems([]);
        const offerFields = [
            "email",
            "from_city",
            "from_country",
            "to_city",
            "to_country",
            `Standard_box`,
            "Large_box",
            "Suitcase_small",
            `Suitcase_large`,
            `Own_items`,
            `phone`,
            `from_postCode`,
            `to_postCode`,
            `Collection_Date`,
        ];

        const data = {
            name: state.first_last_name,
            Empty_Box_Delivery_Date: state.empty_box_delivery_date,
        };

        for (const field of offerFields) {
            switch (field) {
                case "from_postCode":
                    data[field] = state[field].toUpperCase();
                    break;
                case "to_postCode":
                    data[field] = state[field].toUpperCase();
                    break;
                case "to_city":
                    data[field] = state[field].toLowerCase();
                    break;
                case "from_city":
                    data[field] = state[field].toLowerCase();
                    break;

                default:
                    data[field] = state[field];
                    break;
            }
        }

        const url = process.env.NEXT_PUBLIC_FETCH_URL;
        const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;

        if (process.env.NODE_ENV === "development") {
            console.log(data);
        }

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "http-referer": hv,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                const prc = await res.json();

                if (process.env.NODE_ENV === "development") {
                    console.log(prc);
                }

                if (prc.price.length === 0) {
                    setshownopricepopup(true);
                } else {
                    setprices(prc);
                    setshowpopupofprices(true);
                }
            }
        } catch (error) {
            console.log("fetch error:", error);
        }
    }
    const fromPostCodeRequired = (state.from_country.toLowerCase() === "united states" || state.from_country.toLowerCase() === "united kingdom") && state.from_postCode == ''
    const toPostCodeRequired = (state.to_country.toLowerCase() === "united states" || state.to_country.toLowerCase() === "united kingdom") && state.to_postCode == ''
    const toPostZipCodeCheck = state.to_country.toLowerCase() === 'united states' ? "Zip" : "Post"
    const fromPostZipCodeCheck = state.from_country.toLowerCase() === 'united states' ? "Zip" : "Post"

    function checkIfItemsIsNotMissing() {
        let emptylines = [];
        let stb = [
            `Standard_box`,
            `Large_box`,
            `Suitcase_small`,
            `Suitcase_large`,
        ];

        bkgdtlarr.map((el, i) => {
            if (!state[el.f]) {
                emptylines.push(el.p);
            }
        });

        const areAllBoxesEmpty = stb.every((boxIndex) => !state[boxIndex]);
        const areOwnItemsEmpty = state.Own_items.length === 0;
        const areCountriesMissing = state.from_country.length === 0 || state.to_country.length === 0;

        if (areCountriesMissing) {
            emptylines.push("Please enter both collection and delivery countries");
        }

        if (areAllBoxesEmpty && areOwnItemsEmpty) {
            emptylines.push("Select at least one box, suitcase, or own item");
        }
        if (!state.Collection_Date) {
            emptylines.push("Date of Collection");
        }
        if (fromPostCodeRequired) {
            emptylines.push(`Missing ${fromPostZipCodeCheck} Code to get a price`);
        }
        if (toPostCodeRequired) {
            emptylines.push(`Missing ${toPostZipCodeCheck} Code to get a price`);
        }
        if (state.from_city === '') {
            emptylines.push(`Collection city is required`);
        }
        if (state.to_city === '') {
            emptylines.push(`Delivery city is required`);
        }

        setNotFilledItems(emptylines);

        if (emptylines.length !== 0) {
            setshownotfilledpopup(true);
        } else {
            fetchOfferData();
        }
    }

    function editLeftWrp() {
        return (
            <section className="offereditglobalsection" ref={globalsectionleft} style={{ border: (state.from_city === '' || state.from_country === '' || fromPostCodeRequired) && `2px solid ${theme.palette.secondary.main}` }}>
                <div
                    className={
                        edit === "from"
                            ? "offerdeliveryleft offerdeliveryedit"
                            : "offerdeliveryleft"
                    }
                    ref={sectionleft}
                    key={"l"}
                >
                    <div className="offerdeliverytitlewrp">
                        <h3 className="offerdeliverytitle">Collect from...</h3>

                        <button
                            // disabled={!state.from_city}
                            // style={{ pointerEvents: !state.from_city ? 'none' : 'auto', backgroundColor: !state.from_city ? 'black' : `${theme.palette.primary.main}` }}
                            className="offerdeliveryeditbtn"
                            onClick={() => {
                                let element = globalsectionleft.current;
                                let rect = element.getBoundingClientRect();

                                sectionleft.current.style.width = `${rect.width}px`;
                                sectionleft.current.style.top = `${rect.top + window.scrollY
                                    }px`;
                                sectionleft.current.style.left = `${rect.left}px`;

                                if (edit) {
                                    sectionleft.current.style.width = `100%`;
                                    sectionleft.current.style.top = `${0}px`;
                                    sectionleft.current.style.left = `${0}px`;
                                    // setstate(editstate);
                                }
                                setedit(edit === "from" ? null : "from");
                            }}
                        >
                            {edit === "from" ? "Save" : "Edit"}
                        </button>
                    </div>

                    {edit === "from" ? null : (
                        <label className="offerdeliverylabel">
                            Country:
                            <p className="offerdeliveryinput">
                                {state.from_country || <span style={{ color: theme.palette.secondary.main }}>{`Country is required`}</span>}
                            </p>
                        </label>
                    )}

                    {edit === "from" ? null : (
                        <label className="offerdeliverylabel">
                            City:
                            <p className="offerdeliveryinput">
                                {state.from_city || <span style={{ color: theme.palette.secondary.main }}>{`City is required`}</span>}
                            </p>
                        </label>
                    )}
                    {edit === "from" ? null : (
                        <label className="offerdeliverylabel">
                            {(!!state.from_postCode || fromPostCodeRequired) && <>{fromPostZipCodeCheck} code:</>}
                            <p className="offerdeliveryinput">
                                {state.from_postCode || <span style={{ color: theme.palette.secondary.main }}>{fromPostCodeRequired && `Missing  ${fromPostZipCodeCheck} Code to get a price`}</span>}
                            </p>
                        </label>
                    )}
                    {edit === "from" ? (
                        <HeroInputs
                            isOffer
                            state={state}
                            setstate={setstate}
                            newstate={state}
                            edit={edit}
                            enableButton={(obj) => {
                                seteditstate(obj);
                            }}
                        />
                    ) : null}
                </div>
            </section>
        );
    }
    function editRightWrp() {
        return (
            <section style={{ border: (state.to_city === '' || state.to_country === '' || toPostCodeRequired) && `2px solid ${theme.palette.secondary.main}` }}
                className="offereditglobalsection"
                ref={globalsectionright}
            >
                <div
                    className={
                        edit === "to"
                            ? "offerdeliveryrigth offerdeliveryedit"
                            : "offerdeliveryrigth"
                    }
                    ref={sectionright}
                    key={"r"}
                >
                    <div className="offerdeliverytitlewrp">
                        <h3 className="offerdeliverytitle">Delivery to...</h3>

                        <button
                            className="offerdeliveryeditbtn"
                            onClick={() => {
                                let element = globalsectionright.current;
                                let rect = element.getBoundingClientRect();
                                sectionright.current.style.width = `${rect.width}px`;
                                sectionright.current.style.top = `${rect.top + window.scrollY
                                    }px`;
                                sectionright.current.style.left = `${rect.left}px`;

                                if (edit) {
                                    sectionright.current.style.width = `100%`;
                                    // setstate(editstate);
                                }

                                setedit(edit === "to" ? null : "to");
                            }}
                        >
                            {edit === "to" ? "Save" : "Edit"}
                        </button>
                    </div>

                    {edit === "to" ? null : (
                        <label className="offerdeliverylabel">
                            Country:
                            <p className="offerdeliveryinput">
                                {state.to_country || <span style={{ color: theme.palette.secondary.main }}>{`Country is required`}</span>}
                            </p>
                        </label>
                    )}

                    {edit === "to" ? null : (
                        <label className="offerdeliverylabel">
                            City:
                            <p className="offerdeliveryinput">
                                {state.to_city || <span style={{ color: theme.palette.secondary.main }}>{`City is required`}</span>}
                            </p>
                        </label>
                    )}
                    {edit === "to" ? null : (
                        <label className="offerdeliverylabel">
                            {(!!state.to_postCode || toPostCodeRequired) && <>{toPostZipCodeCheck} code:</>}
                            <p className="offerdeliveryinput">
                                {state.to_postCode || <span style={{ color: theme.palette.secondary.main }}>{toPostCodeRequired && `Missing ${toPostZipCodeCheck} Code to get a price`}</span>}
                            </p>
                        </label>
                    )}
                    {edit === "to" ? (
                        <HeroInputs
                            isOffer
                            state={state}
                            setstate={setstate}
                            newstate={state}
                            edit={edit}
                            enableButton={(obj) => {
                                seteditstate(obj);
                            }}
                        />
                    ) : null}
                </div>
            </section>
        );
    }
    function countBoxes(params) {
        let lb = parseInt(state.Large_box);
        let sb = parseInt(state.Standard_box);
        let bx = 0;

        if (lb) {
            bx = bx + lb;
        }
        if (sb) {
            bx = bx + sb;
        }

        return bx;
    }
    function isPastOrWeekendOrFutureWorkingDay(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const day = date.getDay();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 2);
        return (
            date < today ||
            day === 0 ||
            day === 6 ||
            (date >= today && date <= futureDate)
        );
    }
    function ispastdayforcollection(date) {
        if (state.empty_box_delivery_date) {
            const today = new Date(state.empty_box_delivery_date);
            today.setHours(0, 0, 0, 0);
            const day = date.getDay();
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + 0);

            return (
                date <= today ||
                day === 0 ||
                day === 6 ||
                (date >= today && date <= futureDate)
            );
        } else {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const day = date.getDay();
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + 2);
            return (
                date < today ||
                day === 0 ||
                day === 6 ||
                (date >= today && date <= futureDate)
            );
        }
    }

    return (
        <PageLayout>
            <div className="offerglobalwrp">
                {edit ? <section className="offereditdarkbckg"></section> : null}

                {showpopupofprices ? (
                    <Elements stripe={stripePromise}>
                        <OfferPopup
                            hidePopup={(v) => {
                                setshowpopupofprices(v);
                            }}
                            state={state}
                            prices={prices}
                        />
                    </Elements>
                ) : null}
                {nopricepopup ? (
                    <NoPricePopup
                        setshownopricepopup={(v) => {
                            setshownopricepopup(v);
                        }}
                    />
                ) : null}

                {shownotfilledpopup ? (
                    <section className="offeritemsmissingwrapper">
                        <div className="offeritemsmissingcenterwrp">
                            <button
                                className="alotoftextclosebutton alotoftextclosebuttonmissing"
                                onClick={() => {
                                    setshownotfilledpopup(false);
                                }}
                            >
                                {" "}
                                &#10006;
                            </button>
                            <h3 className="missingitemh3">
                                We still need the following essential details:
                            </h3>

                            <ul className="offeritemsmissingul">
                                {notfilledItems.map((el, i) => {
                                    return <li key={i}>{el}</li>;
                                })}
                            </ul>
                        </div>
                    </section>
                ) : null}


                <section className="offerbookingdetailswrp">
                    <div className="offerhpewrp">
                        {/* <HeaderPinkElementNew /> */}
                    </div>
                    <h3 className="bookingdetailsh3">
                        Let’s start with your booking details
                    </h3>

                    <div className="offerbookingdetailsinputswrp">
                        {bkgdtlarr.map((el, i) => {
                            return (
                                <input
                                    key={i}
                                    spellCheck={false}
                                    value={el.f === 'first_last_name' ? state[el.f]?.replaceAll('_', " ") : state[el.f] || ""}
                                    placeholder={el.p}
                                    type={el.t}
                                    className={
                                        notfilledItems.includes(el.p)
                                            ? "bookingdetailsinputmarket"
                                            : "bookingdetailsinput"
                                    }
                                    onChange={(e) => {
                                        let c = { ...state };
                                        c[el.f] = e.target.value;
                                        setstate(c);
                                        setNotFilledItems(
                                            notfilledItems.filter((it, i) => {
                                                return it !== el.p;
                                            }),
                                        );
                                    }}
                                />
                            );
                        })}
                    </div>
                </section>
                <section className="offercolldeliverywrp">
                    {editLeftWrp()}
                    {editRightWrp()}
                </section>

                <section
                    className={
                        notfilledItems.includes(
                            "Select at least one box, suitcase, or own item",
                        )
                            ? `offerboxesandluggagemarked`
                            : `offerboxesandluggage`
                    }
                >
                    <h3>Boxes & Luggage</h3>

                    {standardItem()}
                    {state.Own_items?.length !== 0 ? ownItemsShow() : null}
                    {ownItem()}
                </section>
                <section className="offercollectiondatewrp">
                    <div className="collectiondatecenterwrp">
                        {state.from_country === "united kingdom" &&
                            (state.Large_box || state.Standard_box) &&
                            !hideemptyboxes ? (
                            <div className="collectiondateleftwrp">
                                <Typography variant="h1" component={'h2'} className="collectiondateh3">
                                    Your Empty Box Delivery Date
                                </Typography>
                                <p className="empyboxesleftwrpnaniniani">
                                    You have selected{" "}
                                    <strong>
                                        {state.Standard_box
                                            ? state.Standard_box
                                            : 0}{" "}
                                        standard
                                    </strong>{" "}
                                    <strong>
                                        and {state.Large_box ? state.Large_box : 0}{" "}
                                        large boxes.{" "}
                                    </strong>
                                    We will supply you with {countBoxes()} high
                                    quality boxes for you to pack your items.
                                </p>
                                <p>
                                    Please select the date you would prefer the
                                    boxes to be delivered{" "}
                                </p>
                                <p>
                                    <b>(delivery is between 9am and 6pm daily).</b>
                                </p>

                                <div className="offerreactcalendarwrapper">
                                    <Calendar
                                        tileClassName={({ date }) =>
                                            isPastOrWeekendOrFutureWorkingDay(date)
                                                ? "disabledDay"
                                                : ""
                                        }
                                        onChange={(e) => {
                                            setstate({
                                                ...state,
                                                empty_box_delivery_date:
                                                    e.toLocaleDateString("lt-LT"),
                                            });
                                        }}
                                        value={state.empty_box_delivery_date}
                                    />
                                </div>
                                <button
                                    className="idontneddemptyboxesbutton"
                                    onClick={() => {
                                        setstate({
                                            ...state,
                                            empty_box_delivery_date: "",
                                        });
                                        sethideemptyboxes(true);
                                    }}
                                >
                                    I don&apos;t need empty boxes.
                                </button>
                            </div>
                        ) : null}

                        <div className="collectiondaterightwrp">
                            <Typography variant={'h1'} component={'h2'} className="collectiondateh3">
                                Select Your Collection Date
                            </Typography>
                            <p>
                                Please select the date you would prefer your items
                                to be collected.
                            </p>
                            <p>
                                <b>(collection is between 9am and 6pm daily).</b>
                            </p>
                            <div className="offerreactcalendarwrapper">
                                <Calendar
                                    tileClassName={({ date }) =>
                                        ispastdayforcollection(date)
                                            ? "disabledDay"
                                            : ""
                                    }
                                    onChange={(e) => {
                                        setstate({
                                            ...state,
                                            Collection_Date:
                                                e.toLocaleDateString("lt-LT"),
                                        });
                                    }}
                                    value={state.Collection_Date}
                                />
                            </div>
                            {hideemptyboxes ? null : (
                                <div className="idontneddemptyboxesbuttonhidden"></div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="offerbuttonswrp">
                    <button className="resetbutton">RESET</button>
                    <Button
                        variant="contained" color="secondary"
                        className="getestimatebutton"
                        onClick={checkIfItemsIsNotMissing}
                    >
                        GET ESTIMATE
                    </Button>
                </section>
            </div>
        </PageLayout>
    );
}
