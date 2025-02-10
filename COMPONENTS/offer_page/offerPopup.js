"use client";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export default function OfferPopup({ hidePopup, state, prices }) {
    const stripe = useStripe();
    const elements = useElements();
    const [selected, setselected] = useState(null);
    const [showstripepopup, setshowstripepopup] = useState(false);
    const [paymentbuttonenabled, setpaymentbuttonenabled] = useState(false);
    const [error, seterror] = useState("");
    const [paymentonprogress, setpaymentonprogress] = useState(false);
    const [ordercompleted, setordercompleted] = useState(false);

    function splitprices(elm) {
        if (elm) {
            elm = elm.toString().includes(".") ? elm.toString() : `${elm}.00`;
            let split = elm.split(".");

            return (
                <div className="methodpopuppriceswrp">
                    <Typography variant={'h1'} component={'h2'}>£{split[0]}</Typography>
                    <p>{split[1]}</p>
                </div>
            );
        }
        return null;
    }

    const items = [
        {
            name: "ROAD FREIGHT",
            duration: `7 - 12 DAYS TRANSIT`,
            image: `/truck.png`,
            field: `ROAD`,
            price: prices?.price.ROAD,
            smallt: "DOOR TO DOOR",
        },
        {
            name: "SEA FREIGHT",
            duration: `10 - 14 WEEKS TRANSIT`,
            image: `/ship.png`,
            field: `SEA`,
            price: prices?.price.SEA,
            smallt: "DOOR TO DOOR",
        },
        {
            name: "AIR COURIER",
            duration: `7 - 12 DAYS TRANSIT`,
            image: `/plane.png`,
            field: `AIR COURIER`,
            price: prices?.price[`AIR COURIER`],
            smallt: "DOOR TO DOOR",
        },

        {
            name: "AIR FREIGHT",
            duration: `7 - 12 DAYS TRANSIT`,
            image: `/plane.png`,
            field: `AIR FREIGHT (TO-AIRPORT)`,
            price: prices?.price[`AIR FREIGHT (TO-AIRPORT)`],
            smallt: (
                <>
                    {`DOOR TO `}
                    <b>AIRPORT</b>
                </>
            ),
        },
        {
            name: "AIR FREIGHT",
            duration: `7 - 12 DAYS TRANSIT`,
            image: `/plane.png`,
            field: `AIR FREIGHT (TO-DOOR)`,
            price: prices?.price[`AIR FREIGHT (TO-DOOR)`],
            smallt: (
                <>
                    {`DOOR TO `}
                    <b>DOOR</b>
                </>
            ),
        },
    ];

    async function fetchtoServer() {
        const url = process.env.NEXT_PUBLIC_AFTER_STRIPE;

        try {
            const body = {
                orderReferenceNumber: prices.orderReferenceNumber,
                uuid: prices.uuid,
                type: selected.field,
                price: selected.price,
            };
            const hv = process.env.NEXT_PUBLIC_HEADER_VALUE;
            if (process.env.NODE_ENV === "development") {
                console.log(body);
            }
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "http-referer": hv,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                console.log("Error with status code:", res.status);
            } else {
                if (process.env.NODE_ENV === "development") {
                    console.log(res);
                }
            }

            await fetch("/api/email/neworder", {
                method: "POST",
                body: JSON.stringify(state),
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            console.log(error);
        }
    }

    function pricesPopup() {
        return (
            <div className="offerpopupcenterwrp">
                <p className="methodoftravelmobile">METHOD OF TRAVEL</p>

                <button
                    className="alotoftextclosebutton"
                    onClick={() => {
                        hidePopup(false);
                    }}
                >
                    &#10006;
                </button>
                <div className="offerpopuptoptitles">
                    <p>Method of travel</p>

                    <p>Total</p>
                </div>

                <div className="offerpopupselectionwrp">
                    {items.map((el, i) => {
                        if (!el.price) {
                            return null;
                        }

                        return (
                            <div
                                className={
                                    selected?.field === el.field
                                        ? "offerpopupselectionlinerselected"
                                        : "offerpopupselectionliner"
                                }
                                onClick={() => {
                                    setselected(el);
                                }}
                                key={i}
                            >
                                <Image
                                    alt={el.name}
                                    src={el.image}
                                    style={{ objectFit: "contain" }}
                                    width={56}
                                    height={56}
                                />

                                <div className="offerpopupselectionlinercenterwrp">
                                    <h3>{el.name}</h3>
                                    <p>{el.smallt}</p>
                                    <p>{el.duration}</p>
                                </div>
                                <div
                                    className={
                                        selected?.field === el.field
                                            ? "offerpopouppricewrpselected"
                                            : "offerpopouppricewrp"
                                    }
                                >
                                    {splitprices(el.price)}
                                </div>

                                <div
                                    className={
                                        selected?.field === el.field
                                            ? "offfepopupselectionsignselected"
                                            : "offfepopupselectionsign"
                                    }
                                >
                                    <div>&#x2714;</div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="stripepaymentwrp">
                        <p>
                            <strong>
                                To book, we only require a £100 deposit,{" "}
                            </strong>{" "}
                            whitch will be deducted from the final invoice.
                        </p>
                        <button
                            className="paywithstripebutton"
                            onClick={() => {
                                setshowstripepopup(true);
                            }}
                            disabled={!selected}
                        >
                            Pay deposit using <strong>stripe</strong>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    async function handlePayment() {
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
                email: state.email,
            },
        });

        if (error) {
            console.log("[error]", error);

            return;
        }

        const orderData = {
            email: state.email,
            paymentMethodId: paymentMethod.id,
        };

        const response = await fetch("/api/stripePayment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            setordercompleted(true);
            fetchtoServer();
        } else {
            seterror("Payment error");
            setpaymentonprogress(false);
        }
    }

    function stripefn(params) {
        return (
            <div className="offerpopupcenterwrpstripe">
                <div className="offerpopupstripetopwrp">
                    {" "}
                    <h3 className="stripepopuph3">DEPOSIT PAYMENT</h3>{" "}
                    <button
                        className="alotoftextclosebutton"
                        onClick={() => {
                            hidePopup(false);
                        }}
                    >
                        &#10006;
                    </button>
                </div>

                <p>
                    Thank you for choosing Deliver1 to handle your shipment from{" "}
                    <strong className="stripepopupcountriesnames">
                        {state.from_country}
                    </strong>{" "}
                    to{" "}
                    <strong className="stripepopupcountriesnames">
                        {state.to_country}
                    </strong>
                    .
                </p>

                <p>
                    To complete your shipment booking we process £100 deposit
                    which is offset against your final shipping invoice. We do
                    this as a large number of our customers update their request
                    prior to shipping.
                </p>
                {!ordercompleted ? (
                    <p className="offerstripecardetailstxt">
                        Please enter your card details below:
                    </p>
                ) : null}

                <div>
                    {ordercompleted ? null : (
                        <CardElement
                            className="stripecardelelemtn"
                            onChange={(e) => {
                                seterror("");
                                setpaymentbuttonenabled(false);
                                if (e.complete) {
                                    setpaymentbuttonenabled(true);
                                } else if (e.error) {
                                    seterror(e.error.message);
                                }
                            }}
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#636363",
                                        },
                                    },
                                },
                                hidePostalCode: true,
                            }}
                        />
                    )}
                    <p className="offerstripeerror">{error}</p>
                </div>
                {ordercompleted ? (
                    <p className="ordercompletedstripep">
                        Thank you, your order was completed
                    </p>
                ) : paymentonprogress ? (
                    <span className="stripespinner"></span>
                ) : (
                    <button
                        disabled={!paymentbuttonenabled}
                        className="stripepaydepositbtn"
                        onClick={() => {
                            setpaymentonprogress(true);
                            seterror(false);
                            handlePayment();
                        }}
                    >
                        PAY DEPOSIT NOW
                    </button>
                )}
            </div>
        );
    }

    function afterPayment() {
        return (
            <div className="offerpopupcenterwrpstripe">
                <div className="offerpopupstripetopwrp">
                    {" "}
                    <h3 className="stripepopuph3">
                        <div className="paymentreceivedcheckmark">&#x2714;</div>{" "}
                        PAYMENT RECEIVED
                    </h3>{" "}
                    <Link className="paymentreceiverdlink" href={"/"}>
                        <button className="alotoftextclosebutton">
                            &#10006;
                        </button>
                    </Link>
                </div>

                <p>
                    We have successfully received your £100.00 deposit payment.
                </p>

                <p>
                    Shortly, you will receive an email containing instructions
                    on how to log in to your customer portal.
                </p>
                <p>
                    There, you will be able to complete your inventory, print
                    the labels, upload a copy of your passport and VISA and
                    access many other services.
                </p>
            </div>
        );
    }

    return (
        <section className="offerpopupglobalwrp">
            {ordercompleted
                ? null
                : showstripepopup
                    ? stripefn()
                    : pricesPopup()}
            {ordercompleted ? afterPayment() : null}
        </section>
    );
}
