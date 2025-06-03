export function newOrder(json) {
    const {
        Standard_box,
        Large_box,
        Suitcase_large,
        Suitcase_small,
        from_city,
        from_country,
        to_city,
        to_country,
        email,
        first_last_name,
        phone,
        Own_items,
    } = json;

    function own_items(Own_items) {
        return Own_items.map((el, i) => {
            return `<li>${el.quantity} x ${el.width}x${el.height}x${el.depth}cm @ ${el.weight}kg</li>`;
        }).join("");
    }

    let ul = `<ul>
    ${Standard_box ? `<li>${Standard_box} x Standard boxes</li>` : ""}
    ${Large_box ? `<li>${Large_box} x Large boxes</li>` : ""}
    ${Suitcase_large ? `<li>${Suitcase_large} x Large Suitcases</li>` : ""}
    ${Suitcase_small ? `<li>${Suitcase_small} x Small Suitcases</li>` : ""}
    ${Own_items && Own_items.length !== 0 ? own_items(Own_items) : ""}
</ul>`;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    let html = `<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deposit Payment Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
            }
            .header {
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 40px 24px;
                background-color: #fff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img
                        src="https://relohub.co.uk/relohub-logo.svg"
                        alt="Relohub"
                    />
                </div>
            </div>
            <div class="content">
                <strong> Hi Operations Team,</strong>
                <p>
                    A customer has just made a deposit payment of £100.00
                    through our website. Please see the details below:
                </p>

                <ul>
                    <li><strong>Name: </strong>${first_last_name}</li>
                    <li><strong>Phone number: </strong>${phone}</li>
                    <li><strong>Email: </strong>${email.toLowerCase()}</li>
                    <li><strong>From: </strong>${capitalizeFirstLetter(from_city) +
        ", " +
        capitalizeFirstLetter(from_country)
        }</li>
                    <li><strong>To: </strong>${capitalizeFirstLetter(to_city) +
        ", " +
        capitalizeFirstLetter(to_country)
        }</li>
                </ul>

                <p><strong>Inventory:</strong></p>
              ${ul}

                <p>
                    <strong>Lead Status:</strong>
                    <a href="https://admin.Relohub.co.uk/login">
                        Open lead on the system</a
                    >
                </p>
            </div>
        </div>
    </body>
</html>
    `;

    return html;
}
