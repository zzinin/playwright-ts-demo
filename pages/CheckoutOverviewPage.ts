import { Page, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(private page: Page) {}
  async verifyOrderDetails(productName: string, productPrice: string) {
    await this.page.evaluate(() => {
      document.querySelectorAll('[data-test="inventory-item-name"], [data-test="inventory-item-price"], [data-test="total-label"]').forEach(el => {
  (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
      });
    });
    await expect(this.page.locator('[data-test="inventory-item-name"]', { hasText: productName })).toBeVisible();
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator('[data-test="inventory-item-price"]', { hasText: productPrice })).toBeVisible();
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator('[data-test="total-label"]')).toBeVisible();
    await this.page.waitForTimeout(2000);
  }
  async finish() {
    await this.page.evaluate(() => {
      const el = document.querySelector('button[data-test="finish"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Finish' }).click();
    await this.page.waitForTimeout(2000);
  }
}
