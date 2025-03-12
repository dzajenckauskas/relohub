"use client";
import { theme } from "@/COMPONENTS/common/shared/Theme";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useState } from "react";
import OfferSummaryBottomLine from "./OfferSummaryBottomLine";
import ErrorMessage from "./steps/ErrorMessage";
import Box from "@mui/material/Box";

export default function PriceOffer({ state, prices, form, activeStep }) {
    const stripe = useStripe();
    const elements = useElements();
    const [selected, setselected] = useState(null);
    const [showstripepopup, setshowstripepopup] = useState(false);
    const [paymentbuttonenabled, setpaymentbuttonenabled] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [paymentonprogress, setpaymentonprogress] = useState(false);
    const [ordercompleted, setordercompleted] = useState(false);

    function splitprices(elm) {
        if (elm) {
            elm = elm.toFixed(2)
            let split = elm.split(".");

            return (
                <div className="methodpopuppriceswrp">
                    <Typography variant="h3" component={'h2'}>£{split[0]}</Typography>
                    <Typography style={{ paddingLeft: 2, fontSize: 14, fontWeight: 600, letterSpacing: 1.2, position: 'relative', top: -1 }}>{split[1]}</Typography>
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
            price: prices?.price?.SEA,
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
            price: prices?.price?.[`AIR COURIER`],
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
            price: prices?.price?.[`AIR FREIGHT (TO-AIRPORT)`],
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
            price: prices?.price?.[`AIR FREIGHT (TO-DOOR)`],
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
            price: prices?.price?.ROAD,
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
                <Stack gap={2} pb={1}>
                    <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Price Options</b></Typography>
                    <Divider />
                </Stack>
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
                                px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 }
                            }}
                                direction={'row'} width={'100%'} alignItems={'center'}
                                justifyContent={'space-between'}
                                onClick={() => {
                                    setselected(el);
                                }}
                                key={i}
                            >
                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%', alignItems: 'center' }}>
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
                                </Box>

                                <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%', alignItems: 'center' }}>
                                    <Stack spacing={2} direction={'row'} width={'100%'} alignItems={'center'} >
                                        <Stack position={"relative"} sx={{ top: -18 }}>
                                            <div
                                                className={
                                                    isSelected
                                                        ? "offfepopupselectionsignselected"
                                                        : "offfepopupselectionsign"
                                                }
                                            >
                                            </div>
                                        </Stack>
                                        <Stack width={'100%'}>
                                            <Stack direction={'row'} alignContent={'center'} alignItems={'center'}
                                                sx={{ borderBottom: `1px solid ${theme.palette.divider}`, pb: 1 }}>
                                                <Stack spacing={2} width={'100%'} justifyContent={'space-between'} direction={'row'} alignContent={'center'} alignItems={'center'}>
                                                    <Stack direction={'row'} spacing={3}>
                                                        <Image
                                                            alt={el.name}
                                                            src={el.image}
                                                            style={{ objectFit: "contain" }}
                                                            width={40}
                                                            height={40}
                                                        />

                                                        <h3 style={{ fontSize: 18, color: isSelected ? '#fff' : theme.palette.primary.main, width: 60, textTransform: 'capitalize' }}>
                                                            {el.name}
                                                        </h3>
                                                    </Stack>
                                                    <div
                                                        style={{ color: isSelected ? '#fff' : theme.palette.primary.main, letterSpacing: 1 }}
                                                    >
                                                        {splitprices(el.price)}
                                                    </div>
                                                </Stack>
                                            </Stack>
                                            <Stack pt={1} direction={'row'}
                                                width={'100%'} justifyContent={'space-between'}
                                                sx={{ color: isSelected ? '#fff' : theme.palette.primary.main, }} className="offerpopupselectionlinercenterwrp">
                                                <p style={{ fontWeight: 500 }}>{el.smallt}</p>
                                                <p>{el.duration}</p>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Box>
                            </Stack>
                        );
                    })}
                </Stack>
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
            setError(error.message);
            setpaymentonprogress(false);
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
            setpaymentonprogress(false);
        } else {
            setError("Payment error");
            setpaymentonprogress(false);
        }
    }

    function stripefn() {
        return (
            <div className="offerpopupcenterwrpstripe" style={{ paddingLeft: 0 }}>
                <Stack gap={2} pb={1}>
                    <Typography variant="h2" sx={{ fontWeight: 500 }}>Deposit <b>Payment</b></Typography>
                    <Divider />
                </Stack>
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
                                setError(undefined);
                                setpaymentbuttonenabled(false);
                                if (e.complete) {
                                    setpaymentbuttonenabled(true);
                                } else if (e.error) {
                                    setError(e.error.message);
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
                    {error && <Box><ErrorMessage message={String(error)} /></Box>}
                </div>
                {ordercompleted ? (
                    <p className="ordercompletedstripep">
                        Thank you, your order was completed
                    </p>
                ) : paymentonprogress ? (
                    <span className="stripespinner"></span>
                ) : (
                    null
                )}
            </div>
        );
    }

    function afterPayment() {
        return (
            <div className="offerpopupcenterwrpstripe" style={{ marginBottom: 20 }}>
                <Stack gap={2} pb={1}>
                    <Typography variant="h2" sx={{ fontWeight: 500 }}>Your <b>Payment Received</b></Typography>
                    <Divider />
                </Stack>
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
        <section style={{ width: '100%' }}>
            {ordercompleted
                ? null
                : showstripepopup
                    ? stripefn()
                    : pricesPopup()}
            {ordercompleted ? afterPayment() : null}
            {activeStep == 2 &&
                <Stack sx={{ maxWidth: { xs: "100%", md: '100%' }, width: '100%', position: 'fixed', left: 0, bottom: 0, zIndex: 99 }}>
                    <OfferSummaryBottomLine onClick={() => {
                        setshowstripepopup(true);
                    }}
                        onClickPay={() => {
                            setpaymentonprogress(true);
                            setError(undefined);
                            handlePayment();
                        }
                        }
                        loading={paymentonprogress}
                        paymentbuttonenabled={paymentbuttonenabled}
                        selected={selected}
                        showstripepopup={showstripepopup}
                        setorderCompleted={setordercompleted}
                        orderCompleted={ordercompleted}
                        error={(error)} activeStep={activeStep} form={form} />
                </Stack>}
        </section>
    );
}
