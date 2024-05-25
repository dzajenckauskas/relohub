import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HeroInputs from "../main_page/heroInputs";
import Button from "@mui/material/Button";
import "react-calendar/dist/Calendar.css";
import "/STYLES/elements.css";
import "/STYLES/globals.css";
import "/STYLES/medias.css";

export const InstantQuoteComponent = () => {
    const router = useRouter();
    const [enableButton, setEnableButton] = useState(false);
    return (
        <Stack sx={{
            minHeight: 330
        }}>
            <h2 className="instantquotewrp">
                <span>{"Get an "}</span>
                <span style={{ fontWeight: 800 }}>
                    <b>Instant Quote</b>
                </span>
                <span>{" now"}</span>
            </h2>
            <HeroInputs
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