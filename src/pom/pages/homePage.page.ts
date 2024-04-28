import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../../helperbase/HelperBase";

export class HomePage extends HelperBase {
    private productSortLocator = '.product_sort_container';
    private firstItemLocator = '[data-test="inventory-item-name"]';
    private addToCartButtonLocator = '#add-to-cart-sauce-labs-fleece-jacket';
  
  
    constructor(page: Page) {
      super(page);
    }
  
    async sortDropdown() {
        const dropdown = this.page.locator(this.productSortLocator);
        await dropdown.click(); 
        await dropdown.selectOption('hilo');
    }
    async getFirstItemName() {
        const itemName = this.page.locator(this.firstItemLocator);
        await itemName.waitFor({ state: 'visible' });
        const itemText = await itemName.textContent();
        console.log(itemText)
        if (!itemText) {
            throw new Error("Failed to retrieve text or element is not visible");
        }
        expect(itemText).toBe("Sauce Labs Fleece Jacket"); 
    }
  
    async addItemToCart() {
        await this.page.locator(this.addToCartButtonLocator).click(); 
    }
  }
    
  