class InventoryPage {
  getInventoryTitle() {
    return cy.get('.title');
  }
  getShoppingCart() {
    return cy.get('.shopping_cart_link');
  }
  getProductList() {
    return cy.get('.inventory_list');
  }
  getFirstProductName() {
    return cy.get('.inventory_item_name').first();
  }
  clickFirstProduct() {
    cy.get('.inventory_item_name').first().click();
  }
}
export default new InventoryPage();