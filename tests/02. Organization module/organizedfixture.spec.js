import { test } from "../../fixtures/project"
import organize2 from '../../TestData/organ.json'
import { random } from "../../utils/random"

test("orgcreate", async({organization1})=>{
let num=random()
    let org1=organize2.organization+num
    await organization1.organ_details(org1)
})