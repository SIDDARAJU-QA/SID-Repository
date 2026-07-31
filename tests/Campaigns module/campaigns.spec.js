import{test} from "@playwright/test"

test.skip("camapign module", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

const more = page.getByRole('link', { name: 'More' }).first();
await more.hover();
await page. getByRole('link',{name:"Campaigns"}).click()
await page.getByRole('link',{name:"Create Campaign..."}).click()
await page.locator('//input[@name="campaignname"]').fill("Public campaign")
const campaign_name=await page.locator('//input[@name="campaignname"]').inputValue()
await page. locator('//input[@value="T"]').click()

await page.getByRole('button',{name:"Save "}).first().click()
const valid=await page. locator('//span[@id="dtlview_Campaign Name"]').textContent()
if(campaign_name===valid){
    console.log("valid")
}else
    {
        console.log("invalid");
        
    }

})

