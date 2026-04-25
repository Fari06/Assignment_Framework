export default class CommonMethods {
  constructor(page) {
    this.page = page;
  }

  async clickElement(selector) {
    await this.page.click(selector);
  }

  async enterText(selector, text) {
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector);
  }
}