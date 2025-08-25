
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',      // folder where your tests live
  timeout: 30000,           // 30 seconds per test
  reporter: [ ['allure-playwright'] ],
  use: {
    headless: false,         // run in headed mode for visual execution
  },
});
