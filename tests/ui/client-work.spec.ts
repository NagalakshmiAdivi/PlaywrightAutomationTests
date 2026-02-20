import { test, expect } from '@playwright/test';

test.describe('Client Work page navigation', () => {
  test('should navigate to Client Work page from Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    // Click the Services link in the header
    await page.getByRole('link', { name: /Services/i }).click();
    // Click the Explore Our Client Work link
    await page.locator('text=Explore Our Client Work').click();
    // Verify the Client Work text is visible on the page
    await expect(page.locator('text=Client Work')).toBeVisible();
  });
});
