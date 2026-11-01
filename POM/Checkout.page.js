class Checckout{

    constructor(page){

        this.page = page;
        this.first_name = page.getByPlaceholder("First Name")
        this.last_name = page.getByPlaceholder("Last Name")
        this.zip_code = page.getByPlaceholder("Zip/Postal Code")
        this.cancel = page.getByRole('button',{name:"cancel"})
        this.continue = page.getByRole('button',{name:"continue"})
        this.eroormessage = page.locator(".error-message-container.error")
    }
    async fillYourInfo(){
        await this.first_name.fill("Mahii")
        await this.last_name.fill("Kumar")
        await this.zip_code.fill(627801)
    }

    async ClickOnCancelButton(){
        await this.cancel.click()
    }

    async ClickOnContinueButton(){
        await this.continue.click()
    }

    async FillandContinue(){
        await this.fillYourInfo()
        await this.ClickOnContinueButton()
    }

    async ErroronCheckout(){
        await this.eroormessage.textcontent()

    }
    
}

export default Checckout;