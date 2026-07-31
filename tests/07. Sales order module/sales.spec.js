import{test} from "@playwright/test"
import { loginpage } from "../../Pages/Login"
import login from '../../TestData/Login.json'
import organize from '../../TestData/organ.json'
import contact from '../../TestData/contact.json'
import product from '../../TestData/product.json'
import qutation  from '../../TestData/quotes.json'
import sales from '../../TestData/sales.json'
import { salespage } from "../../Pages/sales"

test("creating sales order", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover()
await page. getByRole('link',{name:"Sales Order"}).click()
await page.getByRole('link',{name:"Create Sales Order..."}).click()
await page.locator('//input[@name="subject"]').fill("Sales Order for TCS")
const [Quote_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(1).click()

])
await Quote_name.getByRole('link',{name:"Game Game"}).click()

const [contact_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(2).click()

])
await contact_name.getByRole('link',{name:"Arun Gondale"}).click()


const [organization_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(3).click()

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

//pom

test("salespage1",async ({page}) => {
    const sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)

    const sales3=new salespage(page)
    await sales3.sales_details(
        sales.salesname,
        sales.Billing_street,
        sales.shipping_street,
        sales.sales_qty,
        sales.sales_shippinggcharge,
        sales.sales_adjustment
    )
    let total= await sales3.grand_tatal()
    console.log(total);

    await sales3.salessubmit()
    

})