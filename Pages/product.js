export class productpage{
    constructor(page){
        this.page=page
        this.product_link=page.getByRole('link',{name:"PRODUCTS"})
        this.product_create=page.getByRole('img',{name:"Create Product..."})
        this.product_name=page.locator('//input[@name="productname"]')
        this.product_save=page.getByRole('button',{name:"Save "}).first()
    }

    async product_details(productname){
        await this.product_link.click()
        await this.product_create.click()
        await this.product_name.fill(productname)
        await this.product_save.click()
    }

}