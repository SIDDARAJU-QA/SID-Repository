import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import opp from '../../TestData/oppertinities.json'
import { loginpage } from "../../Pages/Login"
import { opertunitypage } from "../../Pages/opertunities"

test.skip("creating opertunity", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"Opportunities"}).click()
await page.getByRole('img',{name:"Create Opportunity..."}).click()
await page. locator('//input[@name="potentialname"]').fill("Agreed for 5 apps")
await  page.locator('//select[@id="related_to_type"]').selectOption({value:"Contacts"})
const [contact]=await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//img[@title="Select"]').first().click()
])
await contact.getByRole('link',{name:"Arun Gondale"}).click()
await page.locator('//select[@name="sales_stage"]').selectOption({value:"Proposal/Price Quote"})
await page.locator('//img[@id="jscal_trigger_closingdate"]').click()
await page.getByRole('cell',{name:"16"}).click()
await page.getByRole('button',{name:"Save "}).first().click()

})

//
test.skip("creating opertunity1", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"Opportunities"}).click()
await page.getByRole('img',{name:"Create Opportunity..."}).click()
await page. locator('//input[@name="potentialname"]').fill(opp.subject)
await page.locator('//select[@id="related_to_type"]').selectOption({value:"Contacts"})
const [contact]=await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//img[@title="Select"]').first().click()
])
await contact.getByRole('link',{name:"Arun Gondale"}).click()
await page.locator('//select[@name="sales_stage"]').selectOption({value:"Proposal/Price Quote"})
await page.locator('//img[@id="jscal_trigger_closingdate"]').click()
await page.getByRole('cell',{name:"16"}).click()
await page.getByRole('button',{name:"Save "}).first().click()

})

//pom

test.skip("creating opertunity2",async ({page}) => {
    let signin=new loginpage(page)
    await signin.launching(login.url)
    await signin.details(login.user_name,login.password)

    let oppertunity2=new opertunitypage(page)
    await oppertunity2.opertunity_deatails(opp.subject)

})