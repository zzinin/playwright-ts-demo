import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) {}
  async verifyConfirmation() {
    await this.page.evaluate(() => {
      document.querySelectorAll('h2, .complete-header, .complete-text').forEach(el => {
  (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
      });
    });
    await expect(this.page.getByRole('heading', { name: /Thank you for your order!/i })).toBeVisible();
    await this.page.waitForTimeout(2000);
    await expect(this.page.getByText('Checkout: Complete!', { exact: false })).toBeVisible();
    await this.page.waitForTimeout(2000);
  }
  async backHome() {
    await this.page.evaluate(() => {
      const el = document.querySelector('button[data-test="back-to-products"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Back Home' }).click();
    await this.page.waitForTimeout(2000);
  }
}
