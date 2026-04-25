# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.test.js >> Invalid login fails
- Location: tests\login.test.js:11:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import CommonMethods from '../common/CommonMethods.js';
  2  | 
  3  | export default class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.common = new CommonMethods(page);
  7  |     this.loginLink = '#login2';
  8  |     this.usernameField = '#loginusername';
  9  |     this.passwordField = '#loginpassword';
  10 |     this.loginBtn = 'button[onclick="logIn()"]';
  11 |     this.logoutLink = '#logout2';
  12 |   }
  13 | 
  14 |   async navigate() {
> 15 |     await this.page.goto(process.env.BASE_URL);
     |                     ^ Error: page.goto: url: expected string, got undefined
  16 |   }
  17 | 
  18 |   async login(username, password) {
  19 |     await this.common.clickElement(this.loginLink);
  20 |     await this.common.enterText(this.usernameField, username);
  21 |     await this.common.enterText(this.passwordField, password);
  22 |     await this.common.clickElement(this.loginBtn);
  23 |   }
  24 | 
  25 |   async logout() {
  26 |     await this.common.clickElement(this.logoutLink);
  27 |   }
  28 | }
```