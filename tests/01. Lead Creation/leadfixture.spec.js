import { test } from "../../fixtures/project"
import { random } from "../../utils/random"



test("leadslist", async({leads})=>{
    let num=random()
    let first1=lead_data.FirstnameQ+ num
    let last0= lead_data.LastNameQ+ num
    await leads.lead_details(first1, last0,lead_data.companyQ)

})