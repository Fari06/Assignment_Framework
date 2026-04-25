# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEnd.test.js >> Complete purchase flow
- Location: tests\endToEnd.test.js:5:5

# Error details

```
TypeError: cart.removeAllItems is not a function
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
        - rowgroup [ref=e33]:
          - row "Sony vaio i5 790 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Sony vaio i5" [ref=e37]
            - cell "790" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e41]:
      - heading "Total" [level=2] [ref=e42]
      - heading "790" [level=3] [ref=e45]
      - button "Place Order" [ref=e46]
  - generic [ref=e48]:
    - generic [ref=e51]:
      - heading "About Us" [level=4] [ref=e52]
      - paragraph [ref=e53]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e56]:
      - heading "Get in Touch" [level=4] [ref=e57]
      - paragraph [ref=e58]: "Address: 2390 El Camino Real"
      - paragraph [ref=e59]: "Phone: +440 123456"
      - paragraph [ref=e60]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e64]:
      - img [ref=e65]
      - text: PRODUCT STORE
  - contentinfo [ref=e66]:
    - paragraph [ref=e67]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import ProductPage from '../page-objects/ProductPage.js';
  3  | import CartPage from '../page-objects/CartPage.js';
  4  | 
  5  | test('Complete purchase flow', async ({ page }) => {
  6  |   const productPage = new ProductPage(page);
  7  |   const cart = new CartPage(page);
  8  | 
  9  |   await productPage.navigateToHome();
  10 |   await productPage.addItemToCart('Sony vaio i5');
  11 | 
  12 |   await page.click('#cartur');
  13 |   await page.waitForSelector('#tbodyid tr');
  14 | 
  15 |   // ✅ Clear cart
> 16 |   await cart.removeAllItems();
     |              ^ TypeError: cart.removeAllItems is not a function
  17 | 
  18 |   // ✅ Verify cart empty by row count
  19 |   const itemsCount = await page.locator('#tbodyid tr').count();
  20 |   expect(itemsCount).toBe(0);
  21 | 
  22 |   // Place order
  23 |   await cart.placeOrder(
  24 |     'Farheen',
  25 |     'India',
  26 |     'Delhi',
  27 |     '1234567890123456',
  28 |     '12',
  29 |     '2026'
  30 |   );
  31 | 
  32 |   // ✅ Confirmation
  33 |   const confirmation = await page.locator('.sweet-alert').textContent();
  34 |   expect(confirmation).toContain('Thank you for your purchase!');
  35 | });
```