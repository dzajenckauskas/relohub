'use client'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';

const steps = ['Contact details & Dates', 'Your inventory', 'Price options'];

type Props = {
    activeStep: number;
    setActiveStep: (v: number) => void;
    disablePricesButton?: boolean;
    error?: string;
}

export default function HorizontalStepper({ error, activeStep, setActiveStep, disablePricesButton }: Props) {

    console.log(error, "errorerrorerrorerror", activeStep);

    return (
        <Stack direction={'row'} justifyContent={'center'} sx={{ width: '100%', py: 4 }}>
            <Box sx={{ width: '100%', maxWidth: 'sm' }}>
                <Stepper activeStep={activeStep} variant='outlined'
                    alternativeLabel
                    sx={{
                        '& .MuiStepConnector-line': {
                            borderColor: 'lightgrey !important',
                            borderWidth: 2,
                            position: 'relative',
                            top: 5,
                            zIndex: 0,
                            transform: 'scale(1)'
                        },
                    }}
                >
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        // if (isStepOptional(index)) {
                        //     labelProps.optional = (
                        //         <Typography variant="caption">Optional</Typography>
                        //     );
                        // }
                        // if (isStepSkipped(index)) {
                        //     stepProps.completed = false;
                        // }

                        // console.log(activeStep, "activeStep");
                        // console.log(index, "index");

                        // const isPastStep = false

                        return (
                            <Step key={label} {...stepProps} >
                                <StepLabel
                                    onClick={() => setActiveStep(index)}
                                    {...labelProps}
                                    sx={{
                                        cursor: 'pointer',
                                        // pointerEvents: (disablePricesButton && index === 2) ? 'none' : 'auto',
                                        '& .MuiStepIcon-root': {
                                            fontSize: '5rem',
                                            // color: activeStep === index ? theme.palette.secondary.main : 'transparent',
                                            // (
                                            //     isPastStep ? 'black' : 'transparent'
                                            // ),
                                            borderRadius: 50,
                                            // border: (activeStep === index || isPastStep) ? 'none' : `2px solid ${'lightgrey'}`,
                                            // border: activeStep === ind ? 'none' : `2px solid ${theme.palette.secondary.main}`,

                                        },
                                        '& .MuiStepLabel-label': {
                                            marginTop: '8px',
                                            fontSize: 14,
                                            fontWeight: 500,
                                            // color: activeStep === index ? theme.palette.secondary.main : 'black',

                                        },
                                        '& .MuiStepIcon-text': {
                                            fontSize: 12,
                                            fontWeight: 500,
                                            // fill: activeStep === index ? '#fff' : 'black',
                                        },
                                    }}
                                >
                                    {label}
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {/* {activeStep === steps.length ? (
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </>
                ) : (
                    <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )} */}
            </Box>
        </Stack>
    );
}
