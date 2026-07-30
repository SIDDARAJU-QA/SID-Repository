import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import { loginpage } from "../../Pages/Login"
import { sign } from "node:crypto"

test("creating login", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill("admin")
await page.locator('//input[@name="user_password"]').fill("admin")
await page.getByRole('button',{name:"Login"}).click()

})

//pom

test("logging", async ({page}) => {
let signin=new loginpage(page)
await page.goto(login.url)
await signin.login_username.fill(login.user_name)
await signin.login_password.fill(login.password)
await signin.login_button.click()    
})

//simplify

test.only("loggin second time",async ({page}) => {
    let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)
})