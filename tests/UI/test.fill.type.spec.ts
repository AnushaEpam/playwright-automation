import { test, expect } from '@playwright/test';

test.describe('Input Field Interactions', () => {
  test('Fill and Type in different input fields', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');

    await page.fill('#input-number', '12345');

    await page.type('#input-text', 'Hello, Playwright!', { delay: 50 });

    await page.fill('#input-password', 'securepassword');

    await page.fill('#input-date', '2023-10-01');
    await expect(page.locator('#input-number')).toHaveValue('12345');
    await expect(page.locator('#input-text')).toHaveValue('Hello, Playwright!');
    await expect(page.locator('#input-password')).toHaveValue('securepassword');
    await expect(page.locator('#input-date')).toHaveValue('2023-10-01');
  });
});
