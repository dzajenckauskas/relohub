export const NewOrderClientMail = (data: any) => {
    const {
        name,
        from_city,
        from_country,
        from_postCode,
        to_city,
        to_country,
        to_postCode,
        Collection_Date,
        Standard_box,
        Own_items = [],
    } = data;

    const formattedDate = new Date(Collection_Date).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const fromLocation = [from_city, from_country, from_postCode].filter(Boolean).join(", ");
    const toLocation = [to_city, to_country, to_postCode].filter(Boolean).join(", ");

    const ownItemsHtml = Own_items.map(
        (item) =>
            `<li>${item.quantity} x ${item.name} (${item.width}x${item.height}x${item.depth}cm @ ${item.weight}kg)</li>`
    ).join("");

    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Order Confirmation</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 6px; overflow: hidden;">
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #f1f1f1;">
          <img 
          src="https://relohub.co.uk/relohub-logo.svg"
          alt="Relohub"
          width="150" />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2>Hi, ${name || "Customer"}!</h2>
          <p>Thank you for your deposit payment – we’ve received it and it will be deducted from your final invoice.</p>
          <p>Just to recap the details you’ve provided:</p>

          <p><strong>Collection date:</strong> ${formattedDate}</p>
          <p><strong>Collection from:</strong> ${fromLocation}</p>
          <p><strong>Delivery to:</strong> ${toLocation}</p>

          <p><strong>Inventory:</strong></p>
          <ul style="padding-left: 20px;">
            ${Standard_box ? `<li>${Standard_box} x Large box (51x51x51cm @ 25kg)</li>` : ""}
            ${ownItemsHtml}
          </ul>

          <p style="color: #007953; font-weight: bold;">
            We’ll be in touch shortly to let you know which documents we need to proceed with your relocation.
          </p>

          <p>If you have any questions in the meantime, please send us an email on <a href="mailto:hello@relohub.co.uk">hello@relohub.co.uk</a>
          or contact us by phone <a href="tel:+442080642634" style="color:#007bff;">+4420 8064 2634</a>.</p>

          <p>Kind regards,<br />Team Relohub</p>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #999;">
          © 2025 All rights reserved.
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
