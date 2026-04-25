// page-objects/HomePage.js
export default class HomePage {
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a.navbar-brand'); // logo/home link
    this.categoriesMenu = page.locator('#cat');     // categories section
    this.contactLink = page.locator('a[data-target="#exampleModal"]'); // contact modal
    this.aboutUsLink = page.locator('a[data-target="#videoModal"]');   // about us modal
    this.cartLink = page.locator('#cartur');        // cart link
    this.loginLink = page.locator('#login2');       // login link
    this.signupLink = page.locator('#signin2');     // signup link
  }

  async gotoHome() {
    await this.page.goto(process.env.BASE_URL);
  }

  async openCart() {
    await this.cartLink.click();
  }

  async openLogin() {
    await this.loginLink.click();
  }

  async openSignup() {
    await this.signupLink.click();
  }

  async openContact() {
    await this.contactLink.click();
  }

  async openAboutUs() {
    await this.aboutUsLink.click();
  }

  async selectCategory(categoryName) {
    await this.categoriesMenu.locator(`text=${categoryName}`).click();
  }
}