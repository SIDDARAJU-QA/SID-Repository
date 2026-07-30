import{test} from "@playwright/test"

test("end to end", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()
await page.waitForTimeout(2000)
//lead
await page.getByRole('link',{name:"LEADS"}).click()
await page.getByRole('img',{name:"Create Lead..."}).click()
 await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Lalith')
    await page.locator('//input[@name="lastname"]').fill('Gowda')
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill('Indium Software')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
    await page.waitForTimeout(2000)
//organization
    await page.getByRole('link',{name:"Organizations"}).click()
await page.getByRole('img',{name:"Create Organization..."}).click()

await page.locator('//input[@name="accountname"]').fill("Accenture");

const accountname = await page.locator('//input[@name="accountname"]').inputValue();
await page.locator('//select[@name="industry"]').selectOption({value:"Consulting"})
await page.locator('//input[@name="assigntype"]').nth(1).check()
await page.getByRole('button',{name:"Save "}).first().click()

await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)
//contact
await page.getByRole('link',{name:"Contacts"}).click()
await page.getByRole('img',{name:"Create Contact..."}).click()
await page.locator('//select[@name="salutationtype"]').selectOption({value:"Mr."})
const firstName = "Arvind";
const lastName = "mishra";

await page.locator('//input[@name="firstname"]').fill(firstName);
await page.locator('//input[@name="lastname"]').fill(lastName);
const contact1=await page.locator('//input[@name="lastname"]').inputValue() 
const [orgpage]= await Promise.all([
    page. waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()
])
await orgpage.getByRole('link',{name:"Accenture"}).click()
await page.getByRole('button',{name:"Save "}).first().click()
await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)

//oppertunities
await page.getByRole('link',{name:"Opportunities"}).click()
await page.getByRole('img',{name:"Create Opportunity..."}).click()
await page. locator('//input[@name="potentialname"]').fill("Agreed to continue")
await  page.locator('//select[@id="related_to_type"]').selectOption({value:"Contacts"})
const [contact]=await Promise.all([
    page.waitForEvent('popup'),
    page.locator('//img[@title="Select"]').first().click()
])
await contact_name.getByRole('link', {
    name: `${firstName} ${lastName}`
}).click();
await page.locator('//select[@name="sales_stage"]').selectOption({value:"Proposal/Price Quote"})
await page.locator('//img[@id="jscal_trigger_closingdate"]').click()
await page.getByRole('cell',{name:"16"}).click()
await page.getByRole('button',{name:"Save "}).first().click()

await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)

//product

await page.getByRole('link',{name:"PRODUCTS"}).click()
await page.getByRole('img',{name:"Create Product..."}).click()
const product_name = "Gaming";

await page.locator('//input[@name="productname"]').fill(product_name);
await page.getByRole('button',{name:"Save "}).first().click()

await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)
//Quote

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover();
await page. getByRole('link',{name:"Quotes"}).click()
await page.getByRole('link',{name:"Create Quote..."}).click()
await page.locator('//input[@name="subject"]').fill("Game Game")
const [organization_name]=await Promise.all([
    page.waitForEvent('popup'),
page.locator('//img[@title="Select"]').nth(2).click()

])
await organization_name.getByRole('link', {
    name: accountname
}).click();
await page.locator('//textarea[@name="bill_street"]').fill("CV Raman nagara, bangalore")
await page.locator('//textarea[@name="ship_street"]').fill("Dobbospet Industrial area, nelemangala, bangalore")
await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').click()
const [product]=await Promise.all([
    page.waitForEvent('popup'),
     page.locator('//img[@title="Products"]').click()
])
await product.getByRole('link', { name: product_name }).click();
await page.locator('//input[@name="qty1"]').fill("55")
await page.locator('//input[@id="shipping_handling_charge"]').fill("500")
await page.locator('//input[@id="adjustment"]').fill("40")
const Grandtotal= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal);
await page.locator('//input[@type="submit"]').nth(1).click()

await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)

//sales order

const more1 = page.getByRole('link', { name: 'More' }).first()
await more1.hover();
await page. getByRole('link',{name:"Sales Order"}).click()
await page.getByRole('link',{name:"Create Sales Order..."}).click()
await page.locator('//input[@name="subject"]').fill("Sales Order for TCS")
const [Quote_name]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').nth(1).click()

])
await Quote_name.getByRole('link',{name:"Game Game"}).click()

const [contact_name1]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').nth(2).click()

])
await contact_name1.getByRole('link', {
    name: `${firstName} ${lastName}`
}).click();


const [organization_name1]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').nth(3).click()

])
await organization_name1.getByRole('link', {
    name: accountname
}).click();


await page.locator('//textarea[@name="bill_street"]').fill("CV Raman nagara, bangalore")
await page.locator('//textarea[@name="ship_street"]').fill("Dobbospet Industrial area, nelemangala, bangalore")
await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').click()
const [product1]=await Promise.all([
    page.waitForEvent('popup'),
     page.locator('//img[@title="Products"]').click()
])
await product1.getByRole('link', { name: product_name }).click();
await page.locator('//input[@name="qty1"]').fill("55")
await page.locator('//input[@id="shipping_handling_charge"]').fill("500")
await page.locator('//input[@id="adjustment"]').fill("40")
const Grandtotal1= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal1);
await page.locator('//input[@type="submit"]').nth(1).click()

await page.locator('//img[@src="themes/softed/images/Home.PNG"]').click()
await page.waitForTimeout(2000)

//Invoice

const more2 = page.getByRole('link', { name: 'More' }).first();
await more2.hover();
await page. getByRole('link',{name:"Invoice"}).click()
await page.getByRole('link',{name:"Create Invoice..."}).click()
await page.locator('//input[@name="subject"]').fill("Invoice of game")
const [sales_order2]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').first().click()

])
await sales_order2.getByRole('link',{name:"Sales Order for TCS"}).click()

const [contact_name2]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').nth(1).click()

])
await contact_name2.getByRole('link', {
    name: `${firstName} ${lastName}`
}).click();


const [organization_name2]=await Promise.all([
    page.waitForEvent('popup'),
 page.locator('//img[@title="Select"]').nth(2).click()

])
await organization_name2.getByRole('link', {
    name: accountname
}).click();


await page.locator('//textarea[@name="bill_street"]').fill("CV Raman nagara, bangalore")
await page.locator('//textarea[@name="ship_street"]').fill("Dobbospet Industrial area, nelemangala, bangalore")
await page.locator('//input[@onclick="return copyAddressLeft(EditView)"]').click()
const [product2]=await Promise.all([
    page.waitForEvent('popup'),
     page.locator('//img[@title="Products"]').click()
])
await product2.getByRole('link', { name: product_name }).click();
await page.locator('//input[@name="qty1"]').fill("55")
await page.locator('//input[@id="shipping_handling_charge"]').fill("500")
await page.locator('//input[@id="adjustment"]').fill("40")
const Grandtotal2= await page.locator('//td[@id="grandTotal"]').textContent()
console.log(Grandtotal2);
await page.locator('//input[@type="submit"]').nth(1).click()
await page.waitForTimeout(2000)


})


