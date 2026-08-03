import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import { loginpage } from "../../Pages/Login"

test("logging", async ({page}) => {
let signin=new loginpage(page)
await page.goto(login.url)
await signin.login_username.fill(login.user_name)
await signin.login_password.fill(login.password)
await signin.login_button.click()    
})