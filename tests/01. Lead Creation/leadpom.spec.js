import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import lead_data from '../../TestData/Lead.json'
import { leadpage } from "../../Pages/lead"
import { loginpage } from "../../Pages/Login"

test("create_lead", async ({page}) => {
   let sign=new loginpage(page)
    await sign.launching(login.url)
    await sign.details(login.user_name, login.password)
    let lead_create=new leadpage(page)
    await lead_create.lead_details(lead_data.FirstnameQ, lead_data.LastNameQ, lead_data.companyQ)
    
})
