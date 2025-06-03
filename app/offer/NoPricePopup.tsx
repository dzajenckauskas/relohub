
export default function NoPricePopup() {
    return (
        <section>
            <div className="nopricepopupcenterwrp" style={{ paddingLeft: 0 }}>
                <p>
                    Sit tight, our sales team are looking for the best options
                    and will be in contact within 24 hours.
                </p>
                <p>
                    If you are feeling very inpatient or your move is imminent,
                    please call us on{" "}
                    <strong>
                        <a href="tel:+442080642634">+44 2080 642634</a>
                    </strong>{" "}
                    or email{" "}
                    <strong>
                        {" "}
                        <a href="mailto:hello@relohub.co.uk">
                            hello@relohub.co.uk
                        </a>{" "}
                    </strong>
                </p>
            </div>
        </section>
    );
}
