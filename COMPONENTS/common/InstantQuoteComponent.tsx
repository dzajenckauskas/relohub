import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HeroInputs from "../main_page/heroInputs";
import Button from "@mui/material/Button";
import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";

type Props = {
    togglePopUp?: () => void;
    title?: React.ReactNode
}

export const InstantQuoteComponent = ({ togglePopUp, title }: Props) => {
    const router = useRouter();
    const [enableButton, setEnableButton] = useState(false);
    const [state, setstate] = useState({
        from_city: "",
        from_country: "",
        to_city: "",
        to_country: "",
        from_postCode: "",
        to_postCode: "",
    });
    return (
        <Stack sx={{
            minHeight: { xs: 0, sm: 330 }
        }}>
            <Stack
                direction={'row'}
                justifyContent={{ xs: togglePopUp ? 'space-between' : 'center', md: 'flex-start' }}
                alignItems="center"
            >
                {title ?? (
                    <h2 className="instantquotewrp">
                        <span>{"Get an "}</span>
                        <span style={{ fontWeight: 800 }}>
                            <b>Instant Quote</b>
                        </span>
                        <span>{" now"}</span>
                    </h2>
                )}
                {togglePopUp && (
                    <button
                        className="instantQuoteCloseButton"
                        onClick={() => {
                            togglePopUp();
                        }}
                    >
                        &#10006;
                    </button>
                )}
            </Stack>

            <HeroInputs isOffer={false}
                state={state}
                setstate={setstate}
                enableButton={(st) => {
                    setEnableButton(st);
                }} edit={undefined} newstate={undefined} />
            <Button variant="contained" color="secondary"
                disabled={!enableButton}
                className="herobuttongetestimate"
                sx={{ fontSize: 14 }}
                onClick={() => {
                    router.push(
                        `/offer?data=${encodeURIComponent(
                            JSON.stringify(enableButton),
                        )}`,
                    );
                }}>
                GET ESTIMATE
            </Button>
        </Stack>
    )
}