import{test} from "@playwright/test"
import { invoicepage } from "../../Pages/invoice"
import invoice from '../../TestData/invoice.json'
import { loginpage } from "../../Pages/Login"
import sales from '../../TestData/sales.json'
import contact from '../../TestData/contact.json'
import { sign } from "node:crypto"
import { window } from "../../utils/windowHandling"
import { random } from "../../utils/random"
import login from '../../TestData/Login.json'
import invoicecall from '../../TestData/invoice.json'

test.skip("creating invoice", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover();
await page. getByRole('link',{name:"Invoice"}).click()
await page.getByRole('link',{name:"Create Invoice..."}).click()
await page.locator('//input[@name="subject"]').fill("Invoice of game")

const [sales_order]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').first().click()

])
await sales_order.getByRole('link',{name:"Sales Order for TCS"}).click()

const [contact_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(1).click()

])
await contact_name.getByRole('link',{name:"Arun Gondale"}).click()


const [organization_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(2).click()

])
await organization_name.getByRole('link',{name:"Accenture"}).click()


await page.locator('//textarea[@name="bill_street"]').fill("CV Raman nagara, bangalore")
await page.locator('//textarea[@name="ship_street"]').fill("Dobbospet Industrial area, nelemangala, bangalore")
await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').click()
const [product]=await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//img[@title="Products"]').click()
])
await product.getByRole('link',{name:"Gaming"}).click()
await page.locator('//input[@name="qty1"]').fill("55")
await page.locator('//input[@id="shipping_handling_charge"]').fill("500")
await page.locator('//input[@id="adjustment"]').fill("40")
const Grandtotal= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal);
await page.locator('//input[@type="submit"]').nth(1).click()

})


test.skip("testing incoice", async ({page}) => {
    let sign=new loginpage(page)
await sign.launching(login.url)
await sign.details(login.user_name, login.password)

const invoice1=new invoicepage(page)
let num=random()
let name=invoicecall.invoicename+num
await invoice1.invoice_details(name, invoicecall.billing, invoicecall.shipping, invoicecall.qty, invoicecall.shippingcharge, invoicecall.adjustment)
    
let total= invoice1.invoicetotal()
console.log(total);

await invoice1.invoicesubmit()  

})