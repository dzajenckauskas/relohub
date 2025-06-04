export const NewOrderMail = (data: any) => {
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
    email,
    phone,
    type,
    price
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
    <title>New Order Alert</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; color: #333;">
  <table width="600" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto; background-color: #ffffff; border-radius: 6px; overflow: hidden;">
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #f7f7f7;">
          <img 
            src="https://relohub.co.uk/relohub-logo.png"
            alt="Relohub"
            style="display: block; margin: 0 auto;" 
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <h2>New Order Received</h2>

          <strong> Hi Operations Team,</strong>
                <p>
                GOOD NEWS, CUSTOMER PAID £100.00 DEPOSIT VIA RELOHUB WEBSITE. 
                Please see the details below:
                </p>
          
          <p><strong>Customer:</strong> ${name || "N/A"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>

          <hr style="margin: 20px 0;" />

          <p><strong>Price selected:</strong> £${price?.toFixed(2)}</p>
          <p><strong>Travel method chosen:</strong> ${type}</p>
          <p><strong>Collection date:</strong> ${formattedDate}</p>
          <p><strong>Collection from:</strong> ${fromLocation}</p>
          <p><strong>Delivery to:</strong> ${toLocation}</p>

          <p><strong>Inventory:</strong></p>
          <ul style="padding-left: 20px;">
            ${Standard_box ? `<li>${Standard_box} x Large box (51x51x51cm @ 25kg)</li>` : ""}
            ${ownItemsHtml || "<li>No additional items specified</li>"}
          </ul>

          <hr style="margin: 20px 0;" />

          <p style="color: #007953; font-weight: bold;">
            This is an automated internal alert for the Relohub team. Please follow up with the client as needed.
          </p>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f7f7f7; padding: 10px; text-align: center; font-size: 12px; color: #999;">
          © 2025 Relohub – Internal Notification System
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
