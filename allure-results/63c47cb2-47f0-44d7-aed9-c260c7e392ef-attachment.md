# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.test.js >> Cart Functionality Tests >> Add item to cart and verify
- Location: tests\cart.test.js:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has-text("Samsung galaxy s6")')

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
            - /url: cart.html
        - listitem [ref=e17]:
          - link "Log in" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=e19]:
          - link "Sign up" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e25]:
      - list [ref=e26]:
        - listitem [ref=e27] [cursor=pointer]
        - listitem [ref=e28] [cursor=pointer]
        - listitem [ref=e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=e32]:
      - heading "Samsung galaxy s6" [level=2] [ref=e33]
      - separator [ref=e34]
      - heading "$360 *includes tax" [level=3] [ref=e35]
      - separator [ref=e36]
      - generic [ref=e37]:
        - list:
          - listitem
        - generic [ref=e39]:
          - strong [ref=e40]: Product description
          - paragraph [ref=e41]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
      - separator [ref=e42]
      - link "Add to cart" [ref=e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=e47]:
    - generic [ref=e50]:
      - heading "About Us" [level=4] [ref=e51]
      - paragraph [ref=e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e55]:
      - heading "Get in Touch" [level=4] [ref=e56]
      - paragraph [ref=e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=e58]: "Phone: +440 123456"
      - paragraph [ref=e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e63]:
      - img [ref=e64]
      - text: PRODUCT STORE
  - contentinfo [ref=e65]:
    - paragraph [ref=e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import CommonMethods from '../common/CommonMethods.js';
  2  | 
  3  | export default class ProductPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.common = new CommonMethods(page);
  7  |   }
  8  | 
  9  |   async navigateToHome() {
  10 |     await this.page.goto(process.env.E2E_BASE_URL);
  11 |   }
  12 | 
  13 |   async searchItem(itemName) {
  14 |     // Click product link by visible text
  15 |     await this.page.click(`a:has-text("${itemName}")`);
  16 |   }
  17 | 
  18 |   async addItemToCart(itemName) {
  19 |     // Open product detail page
> 20 |     await this.page.click(`a:has-text("${itemName}")`);
     |                     ^ Error: page.click: Test timeout of 30000ms exceeded.
  21 |     // Click Add to cart
  22 |     await this.common.clickElement('a:has-text("Add to cart")');
  23 |     await this.page.waitForTimeout(2000);
  24 |     // Go back to home
  25 |     await this.page.goBack();
  26 |   }
  27 | 
  28 |   async searchAndAdd(itemName) {
  29 |     await this.page.click(`a:has-text("${itemName}")`);
  30 |     await this.common.clickElement('a:has-text("Add to cart")');
  31 |     await this.page.waitForTimeout(2000);
  32 |     await this.page.goBack();
  33 |   }
  34 | }
```