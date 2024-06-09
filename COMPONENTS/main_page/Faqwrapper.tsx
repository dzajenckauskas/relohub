"use client";
import { useState } from "react";
import { MaxWidthContainer } from "../common/MaxWidthContainer";
import Typography from '@mui/material/Typography'
import { theme } from "../common/shared/Theme";
import { ExpandButton } from "../common/ExpandButton";

export default function FaqWrapper() {
    const [clicked, setclicked] = useState(null);

    const qa = [
        {
            q: "How do i place an order?",
            a: `You can place an order online or over the phone. Our website uses sophisticated technology to find real-time prices for all available services and, if you’re happy with everything, there’s a booking form where you can organise your booking right away. Alternatively, if you prefer to speak to a human, you can get in touch on the phone or arrange a call back and one of our friendly booking agents will assist you and make all the necessary arrangements.`,
        },
        {
            q: "What services can I choose from?",
            a: `At Deliver1, we offer a range of services to suit any requirement and budget. If you get an instant online price estimate, we will provide pricing and details for all available options. Please ensure you understand what each option includes. Our booking agents can answer any queries and, once you’ve booked, you can put any queries to your dedicated Client Services Executive.`,
        },
        {
            q: "How do you calculate the cost of my shipment?",
            a: (
                <>
                    The cost of your shipment will be determined using a number
                    of variables. These include the shipment’s origin and
                    destination; the nature of the service you choose (sea
                    freight / air freight / courier / door-to-door / etc) and
                    the weight and / or volume of the items being transported.
                    <br></br>
                    We need both the actual weight and the volumetric weight of
                    an item to determine the costs associated with transporting
                    it to your destination. The initial price you receive at the
                    time of booking (online or over the phone) is an estimate
                    based solely on the measurements and weights that you
                    provide.
                </>
            ),
        },
        {
            q: "Do you provide a packing service?",
            a: `Yes, absolutely. We offer professional export packing on the day of collection. Feel free to ask for more details.`,
        },
        {
            q: "What happens after I’ve booked?",
            a: `Once your booking has been confirmed, you will be contacted by a member of our Client Services Team. This is your dedicated ‘account manager’ and they will be responsible for validating your booking to ensure we have fully understood your needs and requirements.
            They will also discuss and outline all the documents that are required to fulfil your delivery. Of course, at this point you’ll be able to ask any questions you may have regarding the transportation of your belongings. You will also receive follow up emails with instructions.`,
        },
        {
            q: "Do you provide boxes?",
            a: (
                <>
                    Yes. Deliver1 has developed high quality cardboard export
                    boxes. The boxes are double-walled and reinforced to
                    withstand the rigours of international travel. Protecting
                    our environment is very important to Deliver1, that’s why
                    our boxes are 100% recyclable (made from recycled
                    materials), and they are designed to be re-used. Our boxes
                    can be included as part of your order, in which case they
                    will be delivered to you on a selected date prior to your
                    collection. <br></br>
                    We are unable to provide boxes and materials in some
                    locations. If we are unable to provide ‘boxes’ in your
                    location, you will need to source your own boxes locally.
                </>
            ),
        },
        {
            q: "Can I use my own Boxes?",
            a: `You can use your own boxes, but you need to be extremely careful. It’s vital to ensure they are not damaged and that they are reinforced and of a high-quality. Your boxes need to be very strong to withstand the rigours of international shipping and boxes purchased online or from a self-storage facility may not be suitable for an overseas move. You need double-walled cardboard export boxes. When using your own boxes, you may incur a higher excess level on your insurance cover (see ‘Is there an excess to pay?), and further restrictions may apply.`,
        },
        {
            q: "How do I measure and weigh my items?",
            a: (
                <>
                    Measuring your items - It’s best to use a tape measure to
                    record the dimensions of any items as this is the most
                    accurate method. If you do not have a tape measure, you can
                    use a ruler, but this won’t be as accurate and could result
                    in the price needing to be adjusted to account for
                    inaccuracies in the original estimate.<br></br> You need to
                    measure the longest length on each side and include any
                    handles, wheels or bulges as these need to be accounted for
                    when calculating the volume of the item. Weighing your items
                    - If you do not have scales suitable for obtaining the
                    weight of your item(s), you can use household bathroom
                    scales. First weigh yourself while you’re holding an item
                    and make a note of the figure (weight A). Then weigh
                    yourself without the item (weight B). Deducting weight B
                    from weight A will provide you with the weight of your item.
                    It’s worth rounding the figure up to allow for any
                    inaccuracies.
                </>
            ),
        },
    ];

    return (
        <section className="faqglobalwrp">
            <MaxWidthContainer>
                <div className="faqinsidewrp">
                    <p className="faqwrphowitworksp">F.A.Q</p>
                    <h2 className="processwrptheprocess">
                        Frequently Asked Questions
                    </h2>


                    <div className="faqfaqwrp">
                        {qa.map((el, i) => {
                            return (
                                <div className="faqfaqliner" key={i}>
                                    <div className="faqfaqinsidetop" style={{ cursor: 'pointer' }} onClick={() => {
                                        setclicked(
                                            clicked === el.q ? null : el.q,
                                        );
                                    }}>
                                        <Typography variant={'h4'} component={'p'} sx={{ fontWeight: 700, pr: 2, color: theme.palette.secondary.main }}>{el.q}</Typography>
                                        <ExpandButton
                                            active={clicked === el.q}
                                            setActive={setclicked}
                                            onClick={() => {
                                                setclicked(
                                                    clicked === el.q ? null : el.q,
                                                );
                                            }}
                                        />
                                    </div>

                                    {clicked === el.q ? (
                                        <p className="faqfaqinsidep">{el.a}</p>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    );
}
