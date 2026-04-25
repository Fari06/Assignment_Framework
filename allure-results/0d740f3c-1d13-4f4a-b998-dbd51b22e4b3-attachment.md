# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multiUserLogin.test.js >> Login with multiple users from JSON
- Location: tests\multiUserLogin.test.js:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login2')

```

# Test source

```ts
  1  | export default class CommonMethods {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |   }
  5  | 
  6  |   async clickElement(selector) {
> 7  |     await this.page.click(selector);
     |                     ^ Error: page.click: Test timeout of 30000ms exceeded.
  8  |   }
  9  | 
  10 |   async enterText(selector, text) {
  11 |     await this.page.fill(selector, text);
  12 |   }
  13 | 
  14 |   async getText(selector) {
  15 |     return await this.page.textContent(selector);
  16 |   }
  17 | 
  18 |   async waitForElement(selector) {
  19 |     await this.page.waitForSelector(selector);
  20 |   }
  21 | }
```