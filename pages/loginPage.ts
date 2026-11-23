import { Locator, Page } from "playwright"

export class LoginPage{

    private readonly pge:Page
    private readonly email:Locator
    private readonly pwd:Locator
    private readonly loginBtn:Locator

    constructor(page:Page)
    {
        this.pge=page
        this.email=page.getByPlaceholder('E-Mail Address')
        this.pwd=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button', {name:'Log out'})
    }

    async setEmail(email:string)
    {
        await this.email.fill(email)
    }

    async setPwd(pwd:string)
    {
        await this.pwd.fill(pwd)

    }

    async clickLoginBtn()
    {
        await this.loginBtn.click()
    }
}