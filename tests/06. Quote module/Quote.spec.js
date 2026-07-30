import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import qutation from '../../TestData/quotes.json'
import org from '../../TestData/organ.json'
import { quatationpage } from "../../Pages/Quatation"
import { loginpage } from "../../Pages/Login"
import { productpage } from "../../Pages/product"
import { organizationpage } from "../../Pages/organization"


test("creating quote", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover();
await page. getByRole('link',{name:"Quotes"}).click()
await page.getByRole('link',{name:"Create Quote..."}).click()
await page.locator('//input[@name="subject"]').fill("Day by Day")
await page.locator('//img[@id="jscal_trigger_validtill"]').click()
while (true){
    const month= await page.locator('//td[@class="title"]').textContent()
    if(month.includes("agust"))
        break;
    await page.locator('//td[contains(text(),"›")]').last().click()
}

await page.getByRole('cell',{name:"28"}).click()
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
await product.locator('//a[@id="popup_product_38"]').click()
await page.locator('//input[@name="qty1"]').fill("55")
await page.locator('//input[@id="shipping_handling_charge"]').fill("500")
await page.locator('//input[@id="adjustment"]').fill("40")
const Grandtotal= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal);
await page.locator('//input[@type="submit"]').nth(1).click()

})

//
test("creating quote1", async({page})=>{
await page.goto(login.url)
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover();
await page. getByRole('link',{name:"Quotes"}).click()
await page.getByRole('link',{name:"Create Quote..."}).click()
await page.locator('//input[@name="subject"]').fill(qutation.qutation_name)
await page.locator('//img[@id="jscal_trigger_validtill"]').click()
while (true){
    const month= await page.locator('//td[@class="title"]').textContent()
    if(month.includes("agust"))
        break;
    await page.locator('//td[contains(text(),"›")]').last().click()
}

await page.getByRole('cell',{name:"28"}).click()
const [organization_name]=await Promise.all([
    page.waitForEvent('popup'),
await page.locator('//img[@title="Select"]').nth(2).click()

])
await organization_name.getByRole('link',{name:"Accenture"}).click()
await page.locator('//textarea[@name="bill_street"]').fill(qutation.Billing)
await page.locator('//textarea[@name="ship_street"]').fill(qutation.shpping)
await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').click()
const [product]=await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//img[@title="Products"]').click()
])
await product.locator('//a[@id="popup_product_38"]').click()
await page.locator('//input[@name="qty1"]').fill(qutation.Quantity)
await page.locator('//input[@id="shipping_handling_charge"]').fill(qutation.shippingcharge)
await page.locator('//input[@id="adjustment"]').fill(qutation.tax)
const Grandtotal= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal);
await page.locator('//input[@type="submit"]').nth(1).click()

})

//pom
test.only("qutation2",async ({page}) => {
    let signin=new loginpage(page)
    await signin.launching(login.url)
    await signin.details(login.user_name,login.password)

    let quat1=new quatationpage(page)
    await quat1.quatationdetails(qutation.qutation_name,qutation.Billing, qutation.shpping,qutation.Quantity, qutation.shippingcharge, qutation.tax)
    let grand=await quat1.grandtotal()
    console.log(grand);
    await quat1.quatsubmit()
    

})
