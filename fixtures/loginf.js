
import { loginpage } from "../Pages/Login";
import{test as base} from "@playwright/test"

export const test= base.extend({
    loginadmin:async ({page},use)=>{
const signin=new loginpage(page)
await signin.launching()
await signin.details()
await use (page)
    }
})