class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }
  typeUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }
  typePassword(password) {
    cy.get('[data-test="password"]').type(password);
  }
  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}
export default new LoginPage();