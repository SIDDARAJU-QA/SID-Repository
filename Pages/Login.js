import { expect } from "@playwright/test"

export class loginpage{
    constructor(page){
        this.page=page
        this.login_username=page.locator('//input[@name="user_name"]')
        this.login_password=page.locator('//input[@name="user_password"]')
        this.login_button=page.getByRole('button',{name:"Login"})
    }

    //to simplify
    async launching(url){
        await this.page.goto(url)
        await expect(this.page).toHaveURL(url)
        
    }
async details(username,password){
await this.login_username.fill(username)
await this.login_password.fill(password)
await this.login_button.click()
}
}