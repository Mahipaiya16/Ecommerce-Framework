class Login{

    constructor(page){

        this.page = page
        this.Username = page.getByPlaceholder("Username")
        this.Password = page.getByPlaceholder("Password")
        this.LoginBtn = page.getByRole('button',{name:"login-button"})
        this.ErrorMsg = page.locator(".error-message-container.error")
        
    }

    async goto(){

        await this.page.goto("https://www.saucedemo.com/")
    }

    async LoginToSauceDemo(){

        await this.Username.fill("standard_user")
        await this.Password.fill("secret_sauce")
        await this.LoginBtn.click()
    }

    async ClickonLoginBtn(){

        await this.LoginBtn.click()
    }

    async getErrorMsg(){

        return await this.ErrorMsg.textcontent()
    }
}
export default Login;