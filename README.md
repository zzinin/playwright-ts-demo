---

# 🚀 Playwright + TypeScript Automation Framework

This repository contains an **end-to-end test automation framework** built with [Playwright](https://playwright.dev/) and **TypeScript**.
It follows a **Page Object Model (POM)** structure and supports **UI & API testing** with reusable test contexts and data-driven design.

---

## 📂 Project Structure

```
.
├── apitest/            # API test suites
├── pages/              # Page Object Models (POMs)
├── testData/           # Test data (JSON, TS, or fixtures)
├── testcontexts/       # Context setup (auth, fixtures, test users, etc.)
├── tests/              # Main UI test specs
├── .gitignore          # Ignored files (node_modules, reports, etc.)
├── package.json        # Project dependencies & scripts
├── package-lock.json   # Dependency lock file
├── playwright.config.ts# Playwright configuration
├── tsconfig.json       # TypeScript configuration
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run UI tests only

```bash
npx playwright test tests/
```

### Run API tests only

```bash
npx playwright test apitest/
```

### Run with headed mode (see browser UI)

```bash
npx playwright test --headed
```

### Run in debug mode

```bash
npx playwright test --debug
```

---

## 🧩 Project Modules

* **`pages/`** → Implements Page Object Models to encapsulate locators & actions.
* **`testData/`** → Centralized test data (e.g., JSON, fixtures, or mock payloads).
* **`testcontexts/`** → Manages test setup (auth sessions, roles, API mocks).
* **`apitest/`** → Contains API-only test cases.
* **`tests/`** → Main UI test cases written in Playwright.

---

## 📊 Reports

After a test run, generate a report:

```bash
npx playwright show-report
```

By default, Playwright generates **HTML reports** under `playwright-report/`.

---

## 🛠️ VS Code & GitHub Copilot

This project is optimized for development in **Visual Studio Code** with:

* **GitHub Copilot** for AI-powered code completions.
* **Playwright Test for VS Code** extension for running/debugging tests directly from the editor.

---

## 🔑 Useful NPM Scripts

Add these to `package.json` for convenience:

```json
"scripts": {
  "test": "npx playwright test",
  "test:ui": "npx playwright test tests/",
  "test:api": "npx playwright test apitest/",
  "report": "npx playwright show-report",
  "codegen": "npx playwright codegen"
}
```

---

## 📝 Example: Page Object + Test

### `pages/LoginPage.ts`

```ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private emailField = this.page.locator('#email');
  private passwordField = this.page.locator('#password');
  private submitButton = this.page.locator('button[type="submit"]');
  private welcomeBanner = this.page.locator('#welcome');

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  async getWelcomeMessage() {
    return this.welcomeBanner.textContent();
  }
}
```

---

### `testData/users.json`

```json
{
  "validUser": {
    "email": "user@example.com",
    "password": "password123"
  }
}
```

---

### `testcontexts/auth.fixture.ts`

```ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../testData/users.json';

export const test = base.extend<{
  loginPage: LoginPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
```

---

### `tests/login.spec.ts`

```ts
import { test, expect } from '../testcontexts/auth.fixture';

test('User can log in successfully', async ({ loginPage }) => {
  const welcome = await loginPage.getWelcomeMessage();
  expect(welcome).toContain('Welcome');
});
```

---

## ✅ Best Practices

* Keep **Page Objects** clean and reusable.
* Use **fixtures** in `testcontexts/` for setup (e.g., login sessions).
* Store **sensitive data** in environment variables, not in `testData/`.
* Tag tests with `@smoke`, `@regression`, etc. for selective execution.

---

## 📌 References

* [Playwright Docs](https://playwright.dev/docs/intro)
* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [Playwright Test Fixtures](https://playwright.dev/docs/test-fixtures)

---

