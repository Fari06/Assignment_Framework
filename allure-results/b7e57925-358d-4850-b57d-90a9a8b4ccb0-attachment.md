# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup.test.js >> User can sign up with valid details
- Location: tests\signup.test.js:4:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Sign up successful"
Received string:    "This user already exist."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import SignupPage from '../page-objects/SignupPage.js';
  3  | 
  4  | test('User can sign up with valid details', async ({ page }) => {
  5  |   const signup = new SignupPage(page);
  6  |   await signup.navigate();
  7  | 
  8  |   page.once('dialog', async dialog => {
> 9  |     expect(dialog.message()).toContain('Sign up successful');
     |                              ^ Error: expect(received).toContain(expected) // indexOf
  10 |     await dialog.dismiss();
  11 |   });
  12 | 
  13 |   await signup.signUp('newuser', 'password123');
  14 | });
```