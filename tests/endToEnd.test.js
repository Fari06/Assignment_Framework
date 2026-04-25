import { test, expect } from '@playwright/test';
import ProductPage from '../page-objects/ProductPage.js';
import CartPage from '../page-objects/CartPage.js';

test('Complete purchase flow', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cart = new CartPage(page);

  await productPage.navigateToHome();
  await productPage.addItemToCart('Sony vaio i5');

  await page.click('#cartur');
  await page.waitForSelector('#tbodyid tr');

  // ✅ Clear cart
  await cart.removeAllItems();

  // ✅ Verify cart empty by row count
  const itemsCount = await page.locator('#tbodyid tr').count();
  expect(itemsCount).toBe(0);

  // Place order
  await cart.placeOrder(
    'Farheen',
    'India',
    'Delhi',
    '1234567890123456',
    '12',
    '2026'
  );

  // ✅ Confirmation
  const confirmation = await page.locator('.sweet-alert').textContent();
  expect(confirmation).toContain('Thank you for your purchase!');
});