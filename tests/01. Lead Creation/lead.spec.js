import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import lead_data from '../../TestData/Lead.json'
import { leadpage } from "../../Pages/lead"
import { loginpage } from "../../Pages/Login"
import { url } from "node:inspector"
import { random } from "../../utils/random"

test("creating product", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"LEADS"}).click()
await page.getByRole('img',{name:"Create Lead..."}).click()
 await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill('Raghavan')
    await page.locator('//input[@name="lastname"]').fill('Gowda')
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill('Indium Software')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //!validation
    let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
    if(lastname===valid){
        console.log('lead is created');
    }else{
        console.log('lead is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
}) 

// 
test("creating lead", async({page})=>{
await page.goto(login.url)
await expect(page).toHaveURL(login.url)
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"LEADS"}).click()
await page.getByRole('img',{name:"Create Lead..."}).click()
 await page.locator('//select[@name="salutationtype"]').selectOption({value:'Mr.'})
    await page.locator('//input[@name="firstname"]').fill(lead.Firstname)
    await page.locator('//input[@name="lastname"]').fill(lead.LastName)
    let lastname = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill(lead.company)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()

    //!validation
    let valid = await page.locator('//span[@id="dtlview_Last Name"]').textContent()
    if(lastname===valid){
        console.log('lead is created');
    }else{
        console.log('lead is not created');
    }
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
}) 

//pom

test("create_lead", async ({page}) => {
   let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)
    let lead_create=new leadpage(page)
    let num=random()
    let first1=lead_data.FirstnameQ+ num
    let last0= lead_data.LastNameQ+ num
    await lead_create.lead_details(first1, last0,lead_data.companyQ)
    

})
