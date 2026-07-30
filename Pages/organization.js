

export class organizationpage{
    constructor(page){
        this.page=page
        this.organ_link=page.getByRole('link',{name:"Organizations"})
        this.organ_create=page.getByRole('img',{name:"Create Organization..."})
        this.organ_name=page.locator('//input[@name="accountname"]')
        this.organ_industrytype=page.locator('//select[@name="industry"]')
        this.organ_assignTo=page.locator('//input[@name="assigntype"]').nth(1)
        this.organ_save=page.getByRole('button',{name:"Save "}).first()
    }
    async organ_details(name){
        await this.organ_link.click()
        await this.organ_create.click()
        await this.organ_name.fill(name)
        await this.organ_industrytype.selectOption({value:"Consulting"})
        await this.organ_assignTo.check()
        await this.organ_save.click()

    }
}