import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorBox from "../ErrorBox";
import { theme } from "../Theme";
import FormCheckbox from "./FormCheckbox";
import { FormTextField } from "./FormTextField";

type ContactFormInputType = {
    name: string;
    phone: string;
    email: string;
    message: string;
    url: string;
    contents: string;
    consent: boolean;
}

const ContactForm = () => {
    const [sent, setSent] = useState(false)
    const [error, setError] = useState<string | undefined>()

    const submit: SubmitHandler<ContactFormInputType> = async (data) => {
        const inputData = {
            data: {
                email: data.email,
                name: data.name,
                phone: data.phone,
                message: data.message,
                consent: data.consent,
                contents: JSON.stringify(data),
            }
        }

        let url = "/api/email/getintouch"
        await axios.post(url, inputData)
            .catch((error) => {
                console.log(error);
                if (error?.message) {
                    setError(error.message)
                }
            })
            .then((response) => {
                console.log(response);
                if (response) {
                    setError(undefined)
                    setSent(true)
                    reset()
                }
            })
    }

    const contactFormSchema = yup.object({
        email: yup.string().nullable().email(`${'Incorrect email format!'}`).required(`${'Email address is required'}`),
        name: yup.string().required(`${'Name is required'}`),
        message: yup.string().required(`${'Message is required'}`),
        phone: yup.string().required(`${'Phone number is required'}`),
        consent: yup.boolean().oneOf([true], 'You have to agree with Privacy Statement'),
    }).required();

    const form = useForm({
        mode: 'onBlur',
        resolver: yupResolver(contactFormSchema as any),
    });

    const { reset, handleSubmit, control } = form
    const onInvalid: SubmitErrorHandler<ContactFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }
    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} noValidate id={'contact-form'} style={{ width: '100%', scrollMarginTop: '300px', }}>
            <Stack direction={'column'} spacing={3} sx={{ width: '100%', minHeight: '650px' }} pt={1}>
                {!sent &&
                    <Stack spacing={2} width={'100%'}>
                        <FormTextField
                            disabled={sent}
                            name={"name"}
                            label={"Name:"}
                            fullWidth
                            required
                            form={form}
                        />
                        <Stack spacing={3} width={'100%'} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                            <FormTextField
                                disabled={sent}
                                name={"email"}
                                label={"Email Address:"}
                                fullWidth
                                required
                                form={form}
                            />

                            <FormTextField
                                disabled={sent}
                                name={"phone"}
                                type="number"
                                label={"Phone Number:"}
                                fullWidth
                                required
                                form={form}
                            />
                        </Stack>

                        <FormTextField
                            disabled={sent}
                            name={"message"}
                            label={"How can we help?"}
                            multiline
                            rows={8}
                            fullWidth
                            form={form}
                        />
                        <FormCheckbox
                            form={form}
                            control={control}
                            label={"I consent to receive further communication regarding this Contact Us request and confirm that I agree to the storing and processing of my personal details as described in the Privacy Statement."}
                            name={"consent"} />
                    </Stack>}

                <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                    {sent &&
                        <Stack direction={'row'} justifyContent={'center'} mb={2}>
                            <Typography textAlign={'left'} fontWeight={500} color={theme.palette.info.main} >
                                Your message was successfully sent!
                            </Typography>
                        </Stack>}
                    <Grid container spacing={{ xs: 0, sm: 2 }} sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
                        <Grid item lg={6} md={4} sm={6} xs={12}>
                            {!sent &&
                                <Button aria-label="submit contact form" sx={{ width: '100%' }} size="large" variant="contained" color="secondary" type={'submit'}>
                                    Send message
                                </Button>}
                            {sent &&
                                <Button aria-label="submit contact form again" sx={{ width: '100%' }} size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                                    Send again
                                </Button>}
                        </Grid>
                    </Grid>


                </Stack>
                {error && <ErrorBox error={error} />}
            </Stack>
        </form>
    )
}

export default ContactForm