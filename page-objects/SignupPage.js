import CommonMethods from '../common/CommonMethods.js';

export default class SignupPage {
  constructor(page) {
    this.page = page;
    this.common = new CommonMethods(page);
  }

  async navigate() {
    await this.page.goto(process.env.E2E_BASE_URL);
  }

  async signUp(username, password) {
    await this.common.clickElement('#signin2');
    await this.common.enterText('#sign-username', username);
    await this.common.enterText('#sign-password', password);
    await this.common.clickElement('button[onclick="register()"]');
    await this.page.waitForTimeout(2000);
  }
}