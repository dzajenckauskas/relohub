"use client";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import Footer from "../common/shared/Footer";
import { MaxWidthContainer } from "../common/MaxWidthContainer";
import ContactForm from "../common/forms/ContactForm";

export default function GetInTOuch() {
    // const [checkmark, setcheckmark] = useState(false);
    // const [values, setvalues] = useState({});
    // const [allowToSend, setAllowToSend] = useState(false);
    const [sendpopu, setsendpopup] = useState(false);
    // const [sending, setsending] = useState(false);

    // const form = ["Name", "Phone Number", "Email Address"];

    // useEffect(() => {
    //     let send = true;

    //     Object.keys(values).forEach((key) => {
    //         if (!values[key]) {
    //             send = false;
    //         }

    //         if (!values.text) {
    //             send = false;
    //         }
    //         if (key === "Email Address" && !validateEmail(values[key])) {
    //             send = false;
    //         }
    //         if (key === "Phone Number" && !validatePhoneNumber(values[key])) {
    //             send = false;
    //         }
    //     });

    //     for (const key of form) {
    //         if (!values[key]) {
    //             send = false;
    //         }
    //     }

    //     if (!checkmark) {
    //         send = false;
    //     }

    //     setAllowToSend(send);
    // }, [values, checkmark]);



    function messageSendpopup() {
        return (
            <section className="offeritemsmissingwrapper">
                <div className="offeritemsmissingcenterwrp">
                    <button
                        className="alotoftextclosebutton"
                        onClick={() => {
                            setsendpopup(false);
                        }}
                    >
                        {" "}
                        ✖
                    </button>
                    <h3 className="messagesenth3">Message sent!</h3>
                    <p className="messagesentp">
                        Thank you for your message. We always aim to reply
                        within 2 hours during our regular business hours.Please
                        note that we are closed on weekends. If your message is
                        urgent and it&apos;s during business hours, please call us on{" "}
                        <b>
                            {" "}
                            <a href="tel:+443330907053">+44333 090 7053</a>
                        </b>
                    </p>
                    <div className="sofa2notfilledwrpimgwrp">
                        <Image
                            alt="two men brings stuff"
                            fill={true}
                            style={{ objectFit: "contain" }}
                            src={"/sofa2cut.png"}
                            sizes="600px"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="getintouchglobalwrp">
            <MaxWidthContainer>
                {sendpopu ? messageSendpopup() : null}
                <div className="getintouchglobalinsidewrp">
                    <Typography component={'h2'} variant="h1" className="gith1">Get In Touch</Typography>
                    <p className="gitpm">
                        We love hearing from you-so please get in touch with any
                        questions or queries.
                    </p>
                    <div className="gitcenterwrp">
                        <div className="gitcenterleftwrp">
                            <p className="gitp">
                                We love hearing from you-so please get in touch with
                                any questions or queries.
                            </p>

                            <div className="gitworkinghourswrp">
                                <div className="gitworkinghoursliner">
                                    <svg
                                        className="giticonwhsvg"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="clock"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                                        ></path>
                                    </svg>
                                    <div className="gitleftlinerright">
                                        <p className="gittitlep">Working hours</p>
                                        <p>Mon - Sat: 08:00 - 17:00</p>
                                        <p>Sun: Closed</p>
                                    </div>
                                </div>
                                <div className="gitworkinghoursliner">
                                    <svg
                                        className="giticonwhsvg"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="phone-volume"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"
                                        ></path>
                                    </svg>
                                    <div className="gitleftlinerright">
                                        <p className="gittitlep">Call</p>
                                        <a href="tel:+443330907053">0333 090 7053</a>
                                    </div>
                                </div>
                                <div className="gitworkinghoursliner">
                                    <svg
                                        className="giticonwhsvg"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="envelope-open"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"
                                        ></path>
                                    </svg>
                                    <div className="gitleftlinerright">
                                        <p className="gittitlep">Email</p>

                                        <a href="mailto:hello@deliver1.co.uk">
                                            hello@deliver1.co.uk
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Image
                                className="githumanboximg"
                                alt="human carying box"
                                height={400}
                                width={280}
                                style={{ objectFit: "contain" }}
                                src={"/humanbox.png"}
                            ></Image>
                        </div>
                        <div>
                            <ContactForm />
                            <section className="pcfooter" style={{
                                marginTop: 100
                            }}>
                                <Footer />
                            </section>
                        </div>
                    </div>
                    <section className="mobilefooter">
                        <Footer />
                    </section>
                </div>
            </MaxWidthContainer>
        </section>
    );
}


// "use client";
// import { useEffect, useState } from "react";
// import Footer from "../common/Footer";
// import Image from "next/image";
// import { validateEmail, validatePhoneNumber } from "@/UTILS/helperFunctions";
// import { MaxWidthContainer } from "../common/MaxWidthContainer";
// import Typography from "@mui/material/Typography";

// export default function GetInTOuch() {
//     const [checkmark, setcheckmark] = useState(false);
//     const [values, setvalues] = useState({});
//     const [allowToSend, setAllowToSend] = useState(false);
//     const [sendpopu, setsendpopup] = useState(false);
//     const [sending, setsending] = useState(false);

//     const form = ["Name", "Phone Number", "Email Address"];

//     useEffect(() => {
//         let send = true;

//         Object.keys(values).forEach((key) => {
//             if (!values[key]) {
//                 send = false;
//             }

//             if (!values.text) {
//                 send = false;
//             }
//             if (key === "Email Address" && !validateEmail(values[key])) {
//                 send = false;
//             }
//             if (key === "Phone Number" && !validatePhoneNumber(values[key])) {
//                 send = false;
//             }
//         });

//         for (const key of form) {
//             if (!values[key]) {
//                 send = false;
//             }
//         }

//         if (!checkmark) {
//             send = false;
//         }

//         setAllowToSend(send);
//     }, [values, checkmark]);

//     async function sendMessage(params) {
//         let res = await fetch("/api/email/getintouch", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(values),
//         });

//         if (res.ok) {
//             setsendpopup(true);
//         }
//     }

//     function messageSendpopup() {
//         return (
//             <section className="offeritemsmissingwrapper">
//                 <div className="offeritemsmissingcenterwrp">
//                     <button
//                         className="alotoftextclosebutton"
//                         onClick={() => {
//                             setsendpopup(false);
//                         }}
//                     >
//                         {" "}
//                         ✖
//                     </button>
//                     <h3 className="messagesenth3">Message sent!</h3>
//                     <p className="messagesentp">
//                         Thank you for your message. We always aim to reply
//                         within 2 hours during our regular business hours.Please
//                         note that we are closed on weekends. If your message is
//                         urgent and it&apos;s during business hours, please call us on{" "}
//                         <b>
//                             {" "}
//                             <a href="tel:+443330907053">+44333 090 7053</a>
//                         </b>
//                     </p>
//                     <div className="sofa2notfilledwrpimgwrp">
//                         <Image
//                             alt="two men brings stuff"
//                             fill={true}
//                             style={{ objectFit: "contain" }}
//                             src={"/sofa2cut.png"}
//                             sizes="600px"
//                         />
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="getintouchglobalwrp">
//             <MaxWidthContainer>
//                 {sendpopu ? messageSendpopup() : null}
//                 <div className="getintouchglobalinsidewrp">
//                     <Typography component={'h2'} variant="h1" className="gith1">Get In Touch</Typography>
//                     <p className="gitpm">
//                         We love hearing from you-so please get in touch with any
//                         questions or queries.
//                     </p>
//                     <div className="gitcenterwrp">
//                         <div className="gitcenterleftwrp">
//                             <p className="gitp">
//                                 We love hearing from you-so please get in touch with
//                                 any questions or queries.
//                             </p>

//                             <div className="gitworkinghourswrp">
//                                 <div className="gitworkinghoursliner">
//                                     <svg
//                                         className="giticonwhsvg"
//                                         aria-hidden="true"
//                                         focusable="false"
//                                         data-prefix="fa"
//                                         data-icon="clock"
//                                         role="img"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 512 512"
//                                         data-fa-i2svg=""
//                                     >
//                                         <path
//                                             fill="currentColor"
//                                             d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
//                                         ></path>
//                                     </svg>
//                                     <div className="gitleftlinerright">
//                                         <p className="gittitlep">Working hours</p>
//                                         <p>Mon - Sat: 08:00 - 17:00</p>
//                                         <p>Sun: Closed</p>
//                                     </div>
//                                 </div>
//                                 <div className="gitworkinghoursliner">
//                                     <svg
//                                         className="giticonwhsvg"
//                                         aria-hidden="true"
//                                         focusable="false"
//                                         data-prefix="fa"
//                                         data-icon="phone-volume"
//                                         role="img"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 384 512"
//                                         data-fa-i2svg=""
//                                     >
//                                         <path
//                                             fill="currentColor"
//                                             d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"
//                                         ></path>
//                                     </svg>
//                                     <div className="gitleftlinerright">
//                                         <p className="gittitlep">Call</p>
//                                         <a href="tel:03330907053">0333 090 7053</a>
//                                     </div>
//                                 </div>
//                                 <div className="gitworkinghoursliner">
//                                     <svg
//                                         className="giticonwhsvg"
//                                         aria-hidden="true"
//                                         focusable="false"
//                                         data-prefix="fa"
//                                         data-icon="envelope-open"
//                                         role="img"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 512 512"
//                                         data-fa-i2svg=""
//                                     >
//                                         <path
//                                             fill="currentColor"
//                                             d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"
//                                         ></path>
//                                     </svg>
//                                     <div className="gitleftlinerright">
//                                         <p className="gittitlep">Email</p>

//                                         <a href="mailto:hello@deliver1.co.uk">
//                                             hello@deliver1.co.uk
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <Image
//                                 className="githumanboximg"
//                                 alt="human carying box"
//                                 height={400}
//                                 width={280}
//                                 style={{ objectFit: "contain" }}
//                                 src={"/humanbox.png"}
//                             ></Image>
//                         </div>
//                         <div className="gitcenterrightwrp">
//                             <form className="gitform">
//                                 <div className="gitformtop">
//                                     {form.map((el, i) => {
//                                         return (
//                                             <label className="gitformlabel" key={i}>
//                                                 {el}:
//                                                 <input
//                                                     spellCheck={false}
//                                                     required
//                                                     value={values[el] || ""}
//                                                     onChange={(e) => {
//                                                         let c = { ...values };

//                                                         c[el] = e.target.value;

//                                                         setvalues(c);
//                                                     }}
//                                                     type="text"
//                                                     className={
//                                                         values[el]
//                                                             ? "formlabelinput"
//                                                             : "formlabelinputrequired"
//                                                     }
//                                                 ></input>
//                                             </label>
//                                         );
//                                     })}
//                                 </div>
//                                 <label className="gitformlabel">
//                                     How can we help?
//                                     <textarea
//                                         spellCheck={false}
//                                         required
//                                         onChange={(e) => {
//                                             let c = { ...values };

//                                             c.text = e.target.value;

//                                             setvalues(c);
//                                         }}
//                                         type="text"
//                                         className={
//                                             values.text
//                                                 ? "formlabelinputtextarea"
//                                                 : "formlabelinputtextareadisabled"
//                                         }
//                                     ></textarea>
//                                 </label>
//                             </form>

//                             <div className="gitcheckboxwrp">
//                                 <div
//                                     className={
//                                         checkmark ? "gitcheckboxch" : "gitcheckbox"
//                                     }
//                                     onClick={() => {
//                                         setcheckmark(checkmark ? false : true);
//                                     }}
//                                 >
//                                     &#10003;
//                                 </div>
//                                 <p className="gitcheckboxp">
//                                     I consent to receive further communication
//                                     regarding this Contact Us request and confirm
//                                     that I agree to the storing and processing of my
//                                     personal details as described in the Privacy
//                                     Statement.
//                                 </p>
//                             </div>
//                             <button
//                                 disabled={!allowToSend}
//                                 className="gitsendbutton"
//                                 onClick={() => {
//                                     setsending(true);

//                                     sendMessage();
//                                 }}
//                             >
//                                 SEND MESSAGE
//                             </button>
//                             <section className="pcfooter">
//                                 <Footer />
//                             </section>
//                         </div>
//                     </div>
//                     <section className="mobilefooter">
//                         <Footer />
//                     </section>
//                 </div>
//             </MaxWidthContainer>
//         </section>
//     );
// }
