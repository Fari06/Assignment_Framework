export default class CartPage {
  constructor(page) {
    this.page = page;
  }

  async getTotal() {
    const totalText = await this.page.locator('#totalp').textContent();
    return parseInt(totalText);
  }

  async placeOrder(name, country, city, card, month, year) {
    await this.page.click('button:has-text("Place Order")');
    await this.page.fill('#name', name);
    await this.page.fill('#country', country);
    await this.page.fill('#city', city);
    await this.page.fill('#card', card);
    await this.page.fill('#month', month);
    await this.page.fill('#year', year);
    await this.page.click('button:has-text("Purchase")');
  }

  // ✅ New method to clear all items from cart
  async removeAllItems() {
    const deleteLinks = this.page.locator('a:has-text("Delete")');
    const count = await deleteLinks.count();

    for (let i = 0; i < count; i++) {
      await deleteLinks.nth(0).click(); // always click first delete link
      await this.page.waitForTimeout(1000); // small wait for UI update
    }
  }
}