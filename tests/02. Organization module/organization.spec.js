import {test} from "@playwright/test"
import login from '../../TestData/Login.json'
import organize from '../../TestData/organ.json'
import { organizationpage } from "../../Pages/organization"
import { loginpage } from "../../Pages/Login"


//login
test("creating organization", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()
//organization 
await page.getByRole('link',{name:"Organizations"}).click()
await page.getByRole('img',{name:"Create Organization..."}).click()

await page.locator('//input[@name="accountname"]').fill("Accenture")
const accountname=await page.locator('//input[@name="accountname"]').inputValue()
await page.locator('//select[@name="industry"]').selectOption({value:"Consulting"})
await page.locator('//input[@name="assigntype"]').nth(1).check()
await page.getByRole('button',{name:"Save "}).first().click()
//validation
const org1= await page.locator('//span[@id="dtlview_Organization Name"]').textContent()

if (accountname===org1?.trim()){
    console.log("organization is added")
}else
    {
    console.log("invalid organization");
    
}
//logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.getByRole('link',{name:"Sign Out"}).click()

})

test("creating organize", async({page})=>{
await page.goto(login.url)
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()
//organization 
await page.getByRole('link',{name:"Organizations"}).click()
await page.getByRole('img',{name:"Create Organization..."}).click()

await page.locator('//input[@name="accountname"]').fill(organize.organization)
const accountname=await page.locator('//input[@name="accountname"]').inputValue()
await page.locator('//select[@name="industry"]').selectOption({value:"Consulting"})
await page.locator('//input[@name="assigntype"]').nth(1).check()
await page.getByRole('button',{name:"Save "}).first().click()
//validation
const org1= await page.locator('//span[@id="dtlview_Organization Name"]').textContent()

if (accountname===org1?.trim()){
    console.log("organization is added")
}else
    {
    console.log("invalid organization");
    
}
//logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.getByRole('link',{name:"Sign Out"}).click()

})

//pom

test("organ pom", async ({page}) => {
    let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)

    let organiz=new organizationpage(page)
    await organiz.organ_details(organize.organization)
    
})