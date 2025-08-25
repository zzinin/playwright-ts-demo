import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}
  async checkout() {
    await this.page.evaluate(() => {
      const el = document.querySelector('button[data-test="checkout"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Checkout' }).click();
    await this.page.waitForTimeout(2000);
  }
}
