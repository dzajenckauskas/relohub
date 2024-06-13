import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import SectionCard from '@/COMPONENTS/common/sections/SectionCard';
import { SectionType } from '@/COMPONENTS/types/CountryType';
import Stack from '@mui/material/Stack';
import React from 'react'

type Props = {
    countryName?: string;
    cardsSection?: SectionType
}

const CardsSection = ({ countryName, cardsSection }: Props) => {
    const renderCards = cardsSection?.sectionCards?.map((c, i) => {
        const isFirst = i % 2 === 0
        return (
            <SectionCard key={i} reverse={isFirst}
                imgSrc={process.env.NEXT_PUBLIC_API_URL + c.image?.data?.attributes?.url ?? undefined}
                imgAlt={c.image?.data?.attributes?.alternativeText ?? undefined}
                buttonText={c.buttonText}
                url={c.url}
                title={c.title}
                shortContent={c.shortContent}
            />
        )
    })
    return (
        <>
            <MaxWidthContainer >
                {!cardsSection &&
                    <Stack py={8} spacing={4}>
                        <SectionCard reverse
                            imgSrc={'/placeholder-image.webp'}
                            imgAlt={countryName}
                            title={`Removals to ${countryName} with Deliver1`}
                            shortContent={`Welcome to Deliver1 - Your reliable partner for stress-free and efficient international removals to ${countryName}. Whether you are relocating for work, family, or adventure, our comprehensive moving services ensure your belongings reach safely and on time.`}
                        />
                        <SectionCard
                            imgSrc={'/placeholder-image.webp'}
                            imgAlt={countryName}
                            title={'Experience and Expertise You Can Trust'}
                            shortContent={`With over 20 years of combined experience in international removals, Deliver1 is your trusted partner in navigating the complexities of moving to ${countryName}. Our team of experts possesses in-depth knowledge of ${countryName}'s logistics and customs regulations, ensuring a seamless and efficient transition for your belongings.`}
                        />
                    </Stack>}
                {cardsSection &&
                    <Stack py={8} spacing={4}>
                        {renderCards}
                    </Stack>}
            </MaxWidthContainer>
        </>
    )
}

export default CardsSection
