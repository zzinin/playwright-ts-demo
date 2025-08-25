import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForTimeout(2000);
  }
  async login(username: string, password: string) {
    // Highlight Username field
    await this.page.evaluate(() => {
      const el = document.querySelector('input[placeholder="Username"]');
  if (el) (el as HTMLElement).style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.waitForTimeout(2000);
    // Highlight Password field
    await this.page.evaluate(() => {
      const el = document.querySelector('input[placeholder="Password"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.waitForTimeout(2000);
    // Highlight Login button
    await this.page.evaluate(() => {
      const el = document.querySelector('input[type="submit"]');
      if (el) el.style.cssText += 'font-weight:bold;color:green;border:2px solid green;background:#eaffea;';
    });
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForTimeout(2000);
  }
}
