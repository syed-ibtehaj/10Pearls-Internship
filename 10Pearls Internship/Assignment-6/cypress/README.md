# 10Pearls Internship - Assignment 6: Cypress UI Automation

This repository contains the complete UI Automation Suite for an Online Book Store application (SauceDemo) using **Cypress** and the **Page Object Model (POM)** design pattern.

## 🚀 Features & Task Coverage

- **Task 2 (Login Failure Validation):** Validates error handling when logging in with locked-out user credentials.
- **Task 3 (Login Success Flow):** Asserts successful login redirection and checks key homepage dashboard components.
- **Task 4 (Product Navigation):** Navigates across product listings, ensuring items dynamically load with valid names and visible prices.
- **Task 5 (Custom Commands):** Implements a global reusable `cy.loginToApp()` utility in `commands.js` to bypass repetitive authentication boilerplates.
- **Task 6 (Page Object Model - POM):** Modularizes UI elements into separate layout classes (`LoginPage.js`, `InventoryPage.js`, `ProductPage.js`) for clean, scalable, and maintainable scripting.

---

## 📂 Project Structure

```text
Assignment-6/
├── cypress/
│   ├── e2e/
│   │   └── bookstore.cy.js       # Main Test Execution Suite (Tasks 2, 3, 4)
│   ├── pages/
│   │   ├── LoginPage.js         # POM Class for Authentication Layout
│   │   ├── InventoryPage.js     # POM Class for Products Dashboard Layout
│   │   └── ProductPage.js       # POM Class for Product Details Layout
│   └── support/
│       ├── commands.js          # Custom Reusable Command Shortcut (Task 5)
│       └── e2e.js
├── cypress.config.js            # Cypress Base Environment Configuration
├── package.json                 # Project Dependencies & Run Scripts
└── README.md                    # Setup & Execution Documentation


