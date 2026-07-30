import { window } from "../utils/windowHandling"

export class invoicepage{
    constructor(page){
        this.page=page
        this.invoice_more = page.getByRole('link', { name: 'More' }).first()
        this.invoice_invoice1=page. getByRole('link',{name:"Invoice"})
        this.invoice_create=page.getByRole('link',{name:"Create Invoice..."})
        this.invoice_name=page.locator('//input[@name="subject"]')
        this.invoice_sales=page.locator('//img[@title="Select"]').first()
        this.invoice_contact=page.locator('//img[@title="Select"]').nth(1)
        this.invoice_organize=page.locator('//img[@title="Select"]').nth(2)
        this.invoice_billing=page.locator('//textarea[@name="bill_street"]')
        this.invoice_shipping=page.locator('//textarea[@name="ship_street"]')
        this.invoice_copy=page.locator('//input[@onclick="return copyAddressLeft(EditView)"]')
        this.invoice_product=page.locator('//img[@title="Products"]')
        this.invoice_qty=page.locator('//input[@name="qty1"]')
        this.invoice_shippingcharge=page.locator('//input[@id="shipping_handling_charge"]')
        this.invoice_adjustment=page.locator('//input[@id="adjustment"]')
        this.invoice_grand=page.locator('//td[@id="grandTotal"]')
        this.invoice_submit=page.locator('//input[@type="submit"]').nth(1)

    }

    async invoice_details(invoicename,billing,shipping,qty,shippingcharge,adjustment){
        await this.invoice_more.hover()
        await this.invoice_invoice1.click()
        await this.invoice_create.click()
        await this.invoice_name.fill(invoicename)
        //after utils
        const sales_order=await window(
    this.page,
this.invoice_sales.click()
        )
        await sales_order.getByRole('link',{name:"Sales Order for TCS"}).click()
        
        //after utils
        const contact_name=await window(
    this.page,
this.invoice_contact.click()
)
await contact_name.getByRole('link',{name:"mahith sanjay"}).click()

//after utils
const organization_name=await window(
    this.page,
this.invoice_organize.click()
)
await organization_name.getByRole('link',{name:"Accenture"}).click()

await this.invoice_billing.fill(billing)
await this.invoice_shipping.fill(shipping)
await this.invoice_copy.click()
const product=await window(
   this.page,
    this.invoice_product.click()
)
await product.getByRole('link',{name:"Gaming"}).click()
await this.invoice_qty.fill(qty)
await this.invoice_shippingcharge.fill(shippingcharge)
await this.invoice_adjustment.fill(adjustment)
    }
    async invoicetotal(){
        return(await this.invoice_grand.textContent()).trim()
    }
async invoicesubmit()
{
    await this.invoice_submit.click()
}
    }


