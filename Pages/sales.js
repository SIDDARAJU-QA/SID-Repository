export class salespage{
    constructor(page){
        this.page=page
        this.sales_morelink=page.getByRole('link', { name: 'More' }).first()
        this.sales_orderlink=page. getByRole('link',{name:"Sales Order"})
        this.sales_create=page.getByRole('link',{name:"Create Sales Order..."})
        this.sales_name=page.locator('//input[@name="subject"]')
        this.sales_quatation=page.locator('//img[@title="Select"]').nth(1)
        this.sales_contact=page.locator('//img[@title="Select"]').nth(2)
        this.sales_organization=page.locator('//img[@title="Select"]').nth(3)
        this.sales_billing=page.locator('//textarea[@name="bill_street"]')
        this.sales_shipping=page.locator('//textarea[@name="ship_street"]')
        this.sales_copy=page.locator('//input[@onclick="return copyAddressLeft(EditView)"]')
        this.sales_product=page.locator('//img[@title="Products"]')
        this.sales_qty=page.locator('//input[@name="qty1"]')
        this.sales_shipcharge=page.locator('//input[@id="shipping_handling_charge"]')
        this.sales_adjust=page.locator('//input[@id="adjustment"]')
        this.sales_grand=page.locator('//td[@id="grandTotal"]')
        this.sales_submit=page.locator('//input[@type="submit"]').nth(1)
    }

    async sales_details(name,billing,shipping,qty,shipcharge,adjustment){
        await this.sales_morelink.hover()
        await this.sales_orderlink.click()
        await this.sales_create.click()
        await this.sales_name.fill(name)
        const [Quote_name]=await Promise.all([
        this.page.waitForEvent('popup'),
        await this.sales_quatation.click()
        ])
        await Quote_name.getByRole('link',{name:"Game Game"}).click()
const [contact_name]=await Promise.all([
    this.page.waitForEvent('popup'),
await this.sales_contact.click()

])
await contact_name.getByRole('link',{name:"Arun Gondale"}).click()

        const [organization_name]=await Promise.all([
        this.page.waitForEvent('popup'),
        await this.sales_organization.click()
        ])
        await organization_name.getByRole('link',{name:"Accenture"}).click()

        await this.sales_billing.fill(billing)
        await this.sales_shipping.fill(shipping)
        await this.sales_copy.click()
        const [product]=await Promise.all([
    this.page.waitForEvent('popup'),
    await this.sales_product.click()
])
await product.getByRole('link',{name:"Gaming"}).click()
await this.sales_qty.fill(qty)
await this.sales_shipcharge.fill(shipcharge)
await this.sales_adjust.fill(adjustment)

    }
    async grand_tatal(){
        return(await this.sales_grand.textContent()).trim()
    }

    async salessubmit()
    {
        await this.sales_submit.click()
    }
}