import { test, expect } from '@playwright/test';

test.describe('User Profile Navigation', () => {
  test('Hover over avatar and navigate to user profile', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/hovers');

    const userAvatar = page.locator('.figure').first();

    await userAvatar.hover();

    await expect(userAvatar.locator('text=name: user1')).toBeVisible();

    await userAvatar.locator('text=View profile').click();

    await expect(page).toHaveURL('https://practice.expandtesting.com/users/1');

    await expect(page.locator('.breadcrumb-item >> text=Home')).toBeVisible();
    await expect(page.locator('h2 >> text=Welcome user1')).toBeVisible();
  });
});
