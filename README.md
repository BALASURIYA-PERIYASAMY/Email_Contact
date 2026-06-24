# 📬 EmailJS Contact Form Application

A modern, responsive, and secure **Contact Form** application built using **React 19**, **Vite**, and the **EmailJS Browser SDK**. This project enables client-side email dispatching directly from the web browser to your email inbox, eliminating the need for a dedicated backend server.

---

## 🚀 Key Features

- **📨 Direct Client-Side Emailing**: Utilizes the `@emailjs/browser` SDK to transmit contact messages directly to configured mail services.
- **🔒 Secure Form References**: Utilizes React's `useRef` hook for safe form-element references and event handling.
- **🎨 Sleek Modern Styling**:
  - Pure vanilla CSS layout with modern input styling.
  - Interactive border glow and scale transitions on inputs and textareas on focus.
  - Interactive submit button with subtle lift animations on hover and depress feedback on click.
- **📱 Fully Responsive Design**: Designed with responsive padding and max-widths to render perfectly across desktops, tablets, and mobile displays.
- **🔔 Interactive Feedback**: Displays a success alert notification once the email has been sent successfully.

---

## 🛠️ Tech Stack & SDKs

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 8](https://vite.dev/)
- **Email Delivery Service**: [EmailJS Browser SDK](https://www.emailjs.com/) (`@emailjs/browser`)
- **Styling**: Vanilla CSS (Responsive cards, shadow overlays, and color transitions)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Structure

This directory structure highlights the key files in the current contact form setup:

```text
Deployment/
├── public/                  # Public assets
├── src/
│   ├── assets/              # Icons and image resources
│   ├── App.css              # Custom stylesheet (Form, inputs, labels, and responsiveness)
│   ├── App.jsx              # Main React contact form orchestrator with EmailJS handler
│   └── main.jsx             # React DOM application mount point
├── index.html               # Application HTML entry document
├── package.json             # Project dependencies, build, and run commands
└── README.md                # Project documentation (this file)
```

---

## ⚙️ Setup & Local Run Instructions

Follow these steps to configure and run the contact form application locally:

### Prerequisites
Ensure [Node.js](https://nodejs.org/) is installed (LTS version 18+ is recommended).

### 1. Install Dependencies
Run the command below to install all project dependencies:
```bash
npm install
```

### 2. Configure EmailJS Credentials
Open [src/App.jsx](file:///d:/Excersies/Besant/React_Projects/Deployment/src/App.jsx) and replace the placeholder credentials in `emailjs.sendForm` with your specific credentials:
```javascript
emailjs
  .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    publicKey: 'YOUR_PUBLIC_KEY',
  })
```

#### Where to retrieve these credentials:
1. Sign up/Log in to the [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. **Service ID**: Add a new Email Service (e.g. Gmail, Outlook) and copy the generated Service ID.
3. **Template ID**: Go to **Email Templates**, create a custom template for your incoming emails, and copy the Template ID. Make sure the input names in the template match the names in [src/App.jsx](file:///d:/Excersies/Besant/React_Projects/Deployment/src/App.jsx):
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. **Public Key**: Navigate to the **Account** tab, select **API Keys**, and copy the Public Key.

### 3. Start Development Server
Run the local Vite server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To bundle and compress code for distribution:
```bash
npm run build
```
Production outputs will be located in the `/dist` directory.

### 5. Lint the Code
Inspect files for formatting and syntax warnings:
```bash
npm run lint
```

---

## 🎨 Theme & Stylesheet Customizations

- The layout resides within [src/App.css](file:///d:/Excersies/Besant/React_Projects/Deployment/src/App.css).
- Standard inputs and textareas use a custom transit delay on outline focus (`#4f46e5`).
- The Submit button uses styling variables to scale up/down depending on mouse actions.
