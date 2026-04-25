# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEnd.test.js >> Complete purchase flow
- Location: tests\endToEnd.test.js:7:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import CommonMethods from '../common/CommonMethods.js';
  2  | 
  3  | export default class SignupPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.common = new CommonMethods(page);
  7  |     this.signupLink = '#signin2';
  8  |     this.usernameField = '#sign-username';
  9  |     this.passwordField = '#sign-password';
  10 |     this.signupBtn = 'button[onclick="register()"]';
  11 |   }
  12 | 
  13 |   async navigate() {
> 14 |     await this.page.goto(process.env.BASE_URL);
     |                     ^ Error: page.goto: url: expected string, got undefined
  15 |   }
  16 | 
  17 |   async signUp(username, password) {
  18 |     await this.common.clickElement(this.signupLink);
  19 |     await this.common.enterText(this.usernameField, username);
  20 |     await this.common.enterText(this.passwordField, password);
  21 |     await this.common.clickElement(this.signupBtn);
  22 |   }
  23 | }
```