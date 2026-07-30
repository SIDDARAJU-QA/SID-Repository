export class quatationpage{
    constructor(page){
        this.page=page
        this.quat_morelink=page.getByRole('link', { name: 'More' }).first()
        this.quat_quatlink=page. getByRole('link',{name:"Quotes"})
        this.quat_create= page.getByRole('link',{name:"Create Quote..."})
        this.quat_subject=page.locator('//input[@name="subject"]')
        this.quat_date=page.locator('//img[@id="jscal_trigger_validtill"]')
        this.quat_monthtitle=page.locator('//td[@class="title"]')
        this.quat_nextmonth=page.locator('//td[contains(text(),"›")]').last()
        this.quat_day=page.getByRole('cell',{name:"28"})
        this.quat_organname=page.locator('//img[@title="Select"]').nth(2)
        this.quat_billing=page.locator('//textarea[@name="bill_street"]')
        this.quat_shipping=page.locator('//textarea[@name="ship_street"]')
        this.quat_copyaddress=page.locator('//input[@onclick="return copyAddressLeft(EditView)"]')
        this.quat_product=page.locator('//img[@title="Products"]')
        this.quat_qty=page.locator('//input[@name="qty1"]')
        this.quat_shipcharge=page.locator('//input[@id="shipping_handling_charge"]')
        this.quat_adjustment=page.locator('//input[@id="adjustment"]')
        this.quat_grandtotal=page.locator('//td[@id="grandTotal"]')
        this.quat_submit=page.locator('//input[@type="submit"]').nth(1)
    }
    async quatationdetails(subject,billing,shipping,qty,shippingcharge,adjustment){
        await this.quat_morelink.hover()
        await this.quat_quatlink.click()
        await this.quat_create.click()
        await this.quat_subject.fill(subject)
        await this.quat_date.click()
        while (true){
    const month= await this.quat_monthtitle.textContent()
    if(month.includes("August, 2026"))
        break;
    await this.quat_nextmonth.click()
}
await this.quat_day.click()
const [organization_name]=await Promise.all([
   this.page.waitForEvent('popup'),
await this.quat_organname.click()
])
await organization_name.getByRole('link',{name:"Accenture"}).click()
await this.quat_billing.fill(billing)
await this.quat_shipping.fill(shipping)
await this.quat_copyaddress.click()
const [product]=await Promise.all([
    this.page.waitForEvent('popup'),
    this.quat_product.click()
])
await product.locator('//a[@id="popup_product_38"]').click()
await this.quat_qty.fill(qty)
await this.quat_shipcharge.fill(shippingcharge)
await this.quat_adjustment.fill(adjustment)
    }
async grandtotal(){
return (await this.quat_grandtotal.textContent()).trim()
}
async quatsubmit(){
await this.quat_submit.click()
}


    }
