"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MaxWidthContainer } from "../common/MaxWidthContainer";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

const car = [
    {
        title: "Everything was perfect!",
        txt: (
            <>
                They didn&apos;t damage anything and were amazing. Everything was
                perfect! Even glass items were all perfectly intact. Moved
                everything very fast and very efficiently. Amazing people! Would
                definitely recommend. Very happy with Deliver1.
            </>
        ),
        author: `Kaziah Kwofie`,
        link: `https://www.facebook.com/kaziah.kwofie.9`,
    },
    {
        title: "Good experience!",
        txt: (
            <>
                Our experience was good. I cannot imagine that a firm could
                engage the customer as well as Deliver1 does - from start to
                finish. We were kept informed throughout. Well done to the firm
                and to Ernesto and his mate on this occasion..
            </>
        ),
        author: `Helen Louise`,
        link: `https://www.facebook.com/hwatchorn`,
    },
    {
        title: "Really impressed",
        txt: (
            <>
                Really impressed. Easy, courteous , reasonable £ and
                communication excellent. Will tell my friends. Thank you
            </>
        ),
        author: `Audrey Sweeting`,
        link: `https://www.facebook.com/audrey.sweeting`,
    },
    {
        title: "Professional driver",
        txt: (
            <>
                Professional driver Very professional and courteous driver, from
                pick up to drop off. Highly recommended.
            </>
        ),
        author: `Tamara Turner`,
        link: null,
    },
    {
        title: "Vehicle tracking facility was extremely useful",
        txt: (
            <>
                Excellent service. Punctual, courteous, vehicle tracking
                facility was extremely useful. We knew precisely when the van
                reached the destination.
            </>
        ),
        author: `Glyn Adams`,
        link: null,
    },
    {
        title: "Nothing was too much trouble",
        txt: (
            <>
                The pair of them worked so quickly and were very polite. Nothing
                was too much trouble. I would thoroughly recommend this service.
                Thankyou for a stress free move.
            </>
        ),
        author: `Suzanne Crowell`,
        link: null,
    },
    {
        title: "Covid safe move",
        txt: (
            <>
                Spot on and kept his distance. Very happy with whole experience.
            </>
        ),
        author: `Jason Smith`,
        link: `https://www.facebook.com/profile.php?id=1122850255`,
    },
    {
        title: "Crew very strong and hardworking",
        txt: (
            <>
                Efficient and lots of information provided. Good value and crew
                very strong and hardworking.
            </>
        ),
        author: `Wendy Hopper`,
        link: `https://www.facebook.com/wendy.hopper1`,
    },
    {
        title: "Very easy to book",
        txt: (
            <>
                Easy to book appointment. Text and emails communicating with me
                all the way through from booking to delivery. Punctual. Driver
                and mate&apos;s presentation was good, wore mask, very polite, got on
                with job at hand with ease and little guidance.
            </>
        ),
        author: `David Plumridge`,
        link: null,
    },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (newSlide) => {
        setCurrentSlide(newSlide);
    };

    const goToPrevSlide = () => {
        let newSlide = currentSlide - 1;

        goToSlide(newSlide);
    };

    const goToNextSlide = () => {
        if (currentSlide < car.length - 1) {
            goToSlide(currentSlide + 1);
        }
    };

    function stars() {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    width={24}
                    height={24}
                    src={"/star.png"}
                    alt="star"
                    quality={100}
                    priority
                />,
            );
        }
        return stars;
    }

    const getTransformValue = () => {
        return `translateX(-${currentSlide * 100}%)`; // Assuming each slide has the same width as the parent
    };

    return (
        <Stack sx={{ backgroundColor: '#ededed' }}>

            <MaxWidthContainer>
                <section className="reviewsglobalwrp">
                    <p className="faqwrphowitworksp">REVIEWS</p>

                    <div className="reviewssecondwrp">
                        <Typography variant={'h1'} component={'h2'} className="reviewh1">
                            What<br></br> People<br></br> Say
                        </Typography>

                        <div className="reviewscarouselwrp">
                            <button
                                className="reviewcarouselbutton reviewcarouselbuttonl"
                                disabled={currentSlide === 0}
                                onClick={goToPrevSlide}
                            >
                                &#x2039;
                            </button>

                            <div className="carouselmainwrpoutside">
                                <div
                                    className="carouselmainwrp"
                                    style={{ transform: getTransformValue() }}
                                >
                                    {car.map((review, index) => (
                                        <div
                                            key={index}
                                            className={`revcarouselcenterwrp`}
                                        >
                                            <div className="carouselstarswrapper">
                                                {stars()}
                                            </div>
                                            <h2 className="carouselh2">
                                                {review.title}
                                            </h2>
                                            <p className="carouselp">{review.txt}</p>
                                            {review.link ? (
                                                <a
                                                    className="carouselauthorlink"
                                                    href={review.link}
                                                    target="_blank"
                                                >
                                                    {review.author}
                                                </a>
                                            ) : (
                                                <p className="carouselauthorp">
                                                    {review.author}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="reviewcarouselbutton reviewcarouselbuttonr"
                                disabled={currentSlide === car.length - 1}
                                onClick={goToNextSlide}
                            >
                                &#x203A;
                            </button>
                        </div>
                    </div>
                </section>
            </MaxWidthContainer>
        </Stack>

    );
};

export default Carousel;
