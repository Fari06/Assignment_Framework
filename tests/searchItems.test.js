import CommonMethods from '../common/CommonMethods.js';

export default class ProductPage {
  constructor(page) {
    this.page = page;
    this.common = new CommonMethods(page);
  }

  // Navigate to homepage
  async navigate() {
    await this.page.goto(process.env.E2E_BASE_URL);
    await this.page.waitForSelector('.navbar-brand');
  }

  // 🔧 New method added for search
  async searchItem(itemName) {
    // Demoblaze doesn’t have a real search box, so we simulate search by filtering product cards
    // This assumes items.csv/json contain product names like "Samsung galaxy s6"
    await this.page.waitForSelector('.card-title', { timeout: 10000 });

    const productTitles = await this.page.locator('.card-title').allTextContents();
    const match = productTitles.find(title => title.toLowerCase().includes(itemName.toLowerCase()));

    if (!match) {
      throw new Error(`Item "${itemName}" not found on page`);
    }
  }
}