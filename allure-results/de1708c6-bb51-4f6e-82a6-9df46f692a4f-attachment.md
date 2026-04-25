# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchItems.test.js >> Search items from CSV file
- Location: tests\searchItems.test.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.card-title')

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
  9  |   async searchItem(itemName) {
> 10 |     await this.page.locator('.card-title', { hasText: itemName }).click();
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |   }
  12 | 
  13 |   async addItemToCart(itemName) {
  14 |     await this.page.locator('.card-title', { hasText: itemName }).click();
  15 |     await this.common.clickElement('a:has-text("Add to cart")');
  16 |     await this.page.waitForTimeout(2000);
  17 |     await this.page.goBack();
  18 |   }
  19 | 
  20 |   async searchAndAdd(itemName) {
  21 |     await this.page.click(`a:has-text("${itemName}")`);
  22 |     await this.common.clickElement('a:has-text("Add to cart")');
  23 |     await this.page.waitForTimeout(2000);
  24 |     await this.page.goBack();
  25 |   }
  26 | }
```