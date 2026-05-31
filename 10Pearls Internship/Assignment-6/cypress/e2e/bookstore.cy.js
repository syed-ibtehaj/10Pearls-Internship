import '../support/commands';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import ProductPage from '../pages/ProductPage';

describe('Online Book Store - Complete UI Automation Suite', () => {

  // TASK 2: Login failure scenario
  it('Task 2 - Should display error message on login failure', () => {
    LoginPage.visit();
    LoginPage.typeUsername('locked_out_user'); 
    LoginPage.typePassword('secret_sauce');
    LoginPage.clickLogin();

    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.');
  });

  // TASK 3: Login success flow and homepage validation
  it('Task 3 - Should login successfully and validate key UI components', () => {
    LoginPage.visit();
    LoginPage.typeUsername('standard_user'); 
    LoginPage.typePassword('secret_sauce');
    LoginPage.clickLogin();

    // Redirection validation
    cy.url().should('include', '/inventory.html');

    // Key UI Components visibility check
    InventoryPage.getInventoryTitle().should('be.visible').and('have.text', 'Products');
    InventoryPage.getShoppingCart().should('be.visible');
    InventoryPage.getProductList().should('be.visible');
  });

  // TASK 4: Product navigation and validation
  it('Task 4 - Should navigate across product listings and validate product pages', () => {
    // TASK 5: Custom Command Used Here
    cy.loginToApp('standard_user', 'secret_sauce');

    // Verify product listings load correctly before navigation
    InventoryPage.getFirstProductName().should('be.visible').and('not.be.empty');

    // Navigate to product page
    InventoryPage.clickFirstProduct();

    // Verify product page components load correctly
    cy.url().should('include', '/inventory-item.html');
    ProductPage.getProductName().should('be.visible').and('not.be.empty');
    ProductPage.getProductPrice().should('be.visible').and('not.be.empty');
  });

});