
// export class contactpage{
//     constructor (page){
//         this.page=page
//         this.contact_link=page.getByRole('link',{name:"Contacts"})
//         this.contact_create=page.getByRole('img',{name:"Create Contact..."})
//         this.contact_slectdrop=page.locator('//select[@name="salutationtype"]')
//         this.contact_firstname=page.locator('//input[@name="firstname"]')
//         this.contact_lastname=page.locator('//input[@name="lastname"]')
//         this.contact_popup=page.getByRole('img',{name:"Select"}).first()
//         this.contact_save=page.getByRole('button',{name:"Save "}).first()
//     }
//     async contact_details(firstname, lastname){
//         await this.contact_link.click()
//         await this.contact_create.click()
//         //before utils
//         //await this.contact_slectdrop.selectOption({value:"Mr."})
        
//         await this.contact_firstname.fill(firstname)
//         await this.contact_lastname.fill(lastname)
//         
// befor utils
// const [orgpage]= await Promise.all([
//             this.page. waitForEvent('popup'),
//             this.contact_popup.click()
//         ])
//         await orgpage.getByRole('link',{name:"Accenture"}).click()
//         await this.contact_save.click()
//     }
// }


import { dropdown } from "../utils/dropdown"
import {window} from "../utils/windowHandling"
export class contactpage{
    constructor (page){
        this.page=page
        this.contact_link=page.getByRole('link',{name:"Contacts"})
        this.contact_create=page.getByRole('img',{name:"Create Contact..."})
        this.contact_slectdrop=page.locator('//select[@name="salutationtype"]')
        this.contact_firstname=page.locator('//input[@name="firstname"]')
        this.contact_lastname=page.locator('//input[@name="lastname"]')
        this.contact_popup=page.getByRole('img',{name:"Select"}).first()
        this.contact_save=page.getByRole('button',{name:"Save "}).first()
    }
    async contact_details(firstname, lastname){
        await this.contact_link.click()
        await this.contact_create.click()
        //after utils
        await dropdown(this.contact_slectdrop,{value:"Mr."})
    
        await this.contact_firstname.fill(firstname)
        await this.contact_lastname.fill(lastname)
        //after utils
        const orgpage= await window(
            this.page,
            this.contact_popup.click()
        );
        await orgpage.getByRole('link',{name:"Accenture"}).click()
        await this.contact_save.click()
    }
}