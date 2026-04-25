import { test, expect } from '@playwright/test';
import ProductPage from '../page-objects/ProductPage.js';

test.describe('Cart Functionality Tests', () => {
  test('Add item to cart and verify', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigateToHome();
    await productPage.addItemToCart('Samsung galaxy s6');

    // Go to cart
    await page.click('#cartur');
    await page.waitForSelector('#tbodyid tr'); // ✅ wait for row to appear

    // Verify item in cart
    await expect(page.locator('td:has-text("Samsung galaxy s6")')).toBeVisible();
  });

  test('Remove item from cart', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.navigateToHome();
    await productPage.addItemToCart('Samsung galaxy s6');

    await page.click('#cartur');
    await page.waitForSelector('#tbodyid tr');

    // Remove item
    await page.click('a:has-text("Delete")');
    await page.waitForTimeout(2000);

    // Verify cart empty
    const itemsCount = await page.locator('#tbodyid tr').count();
    expect(itemsCount).toBe(0);
  });
});