export function getInTouchHTML(json) {
    let email = `<html lang="en">
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
                .customerlist{
                    list-style-type: none;
                }
                .message-text {
                    white-space: pre-wrap;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">
                        <img
                            src="https://Relohub.co.uk/_next/image?url=%2Frelohub-logo.svg"
                            alt="Company Logo"
                        />
                    </div>
                </div>
                <div class="content">
                    <strong> Hi Sales!</strong>
                    <p>
                        A customer has just contacted us through our website.
                    </p>
    
                    <ul class='customerlist' >
                        <li><strong>Name:</strong> ${json.data.name}</li>
                        <li><strong>Phone number:</strong> ${json.data.phone}</li>
                        <li><strong>Email:</strong> ${json.data.email}</li>
                        <a href='mailto:${json.data.email}'></a
                    >

           
                    </ul>
    
                    <p><strong>Message:</strong></p>
                    <p class="message-text">
                    ${json.data.message}
                  </p>

                </div>
            </div>
        </body>
    </html>
    `;

    return email;
}
