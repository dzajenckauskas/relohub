"use client";

import {useState} from "react";
import ProhibitedItems from "./prohibitedItems";

export default function InclusionsExclusions() {
    const [prohibited, setprohibited] = useState(false);

    if (prohibited) {
        return (
            <ProhibitedItems
                off={() => {
                    setprohibited(false);
                }}
            />
        );
    } else {
        return (
            <div className="alotoftext alotoftextbuttons">
                <div>
                    <h3>Air Freight Service Quotation</h3>

                    <h4>DOOR TO DOOR</h4>

                    <p>
                        <strong>Included in our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Delivery of packing materials (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s
                        </li>
                        <li>
                            Collection from origin address (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s.
                        </li>
                        <li>Local handling</li>
                        <li>Air freight to destination</li>
                        <li>Terminal handling and security</li>
                        <li>Customs clearance</li>
                    </ul>

                    <p>
                        <em>
                            Please note transit times for this service are up to
                            approximately 10-14 weeks from the date of despatch
                        </em>
                    </p>

                    <p>
                        <strong>Excluded from our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Insurance VAT (Value Added Tax) (only if applicable)
                        </li>
                        <li>
                            Government charges, quarantine inspections or
                            customs inspections, duties & taxes charged at
                            destination
                        </li>
                        <li>Any storage charges</li>
                        <li>
                            Deliveries and collection above the ground floor –
                            please contact us for a quote on this additional
                            service (subject to availability)
                        </li>
                        <li>
                            Packing or unpacking – please contact us for a quote
                            on this additional service (subject to availability)
                        </li>
                    </ul>

                    <p>
                        <strong>
                            We would like to draw your attention to our T&Cs
                            clauses 3, 4, 9, 10, and 11, regarding limited
                            liability and our responsibilities.
                        </strong>
                    </p>

                    <p>
                        <button
                            onClick={() => {
                                setprohibited(true);
                            }}
                        >
                            Click here for prohibited and restricted items.
                        </button>
                    </p>

                    <p>
                        <em>
                            Please note fragile items (unless professionally
                            packed) are excluded from our contractual liability
                            and insurance policies.
                        </em>
                    </p>

                    <p>
                        <strong>Australia –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>New Zealand –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>South African Wharfage Tax –</strong> Cargo Dues
                        Fee
                    </p>

                    <p>
                        <em>
                            This quote is valid for 28-days, and the work must
                            be carried out or completed within 3 months
                        </em>
                    </p>
                </div>

                <div>
                    <h3>DOOR TO AIRPORT</h3>

                    <p>
                        <strong>Included in our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Delivery of packing materials (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s
                        </li>
                        <li>
                            Collection from origin address (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s.
                        </li>
                        <li>
                            Air freight to destination only (the airport of
                            arrival maybe some distance from your final
                            destination, please check with a member of our
                            Client Service Team before sending)
                        </li>
                    </ul>

                    <p>
                        <em>
                            Note; Transit times for this service is up to
                            approximately 7 – 10 days from date of despatch
                        </em>
                    </p>

                    <p>
                        <em>
                            This quote is valid for 28-days and the work must be
                            carried out or completed within 3 months
                        </em>
                    </p>

                    <p>
                        <strong>Excluded from our quote:</strong>
                    </p>
                    <ul>
                        <li>Insurance VAT (Value Added Tax)</li>
                        <li>
                            Airline handling, terminal fees (payable at
                            destination)
                        </li>
                        <li>Government charges, inspections, duties & taxes</li>
                        <li>Storage charges</li>
                        <li>Customs clearance</li>
                        <li>Delivery to destination</li>
                        <li>Packing or unpacking</li>
                    </ul>

                    <p>
                        We would like to draw your attention to our T&Cs clauses
                        3,4 9,10 and 11, regarding limited liability and our
                        responsibilities.
                    </p>
                    <p>
                        <button
                            onClick={() => {
                                setprohibited(true);
                            }}
                        >
                            Click here for prohibited and restricted items.
                        </button>
                    </p>
                </div>

                <p>
                    <strong>Please note:</strong>
                </p>
                <ul>
                    <li>
                        Fragile items (unless professionally packed) are
                        excluded from our contractual liability and insurance
                        policies.
                    </li>
                    <li>
                        Australia – Quarantine inspection fee and any required
                        fumigation fees
                    </li>
                    <li>
                        New Zealand – Quarantine inspection fee and any required
                        fumigation fees
                    </li>
                    <li>South African Wharfage Tax – Cargo Dues Fee</li>
                </ul>

                <p>
                    <em>
                        This quote is valid for 28-days and the work must be
                        carried out or completed within 3 months
                    </em>
                </p>

                <div>
                    <h3>Courier Service Quotation</h3>

                    <h4>DOOR TO DOOR</h4>

                    <p>
                        <strong>Included in our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Delivery of packing materials (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s
                        </li>
                        <li>
                            Collection from origin address (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s.
                        </li>
                        <li>Air or road transport to destination</li>
                        <li>Customs clearance</li>
                        <li>
                            Delivery to destination – ground floor/kerbside only
                        </li>
                    </ul>

                    <p>
                        <strong>Excluded from our quote:</strong>
                    </p>
                    <ul>
                        <li>Insurance VAT (Value Added Tax)</li>
                        <li>
                            Government charges, inspections, duties & taxes
                            charged at destination
                        </li>
                        <li>Storage charges</li>
                        <li>
                            Deliveries and collection above the ground floor –
                            please contact us for a quote on this additional
                            service (subject to availability)
                        </li>
                        <li>
                            Packing or unpacking – please contact us for a quote
                            on this additional service (subject to availability)
                        </li>
                    </ul>

                    <p>
                        <strong>
                            We would like to draw your attention to our T&Cs
                            clauses 3,4 9,10 and 11, regarding limited liability
                            and our responsibilities.
                        </strong>
                    </p>

                    <p>
                        <button
                            onClick={() => {
                                setprohibited(true);
                            }}
                        >
                            Click here for prohibited and restricted items.
                        </button>
                    </p>

                    <p>
                        <em>
                            Please note fragile items (unless professionally
                            packed) are excluded from our contractual liability
                            and insurance policies.
                        </em>
                    </p>

                    <p>
                        <strong>Australia –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>New Zealand –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>South African Wharfage Tax –</strong> Cargo Dues
                        Fee
                    </p>

                    <p>
                        <em>
                            This quote is valid for 28-days and the work must be
                            carried out or completed within 3 months
                        </em>
                    </p>
                </div>

                <div>
                    <h3>Sea Freight Service Quotation</h3>

                    <h4>DOOR TO DOOR</h4>

                    <p>
                        <strong>Included in our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Delivery of packing materials (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s
                        </li>
                        <li>
                            Collection from origin address (ground floor only)
                            between the hours of 0800 hrs and 1800 *selected
                            countries only – FAQ’s.
                        </li>
                        <li>Local handling</li>
                        <li>Sea freight to destination</li>
                        <li>Terminal handling and security</li>
                        <li>Customs clearance</li>
                    </ul>

                    <p>
                        <em>
                            Please note transit times for this service is up to
                            approximately 21 days from the date of despatch
                        </em>
                    </p>

                    <p>
                        <strong>Excluded from our quote:</strong>
                    </p>
                    <ul>
                        <li>
                            Insurance VAT (Value Added Tax) (only if applicable)
                        </li>
                        <li>
                            Government charges, quarantine inspections or
                            customs inspections, duties & taxes charged at
                            destination
                        </li>
                        <li>Any storage charges</li>
                        <li>
                            Deliveries and collection above the ground floor –
                            please contact us for a quote on this additional
                            service (subject to availability)
                        </li>
                        <li>
                            Packing or unpacking – please contact us for a quote
                            on this additional service (subject to availability)
                        </li>
                    </ul>

                    <p>
                        <strong>
                            We would like to draw your attention to our T&Cs
                            clauses 3, 4, 9, 10, and 11, regarding limited
                            liability and our responsibilities.
                        </strong>
                    </p>

                    <p>
                        <button
                            onClick={() => {
                                setprohibited(true);
                            }}
                        >
                            Click here for prohibited and restricted items.
                        </button>
                    </p>

                    <p>
                        <em>
                            Please note fragile items (unless professionally
                            packed) are excluded from our contractual liability
                            and insurance policies.
                        </em>
                    </p>

                    <p>
                        <strong>Australia –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>New Zealand –</strong> Quarantine inspection fee
                        and any required fumigation fees
                    </p>
                    <p>
                        <strong>South African Wharfage Tax –</strong> Cargo Dues
                        Fee
                    </p>

                    <p>
                        <em>
                            This quote is valid for 28-days, and the work must
                            be carried out or completed within 3 months
                        </em>
                    </p>
                </div>
            </div>
        );
    }
}
