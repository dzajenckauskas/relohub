import { ExpandButton } from '@/COMPONENTS/common/ExpandButton'
import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer'
import { theme } from '@/COMPONENTS/common/shared/Theme'
import { FaqType } from '@/COMPONENTS/types/CountryType'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

type Props = {
    faqs: FaqType[]
}

const FaqSection = ({ faqs }: Props) => {
    const [clicked, setclicked] = useState(null);

    const renderFAQs = faqs?.map((faq) => {
        return (
            <div className="faqfaqliner" key={faq.id}>
                <div className="faqfaqinsidetop" style={{ cursor: 'pointer' }} onClick={() => {
                    setclicked(
                        clicked === faq.question ? null : faq.question,
                    );
                }}>
                    <Typography variant={'h4'} component={'p'} sx={{ fontWeight: 700, pr: 2, color: theme.palette.secondary.main }}>{faq.question}</Typography>
                    <ExpandButton
                        active={clicked === faq.question}
                        setActive={setclicked}
                        onClick={() => {
                            setclicked(
                                clicked === faq.question ? null : faq.question,
                            );
                        }}
                    />
                </div>

                {clicked === faq.question ? (
                    <p className="faqfaqinsidep">{faq.answer}</p>
                ) : null}
            </div>
        )
    })
    return (
        <>
            {
                renderFAQs?.length > 0 && <section className="faqglobalwrp">
                    <MaxWidthContainer>
                        <div className="faqinsidewrp">
                            <Typography variant="h2" textAlign={'center'} pt={0}
                                pb={{ xs: 4, sm: 4 }}>{'Frequently Asked Questions'}</Typography>
                            <div className="faqfaqwrp">
                                {renderFAQs}
                            </div>
                        </div>
                    </MaxWidthContainer>
                </section>
            }
        </>
    )
}

export default FaqSection
