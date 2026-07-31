import{expect, test} from "@playwright/test"
import login from '../../TestData/Login.json'
import contact_c from '../../TestData/contact.json'
import { contactpage } from "../../Pages/contact"
import { loginpage } from "../../Pages/Login"
//after utils importing random
import { random } from "../../utils/random"

test.skip("creating contact", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"Contacts"}).click()
await page.getByRole('img',{name:"Create Contact..."}).click()
await page.locator('//select[@name="salutationtype"]').selectOption({value:"Mr."})
await page.locator('//input[@name="firstname"]').fill("Arun")
await page.locator('//input[@name="lastname"]').fill("Gondale")
const contact1=await page.locator('//input[@name="lastname"]').inputValue() 
const [orgpage]= await Promise.all([
    page. waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()
])
await orgpage.getByRole('link',{name:"Accenture"}).click()
await page.getByRole('button',{name:"Save "}).first().click()
const contact=await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//console.log(contact);
if(contact1===contact){
    console.log("valid");
    
}else{
    console.log("invalid");
    
}

// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.getByRole('link',{name:"Sign Out"}).click()

})


//

test.skip("creating contact1", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"Contacts"}).click()
await page.getByRole('img',{name:"Create Contact..."}).click()
await page.locator('//select[@name="salutationtype"]').selectOption({value:"Mr."})
await page.locator('//input[@name="firstname"]').fill(contact_c.Cfirst_name)
await page.locator('//input[@name="lastname"]').fill(contact_c.CLast_name)
await expect(page.locator('//input[@name="lastname"]')).toHaveValue(contact_c.CLast_name)
const contact1=await page.locator('//input[@name="lastname"]').inputValue() 
const [orgpage]= await Promise.all([
    page. waitForEvent('popup'),
    page.getByRole('img',{name:"Select"}).first().click()
])
await orgpage.getByRole('link',{name:"Accenture"}).click()
await page.getByRole('button',{name:"Save "}).first().click()
const contact=await page.locator('//span[@id="dtlview_Last Name"]').textContent()
//console.log(contact);
if(contact1===contact){
    console.log("valid");
    
}else{
    console.log("invalid");
    
}
})


//pom


test.skip("creat_contact", async ({page}) => {
    let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)

    let contact_1=new contactpage(page)
    await contact_1.contact_details(contact_c.Cfirst_name, contact_c.CLast_name)
    
})

//after utils code looks like

test.skip("contact using utils", async ({page}) => {
    let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)

    let contact_1=new contactpage(page)
    let num=random()
    let first=contact_c.Cfirst_name + num
    let last= contact_c.CLast_name + num
    await contact_1.contact_details(first,last)

})
