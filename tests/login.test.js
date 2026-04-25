import { test, expect } from '@playwright/test';
import LoginPage from '../page-objects/LoginPage.js';
import SignupPage from '../page-objects/SignupPage.js';

test.describe('Login Functionality Tests', () => {

  test('Valid login works', async ({ page }) => {
    const login = new LoginPage(page);
    const signup = new SignupPage(page);

    // Generate a unique user for this run
    const username = `user_${Date.now()}`;
    const password = 'password123';

    // First sign up the user
    await signup.navigate();
    page.once('dialog', async dialog => {
      await dialog.dismiss(); // dismiss signup alert
    });
    await signup.signUp(username, password);

    // Now login with the same user
    await login.navigate();
    await login.login(username, password);

    // Verify logout button is visible
    await expect(page.locator('#logout2')).toBeVisible({ timeout: 10000 });
  });

  test('Invalid login fails', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();

    let alertMessage = '';
    page.once('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.dismiss();
    });

    // Try wrong credentials
    await login.login('wronguser', 'wrongpass');

    // Accept either possible error message
    expect(['User does not exist.', 'Wrong password.']).toContain(alertMessage);
  });

});