// pages/HomePage.js
class HomePage {
    constructor(page) {
        this.page = page;
        
        // Input unique selectors
        this.searchBar = page.locator('input[type="search"], #q').first();
        this.brandCheckbox = page.locator('input[type="checkbox"]').first();
        this.minPriceInput = page.locator('input[placeholder*="Min"]').first();
        this.maxPriceInput = page.locator('input[placeholder*="Max"]').first();
        this.productLinks = page.locator('a[href*="/products/"]');
        this.freeShippingLocator = page.locator('text=Free Shipping');
    }

    async openDaraz() {
        await this.page.goto('https://www.daraz.pk/');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async search(keyword) {
        // Search bar ke visible hone ka wait karega
        await this.searchBar.waitFor({ state: 'visible', timeout: 7000 });
        await this.searchBar.click();
        await this.searchBar.fill(keyword);
        
        // MAGIC FIX: Button click ke bajaye direct 'Enter' press karenge
        await this.searchBar.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async applyBrandFilter() {
        await this.brandCheckbox.waitFor({ state: 'visible', timeout: 5000 });
        await this.brandCheckbox.scrollIntoViewIfNeeded();
        await this.brandCheckbox.click();
        await this.page.waitForTimeout(2500); 
    }

    async applyPriceFilter(min, max) {
        await this.minPriceInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.minPriceInput.scrollIntoViewIfNeeded();
        await this.minPriceInput.fill(min);
        await this.maxPriceInput.fill(max);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2500); 
    }

    async getProductCount() {
        return await this.productLinks.count();
    }

    async openFirstProduct() {
        await this.productLinks.first().waitFor({ state: 'visible', timeout: 5000 });
        await this.productLinks.first().click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async getFreeShippingCount() {
        return await this.freeShippingLocator.count();
    }
}

module.exports = { HomePage };