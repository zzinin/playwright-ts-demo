import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}
  async addProductToCart(productName: string) {
    if (productName === 'Sauce Labs Bolt T-Shirt') {
      await this.page.evaluate(() => {
        const el = document.querySelector('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
      });
      await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
      await this.page.waitForTimeout(2000);
    } else {
      await this.page.evaluate(() => {
        const el = document.querySelector('button');
        if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
      });
      await this.page.getByText(productName, { exact: false }).locator('..').getByRole('button', { name: 'Add to cart' }).click();
      await this.page.waitForTimeout(2000);
    }
  }
  async goToCart() {
    await this.page.evaluate(() => {
      const el = document.querySelector('[data-test="shopping-cart-link"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.locator('[data-test="shopping-cart-link"]').click();
    await this.page.waitForTimeout(2000);
  }
  async openMenu() {
    await this.page.evaluate(() => {
      const el = document.querySelector('button[aria-label="Open Menu"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.waitForTimeout(2000);
  }
  async logout() {
    await this.page.evaluate(() => {
      const el = document.querySelector('a[href*="logout"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('link', { name: 'Logout' }).click();
    await this.page.waitForTimeout(2000);
  }
}
