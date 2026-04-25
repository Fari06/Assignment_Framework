import { test, expect } from '@playwright/test';
import SignupPage from '../page-objects/SignupPage.js';

test('User can sign up with valid details', async ({ page }) => {
  const signup = new SignupPage(page);
  await signup.navigate();

  // generate unique username each run
  const uniqueUser = `user_${Date.now()}`;
  const password = 'password123';

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Sign up successful');
    await dialog.dismiss();
  });

  await signup.signUp(uniqueUser, password);
});