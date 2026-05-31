class ProductPage {
  getProductName() {
    return cy.get('.inventory_details_name');
  }
  getProductPrice() {
    return cy.get('.inventory_details_price');
  }
}
export default new ProductPage();