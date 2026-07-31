import{test} from "@playwright/test"
import login from '../../TestData/Login.json'
import product from '../../TestData/product.json'
import { loginpage } from "../../Pages/Login"
import { productpage } from "../../Pages/product"

test.skip("creating product", async({page})=>{
await page.goto("http://localhost:8888/")
await page.locator('//input[@name="user_name"]').fill(login.user_name)
await page.locator('//input[@name="user_password"]').fill(login.password)
await page.getByRole('button',{name:"Login"}).click()

await page.getByRole('link',{name:"PRODUCTS"}).click()
await page.getByRole('img',{name:"Create Product..."}).click()
await page.locator('//input[@name="productname"]').fill(product.productname)
const product_name=await page.locator('//input[@name="productname"]').inputValue()
await page.getByRole('button',{name:"Save "}).first().click()
const prod=await page.locator('//span[@id="dtlview_Product Name"]').textContent()
//console.log(contact);
if(product_name===prod){
    console.log("valid");
    
}else{
    console.log("invalid");
    
}

// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.getByRole('link',{name:"Sign Out"}).click()

})

//pom

test("prodcreate1",async ({page}) => {
    let signin=new loginpage(page)
    await signin.launching(login.url)
    await signin.details(login.user_name, login.password)

    let prod=new productpage(page)
    await prod.product_details(product.productname)
    
})
