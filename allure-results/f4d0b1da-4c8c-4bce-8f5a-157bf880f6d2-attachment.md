# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchItems.test.js >> Search items from CSV file
- Location: tests\searchItems.test.js:6:5

# Error details

```
TypeError: productPage.searchItem is not a function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { readCSV } from '../utils/csvUtil.js';
  3  | import { readJSON } from '../utils/jsonUtil.js';
  4  | import ProductPage from '../page-objects/ProductPage.js';
  5  | 
  6  | test('Search items from CSV file', async ({ page }) => {
  7  |   const items = await readCSV('data-files/items.csv');
  8  |   const productPage = new ProductPage(page);
  9  | 
  10 |   for (const item of items) {
> 11 |     await productPage.searchItem(item.Name);   // assume CSV has column "Name"
     |                       ^ TypeError: productPage.searchItem is not a function
  12 |     await expect(page.locator('.card-title')).toContainText(item.Name);
  13 |   }
  14 | });
  15 | 
  16 | test('Search items from JSON file', async ({ page }) => {
  17 |   const items = await readJSON('data-files/items.json');
  18 |   const productPage = new ProductPage(page);
  19 | 
  20 |   for (const item of items) {
  21 |     await productPage.searchItem(item.name);   // assume JSON has key "name"
  22 |     await expect(page.locator('.card-title')).toContainText(item.name);
  23 |   }
  24 | });
```