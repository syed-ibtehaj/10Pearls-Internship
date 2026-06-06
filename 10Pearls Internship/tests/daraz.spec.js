// tests/daraz.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Daraz Complete Automation Flow - Assignment 7', async ({ page }) => {
  const home = new HomePage(page);

  // Task 2: Navigate to Daraz.pk
  console.log("-> Task 2: Navigating to Daraz.pk...");
  await home.openDaraz();

  // Task 3: Search for "products"
  console.log("-> Task 3: Searching for 'apple'...");
  await home.search('apple');

  // Task 4: Apply brand filter
  console.log("-> Task 4: Applying Brand Filter...");
  try {
    await home.applyBrandFilter();
    console.log("   Brand Filter Applied Successfully.");
  } catch (e) {
    console.log("   Brand filter skipped or fallback triggered.");
  }

  // Task 5: Apply price filter (50000–500000)
  console.log("-> Task 5: Applying Price Filter (50000 - 500000)...");
  try {
    await home.applyPriceFilter('50000', '500000');
    console.log("   Price Filter Applied Successfully.");
  } catch (e) {
    console.log("   Price filter skipped or fallback triggered.");
  }

  // Task 6: Count products in results and validate > 0
  console.log("-> Task 6: Counting products in results...");
  await page.waitForTimeout(3800); // Wait for filtered grid layout to align
  const productsCount = await home.getProductCount();
  console.log(`   Products found matching requirements: ${productsCount}`);

  // Assertion: Test will pass if grid has items
  expect(productsCount).toBeGreaterThan(0);

  // Task 7: Open product details
  if (productsCount > 0) {
    console.log("-> Task 7: Opening first product details...");
    await home.openFirstProduct();

    // Task 8: Verify if free shipping is available
    console.log("-> Task 8: Verifying Free Shipping availability...");
    await page.waitForTimeout(3600); 
    const freeShippingCount = await home.getFreeShippingCount();

    if (freeShippingCount > 0) {
      console.log('   RESULT: Free Shipping AVAILABLE for this product!');
    } else {
      console.log('   RESULT: Free Shipping NOT visible for this product.');
    }
  }
});