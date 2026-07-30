export class opertunitypage{
    constructor(page){
        this.page=page
        this.opertunity_link=page.getByRole('link',{name:"Opportunities"})
        this.opertunity_create=page.getByRole('img',{name:"Create Opportunity..."})
        this.opertunity_name=page. locator('//input[@name="potentialname"]')
        this.opertunity_relatedto=page.locator('//select[@id="related_to_type"]')
        this.opertunity_contactdrop= page.locator('//img[@title="Select"]').first()
        this.opertunity_salesstage=page.locator('//select[@name="sales_stage"]')
        this.opertunity_closedate=page.locator('//img[@id="jscal_trigger_closingdate"]')
        this.opertunity_selectingdate=page.getByRole('cell',{name:"16"})
        this.opertunity_save=page.getByRole('button',{name:"Save "}).first()
    }
async opertunity_deatails(opertunity_name){
    await this.opertunity_link.click()
    await this.opertunity_create.click()
    await this.opertunity_name.fill(opertunity_name)
    await this.opertunity_relatedto.selectOption({value:"Contacts"})
    const [contact]=await Promise.all([
    this.page.waitForEvent('popup'),
    this.opertunity_contactdrop.click()
    ])
    await contact.getByRole('link',{name:"mahith sanjay"}).click()
    await this.opertunity_salesstage.selectOption({value:"Proposal/Price Quote"})
    await this.opertunity_closedate.click()
    await this.opertunity_selectingdate.click()
    await this.opertunity_save.click()
}


}