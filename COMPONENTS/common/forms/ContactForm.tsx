import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { FormTextField } from "./FormTextField";
import ErrorBox from "../ErrorBox";
import { theme } from "../Theme";

type ContactFormInputType = {
    name: string;
    phone: string;
    email: string;
    message: string;
    url: string;
    contents: string;
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
                url: window.location.href,
                contents: JSON.stringify(data),
            }
        }
        console.log(inputData, "inputData");

        // async function sendMessage(params) {
        //     let res = await fetch("/api/email/getintouch", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(values),
        //     });

        //     if (res.ok) {
        //         setSent(true);
        //     }
        // }
        // let url = `${process.env.NEXT_PUBLIC_API_URL}/api/contact-forms`
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
        email: yup.string().nullable().email(`${'Name is required'}`).required(`${'Incorrect email format!'}`),
        name: yup.string().required(`${'Name is required'}`),
        message: yup.string().required(`${'Message is required'}`),
        phone: yup.string().required(`${'Phone is required'}`),
    }).required();

    const form = useForm({
        resolver: yupResolver(contactFormSchema as any),
    });

    const { reset, handleSubmit } = form
    const onInvalid: SubmitErrorHandler<ContactFormInputType> = (data) => {
        console.log('invalid', data, form.getValues())
    }
    return (
        <form onSubmit={handleSubmit(submit, onInvalid)} noValidate id={'contact-form'} style={{ width: '100%', scrollMarginTop: '300px', }}>
            <Stack direction={'column'} spacing={3} sx={{ width: '100%' }} pt={1}>
                {!sent &&
                    <Stack spacing={3}>
                        <FormTextField
                            disabled={sent}
                            name={"name"}
                            lable={"Name"}
                            fullWidth
                            required
                            form={form}
                        />
                        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={3} width={'100%'} alignItems={'flex-end'}>

                            <FormTextField
                                disabled={sent}
                                name={"email"}
                                lable={"Email"}
                                fullWidth
                                required
                                form={form}
                            />

                            <FormTextField
                                disabled={sent}
                                name={"phone"}
                                lable={"Phone"}
                                fullWidth
                                required
                                form={form}
                            />
                        </Stack>

                        <FormTextField
                            disabled={sent}
                            name={"message"}
                            lable={"Žinutė"}
                            multiline
                            rows={8}
                            fullWidth
                            form={form}
                        />
                    </Stack>}

                <Stack width={'100%'} direction={'column'} justifyContent={'center'} >
                    {sent &&
                        <Stack direction={'row'} justifyContent={'center'} mb={2}>
                            <Typography textAlign={'left'} fontWeight={500} color={theme.palette.primary.dark} >
                                Your message was successfully sent!
                            </Typography>
                        </Stack>}
                    {!sent &&
                        <Button size="large" variant="contained" color="secondary" type={'submit'}>
                            Send message
                        </Button>}
                    {sent &&
                        <Button size="large" variant="outlined" color="secondary" onClick={() => { setSent(false) }}>
                            Send again
                            Send again
                        </Button>}
                </Stack>
                {error && <ErrorBox error={error} />}
            </Stack>
        </form>
    )
}

export default ContactForm