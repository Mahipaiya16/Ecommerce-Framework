class Product{

    constructor(page){

        this.page = page

        this.MenuBar = page.locator("#react-burger-menu-btn")
        this.Carticon = page.locator(".shopping-cart-link")
        this.CartBadge = page.locator(".shopping_cart_badge")
        this.LogoutBtn = page.locator("#logout_sidebar_link")
        this.Title = page.locator(".title")
        this.RemoveBtn = page.locator("#remove-sauce-labs-backpack")
        this.AddtoCartBtn = page.locator("#add-to-cart-sauce-labs-bike-light")
        this.Sortdown = page.locator("#product_sort_container")
        this.ProductItem = page.locator(".inventory_item")
        this.ProductItemName = page.locator(".inventory-item-name")
        this.ProductPrice = page.locator(".inventory-item-price")

    }

    async AddtoCart(){

        let item = await this.ProductItem.filter({hasName: "Sauce Labs Backpack"})
        await item.locator('button: has-Text{"Add to cart")')
    }
}

export default Product;