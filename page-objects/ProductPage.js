import CommonMethods from '../common/CommonMethods.js';

export default class ProductPage {
  constructor(page) {
    this.page = page;
    this.common = new CommonMethods(page);
  }

  // For cart tests
  async navigateToHome() {
    await this.page.goto(process.env.E2E_BASE_URL);
    await this.page.waitForSelector('.navbar-brand');
  }

  async addItemToCart(itemName) {
    // Go to product detail page
    await this.page.click(`.card-title:has-text("${itemName}")`);
    await this.page.waitForSelector('.name', { timeout: 10000 });

    // Add to cart
    await this.common.clickElement('a:has-text("Add to cart")');

    // Handle alert
    this.page.on('dialog', async dialog => {
      await dialog.accept();
    });

    // Navigate back to home
    await this.page.click('.navbar-brand');
  }

  // For search tests
  async searchItem(itemName) {
    await this.page.waitForSelector('.card-title', { timeout: 10000 });
    const productTitles = await this.page.locator('.card-title').allTextContents();
    const match = productTitles.find(title => title.toLowerCase().includes(itemName.toLowerCase()));
    if (!match) {
      throw new Error(`Item "${itemName}" not found on page`);
    }
  }

  // For end-to-end tests
  async searchAndAdd(itemName) {
    const productCard = this.page.locator('.card-title', { hasText: itemName });
    await productCard.first().click();

    await this.page.waitForSelector('.name', { timeout: 10000 });
    await this.common.clickElement('a:has-text("Add to cart")');

    this.page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await this.page.click('.navbar-brand');
  }
}