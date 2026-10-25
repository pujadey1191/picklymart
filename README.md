# Picklymart — E-commerce Frontend

A responsive e-commerce storefront frontend inspired by Picklymart. Built with **HTML, CSS, and vanilla JavaScript**, with local product image assets and interactive UI elements.

> **Project status:** Frontend only. Forms and checkout currently display success notifications for UI demonstration; no data is sent to a server and no real order, account, or payment is created. A backend/API can be connected later.

## Features

- Storefront homepage with hero banner and product sections
- Featured products, best-selling products, daily deals, and category showcases
- Product search, category filtering, and sorting by price or name
- Category listing page and category-specific product views
- Shopping cart with quantity/count and total display
- Contact Us page and contact form
- Login and registration screens with basic client-side validation
- Wholesale and seller enquiry forms
- Checkout form interface
- Toast notifications for actions and form submissions
- Local product images stored in the `assets/` folder
- Responsive layout for different screen sizes

## Built With

- HTML5
- CSS3
- Vanilla JavaScript (no framework)
- Local PNG product images

## Getting Started

No package installation or build step is required.

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser.

### Recommended: Run with Live Server

1. Install the **Live Server** extension in VS Code, if needed.
2. Open `index.html`.
3. Right-click the file and select **Open with Live Server**.

## Project Structure

```text
picklymart-frontend/
├── index.html       # Main page and page/dialog markup
├── style.css        # Layout, styling, and responsive design
├── script.js        # Product data and interactive behavior
├── README.md        # Project documentation
└── assets/          # Local product and banner images
```

## Main Interactions

- Use the top navigation to open category, contact, wholesale, seller, login, and registration views.
- Search for products and filter or sort the product list.
- Add supported products to the cart and open the cart to view its current total.
- Submit forms to see client-side confirmation messages.

## Important Notes

- This repository is a **frontend project**, not a complete production e-commerce system.
- Form submission messages are client-side only. They do not send emails or save information.
- Login and registration do not authenticate users or create accounts yet.
- Checkout does not process payments or place real orders.
- Product names, prices, and some product imagery are sample content and should be reviewed before production use.
- Before deployment, connect the UI to a secure backend and database, implement authentication and order handling, and add appropriate validation and security controls.

## Future Improvements

- Connect product and category data to an API/database
- Add secure user authentication and account management
- Persist the shopping cart
- Implement real contact/enquiry submission
- Add inventory, order management, and payment integration
- Improve accessibility and test on more devices and browsers

## License

No license has been specified yet. Add a `LICENSE` file if you want to publish this project for reuse by others.
