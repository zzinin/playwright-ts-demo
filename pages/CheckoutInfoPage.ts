import { Page } from '@playwright/test';

export class CheckoutInfoPage {
  constructor(private page: Page) {}
  async enterInfo(firstName: string, lastName: string, zip: string) {
    // Highlight First Name field
    await this.page.evaluate(() => {
      const el = document.querySelector('input[placeholder="First Name"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.waitForTimeout(2000);
    // Highlight Last Name field
    await this.page.evaluate(() => {
      const el = document.querySelector('input[placeholder="Last Name"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.waitForTimeout(2000);
    // Highlight Zip/Postal Code field
    await this.page.evaluate(() => {
      const el = document.querySelector('input[placeholder="Zip/Postal Code"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
    await this.page.waitForTimeout(2000);
  }
  async continue() {
    await this.page.evaluate(() => {
      const el = document.querySelector('input[data-test="continue"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(2000);
  }
}
