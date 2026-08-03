import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import lead_data from '../../TestData/Lead.json'
import { leadpage } from "../../Pages/lead"
import { loginpage } from "../../Pages/Login"

import { random } from "../../utils/random"

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