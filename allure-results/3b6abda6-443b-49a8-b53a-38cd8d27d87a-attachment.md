# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEnd.test.js >> Complete purchase flow
- Location: tests\endToEnd.test.js:7:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Matcher error: received value must be a number or bigint

Received has type:  string
Received has value: "1180"
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome enduser" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
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
          - row "Samsung galaxy s6 360 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Samsung galaxy s6" [ref=e37]
            - cell "360" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [active] [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "Nokia lumia 1520 820 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "Nokia lumia 1520" [ref=e44]
            - cell "820" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [ref=e47] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e48]:
      - heading "Total" [level=2] [ref=e49]
      - heading "1180" [level=3] [ref=e52]
      - button "Place Order" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e58]:
      - heading "About Us" [level=4] [ref=e59]
      - paragraph [ref=e60]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e63]:
      - heading "Get in Touch" [level=4] [ref=e64]
      - paragraph [ref=e65]: "Address: 2390 El Camino Real"
      - paragraph [ref=e66]: "Phone: +440 123456"
      - paragraph [ref=e67]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e71]:
      - img [ref=e72]
      - text: PRODUCT STORE
  - contentinfo [ref=e73]:
    - paragraph [ref=e74]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import SignupPage from '../page-objects/SignupPage.js';
  3  | import LoginPage from '../page-objects/LoginPage.js';
  4  | import ProductPage from '../page-objects/ProductPage.js';
  5  | import CartPage from '../page-objects/CartPage.js';
  6  | 
  7  | test('Complete purchase flow', async ({ page }) => {
  8  |   const signup = new SignupPage(page);
  9  |   const login = new LoginPage(page);
  10 |   const product = new ProductPage(page);
  11 |   const cart = new CartPage(page);
  12 | 
  13 |   await signup.navigate();
  14 |   await signup.signUp('enduser', 'endpass');
  15 | 
  16 |   await login.navigate();
  17 |   await login.login('enduser', 'endpass');
  18 | 
  19 |   await product.searchAndAdd('Samsung galaxy s6');
  20 |   await product.searchAndAdd('Nokia lumia 1520');
  21 | 
  22 |   await cart.navigate();
  23 |   await cart.deleteItem('Samsung galaxy s6');
  24 |   const total = await cart.getTotal();
> 25 |   expect(total).toBeGreaterThan(0);
     |                 ^ Error: expect(received).toBeGreaterThan(expected)
  26 | 
  27 |   await cart.placeOrder('Farheen', 'India', 'Delhi', '1234567890123456', '12', '2026');
  28 |   const confirmation = await cart.getConfirmation();
  29 |   expect(confirmation).toContain('Thank you for your purchase!');
  30 | });
```