import {test} from "@playwright/test"
import Login from "../POM/Login.page"

test("Login to Sauce Demo", async({page})=>{

    let login = new Login(page)
    await login.goto()
    await login.LoginToSauceDemo()
})