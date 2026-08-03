import { dropdown } from "../utils/dropdown"

export class leadpage{
    constructor(page){
        this.page=page
        this.leadlink=page.getByRole('link',{name:"LEADS"})
        this.createlead_button=page.getByRole('img',{name:"Create Lead..."})
        this.Firstname_dropdown=page.locator('//select[@name="salutationtype"]')
        this.lead_firstname=page.locator('//input[@name="firstname"]')
        this.lead_lastname=page.locator('//input[@name="lastname"]')
        this.lead_company=page.locator('//input[@name="company"]')
        this.Lead_savebutton=page.locator('(//input[@title="Save [Alt+S]"])[1]')

    }
    async lead_details(firstname,lastname,company ){    //xyz makes positioning
        await this.leadlink.click()
        await this.createlead_button.click()
        //Before utils
        //await this.Firstname_dropdown.selectOption({value:'Mr.'})
        
        // using utils
        await dropdown(this.Firstname_dropdown,{value:'Mr.'})
        await this.lead_firstname.fill(firstname)
        await this.lead_lastname.fill(lastname)
        await this.lead_company.fill(company)
        await this.Lead_savebutton.click()

    }

}