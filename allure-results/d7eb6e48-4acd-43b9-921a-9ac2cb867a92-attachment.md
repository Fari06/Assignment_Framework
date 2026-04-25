# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.test.js >> Cart Functionality Tests >> Add item to cart and verify
- Location: tests\cart.test.js:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('td:has-text("Samsung galaxy s6")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('td:has-text("Samsung galaxy s6")')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e17]:
          - link "Log in" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=e19]:
          - link "Sign up" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup
    - generic [ref=e33]:
      - heading "Total" [level=2] [ref=e34]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [ref=e35]
  - generic [ref=e37]:
    - generic [ref=e40]:
      - heading "About Us" [level=4] [ref=e41]
      - paragraph [ref=e42]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e45]:
      - heading "Get in Touch" [level=4] [ref=e46]
      - paragraph [ref=e47]: "Address: 2390 El Camino Real"
      - paragraph [ref=e48]: "Phone: +440 123456"
      - paragraph [ref=e49]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e53]:
      - img [ref=e54]
      - text: PRODUCT STORE
  - contentinfo [ref=e55]:
    - paragraph [ref=e56]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import ProductPage from '../page-objects/ProductPage.js';
  3  | 
  4  | test.describe('Cart Functionality Tests', () => {
  5  | 
  6  |   test('Add item to cart and verify', async ({ page }) => {
  7  |     const productPage = new ProductPage(page);
  8  | 
  9  |     await productPage.navigateToHome();
  10 |     await productPage.addItemToCart('Samsung galaxy s6');
  11 | 
  12 |     await page.click('#cartur');
> 13 |     await expect(page.locator('td:has-text("Samsung galaxy s6")')).toBeVisible();
     |                                                                    ^ Error: expect(locator).toBeVisible() failed
  14 |   });
  15 | 
  16 |   test('Remove item from cart', async ({ page }) => {
  17 |     const productPage = new ProductPage(page);
  18 | 
  19 |     await productPage.navigateToHome();
  20 |     await productPage.addItemToCart('Nokia lumia 1520');
  21 | 
  22 |     await page.click('#cartur');
  23 |     await page.click('text=Delete');
  24 |     await expect(page.locator('td:has-text("Nokia lumia 1520")')).toHaveCount(0);
  25 |   });
  26 | 
  27 |   test('Place order from cart', async ({ page }) => {
  28 |     const productPage = new ProductPage(page);
  29 | 
  30 |     await productPage.navigateToHome();
  31 |     await productPage.addItemToCart('Sony vaio i5');
  32 | 
  33 |     await page.click('#cartur');
  34 |     await page.click('button:has-text("Place Order")');
  35 | 
  36 |     await page.fill('#name', 'Test User');
  37 |     await page.fill('#country', 'India');
  38 |     await page.fill('#city', 'Delhi');
  39 |     await page.fill('#card', '1234567890123456');
  40 |     await page.fill('#month', '04');
  41 |     await page.fill('#year', '2026');
  42 |     await page.click('button:has-text("Purchase")');
  43 | 
  44 |     await expect(page.locator('.sweet-alert')).toBeVisible();
  45 |     await page.click('button:has-text("OK")');
  46 |   });
  47 | 
  48 | });
```