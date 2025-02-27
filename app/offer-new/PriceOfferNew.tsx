"use client";
import { theme } from "@/COMPONENTS/common/shared/Theme";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import OfferSummaryBottomLine from "./OfferSummaryBottomLine";
import Divider from "@mui/material/Divider";

export default function PriceOffer({ state, prices, form, activeStep }) {
    const stripe = useStripe();
    const elements = useElements();
    const [selected, setselected] = useState(null);
    const [showstripepopup, setshowstripepopup] = useState(false);
    const [paymentbuttonenabled, setpaymentbuttonenabled] = useState(false);
    const [error, seterror] = useState<string | boolean>("");
    const [paymentonprogress, setpaymentonprogress] = useState(false);
    const [ordercompleted, setordercompleted] = useState(false);

    function splitprices(elm) {
        if (elm) {
            elm = elm.toString().includes(".") ? elm.toString() : `${elm}.00`;
            let split = elm.split(".");

            return (
                <div className="methodpopuppriceswrp">
                    <Typography variant="h3" component={'h2'}>£{split[0]}</Typography>
                    <p style={{ paddingLeft: 4 }}>{split[1]}</p>
                </div>
            );
        }
        return null;
    }

    const items = [
        {
            name: "Sea Freight",
            duration: `10 - 14 Weeks Transit`,
            image: `/ship.png`,
            field: `SEA`,
            price: prices?.SEA,
            smallt: (
                <>
                    {`Door to `}
                    <b>Door</b>
                </>
            ),
        },


        {
            name: "Air Courier",
            duration: `7 - 12 Days Transit`,
            image: `/plane.png`,
            field: `AIR COURIER`,
            price: prices?.[`AIR COURIER`],
            smallt: (
                <>
                    {`Door to `}
                    <b>Door</b>
                </>
            ),
        },

        {
            name: "Air Freight",
            duration: `7 - 12 Days Transit`,
            image: `/plane.png`,
            field: `AIR FREIGHT (TO-AIRPORT)`,
            price: prices?.[`AIR FREIGHT (TO-AIRPORT)`],
            smallt: (
                <>
                    {`Door to `}
                    <b>Airport</b>
                </>
            ),
        },
        {
            name: "Air Freight",
            duration: `7 - 12 Days Transit`,
            image: `/plane.png`,
            field: `AIR FREIGHT (TO-DOOR)`,
            price: prices?.[`AIR FREIGHT (TO-DOOR)`],
            smallt: (
                <>
                    {`Door to `}
                    <b>Door</b>
                </>
            ),
        },
        {
            name: "Road Freight",
            duration: `7 - 12 Days Transit`,
            image: `/truck.png`,
            field: `ROAD`,
            price: prices?.ROAD,
            smallt: (
                <>
                    {`Door to `}
                    <b>Door</b>
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
            <div style={{ paddingLeft: 0 }}>
                <Stack spacing={1} pt={1}>
                    {items.map((el, i) => {
                        const isSelected = selected?.field === el.field
                        if (!el.price) {
                            return null;
                        }

                        return (
                            <Stack sx={{
                                cursor: 'pointer', borderRadius: .75,
                                backgroundColor: selected?.field === el.field ? theme.palette.secondary.main : '#EBEBEB',
                                px: 3, py: 2
                            }}
                                direction={'row'} width={'100%'} alignItems={'center'}
                                justifyContent={'space-between'}
                                onClick={() => {
                                    setselected(el);
                                }}
                                key={i}
                            >
                                <Stack spacing={4} direction={'row'} width={'100%'} alignItems={'center'} >
                                    <div
                                        className={
                                            isSelected
                                                ? "offfepopupselectionsignselected"
                                                : "offfepopupselectionsign"
                                        }
                                    >
                                    </div>
                                    <Image
                                        alt={el.name}
                                        src={el.image}
                                        style={{ objectFit: "contain" }}
                                        width={50}
                                        height={50}
                                    />

                                    <h3 style={{ fontSize: 20, color: isSelected ? '#fff' : theme.palette.primary.main, width: 80, textTransform: 'capitalize' }}>
                                        {el.name}
                                    </h3>
                                    <div style={{ color: isSelected ? '#fff' : theme.palette.primary.main, }} className="offerpopupselectionlinercenterwrp">
                                        <p style={{ fontWeight: 500 }}>{el.smallt}</p>
                                        <p>{el.duration}</p>
                                    </div>
                                </Stack>
                                <div
                                    style={{ color: isSelected ? '#fff' : theme.palette.primary.main, letterSpacing: 1 }}
                                >
                                    {splitprices(el.price)}
                                </div>


                            </Stack>
                        );
                    })}
                </Stack>

                {/* <div className="stripepaymentwrp">
                    <p>
                        <strong>
                            To book, we only require a £100 deposit,{" "}
                        </strong>{" "}
                        whitch will be deducted from the final invoice.
                    </p>
                </div>
                <Box>
                    <Button
                        onClick={() => {
                            setshowstripepopup(true);
                        }}
                        disabled={!selected}
                        variant="contained" color="secondary"
                        sx={{ px: 6, py: 2 }}>
                        Pay deposit using stripe
                    </Button>
                    {error && <ErrorMessage message={String(error)} />}
                </Box> */}


            </div>
            // </div>
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

    function stripefn() {
        return (
            <div className="offerpopupcenterwrpstripe" style={{ paddingLeft: 0 }}>
                <div className="offerpopupstripetopwrp">
                    {" "}
                    <h3 className="stripepopuph3">DEPOSIT PAYMENT</h3>{" "}
                    {/* <button
                        className="alotoftextclosebutton"
                        onClick={() => {
                            hidePopup(false);
                        }}
                    >
                        &#10006;
                    </button> */}
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
        <section >
            <Stack gap={2} pb={1}>
                <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Price Options</b></Typography>
                <Divider />
            </Stack>
            {ordercompleted
                ? null
                : showstripepopup
                    ? stripefn()
                    : pricesPopup()}
            {ordercompleted ? afterPayment() : null}
            {activeStep == 2 && <Stack sx={{ maxWidth: { xs: "100%", md: '100%' }, width: '100%', position: 'fixed', left: 0, bottom: 0, zIndex: 99 }}>
                <OfferSummaryBottomLine onClick={() => {
                    setshowstripepopup(true);
                }}
                    error={String(error)} activeStep={activeStep} form={form} />
            </Stack>}
        </section>
    );
}
