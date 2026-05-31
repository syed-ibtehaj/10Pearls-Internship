# 10Pearls Internship – Assignment 6

Cypress UI Automation Testing Assignment completed as part of the 10Pearls QA Internship Program.

## Project Overview
This project automates the SauceDemo web application using Cypress Automation Framework. The assignment covers login validation, product navigation, custom commands, and Page Object Model (POM) implementation.

## Tasks Completed

### Task 1 – Cypress Project Setup
- Installed Node.js and Cypress
- Configured Cypress project structure
- Executed tests using Cypress Test Runner

### Task 2 – Login Failure Scenario
- Automated invalid login test
- Validated error message for incorrect credentials

### Task 3 – Login Success Flow
- Automated successful login
- Verified redirection to Inventory Page
- Validated homepage elements

### Task 4 – Product Navigation & Validation
- Opened product details page
- Verified product name
- Verified product price
- Validated navigation between pages

### Task 5 – Custom Commands
- Created reusable login command
- Reduced code duplication
- Improved test maintainability

### Task 6 – Page Object Model (POM)
Created separate page classes:
- LoginPage
- InventoryPage
- ProductPage

## Tools Used
- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- Git
- GitHub

## Project Structure

Assignment-6/
├── cypress/
│ ├── e2e/
│ │ └── bookstore.cy.js
│ ├── pages/
│ │ ├── LoginPage.js
│ │ ├── InventoryPage.js
│ │ └── ProductPage.js
│ └── support/
│ └── commands.js
├── screenshots/
├── cypress.config.js
├── package.json
└── README.md

## Test Scenarios Covered
1. Invalid Login Validation
2. Successful Login Validation
3. Inventory Page Validation
4. Product Detail Validation
5. Product Navigation Validation

## Author
Syed Ibtehaj Ahsan

## Internship Program
10Pearls QA Internship Program