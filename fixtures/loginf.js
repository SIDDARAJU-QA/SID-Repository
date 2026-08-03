
import { loginpage } from "../Pages/Login";
import{test as base} from "@playwright/test"
import login from '../TestData/Login.json'

export const test= base.extend({
    loginadmin:async ({page},use)=>{
const signin=new loginpage(page)
await signin.launching(login.url)
await signin.details(login.user_name,login.password)
await use (page)
    }
})