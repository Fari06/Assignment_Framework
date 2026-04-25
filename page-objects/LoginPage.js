import CommonMethods from '../common/CommonMethods.js';

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.common = new CommonMethods(page);
  }

  async navigate() {
    // Use correct env variable name
    await this.page.goto(process.env.E2E_BASE_URL);
  }

  async login(username, password) {
    await this.common.clickElement('#login2');
    await this.common.enterText('#loginusername', username);
    await this.common.enterText('#loginpassword', password);
    await this.common.clickElement('button[onclick="logIn()"]');
    await this.page.waitForTimeout(2000);
  }

  async logout() {
    await this.common.clickElement('#logout2');
    await this.page.waitForTimeout(1000);
  }
}