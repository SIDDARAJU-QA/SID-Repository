import { test } from "../../fixtures/project";
import contactd from '../../TestData/contact.json'
import { random } from "../../utils/random";

test("clontacting", async({contacts})=>{
    let num=random()
    let contf=contactd.Cfirst_name+num
    let contL= contactd.CLast_name+num
    await contacts.contact_details(contf,contL)
})