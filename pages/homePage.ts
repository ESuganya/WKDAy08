
import { Locator, Page } from "playwright"
export class HomePage{

    private readonly pge:Page
    private readonly myAccountBtn:Locator
    private readonly linkLogin:Locator
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;
    private readonly lnkRegister: Locator;

    constructor(page:Page)
    {
        this.pge=page
        this.myAccountBtn=page.locator('span', {hasText:'My Account'})
        this.linkLogin=page.getByRole('link', {name:'Login'})
         this.txtSearchbox = page.getByPlaceholder('Search', {exact:true})
        this.btnSearch = page.locator('#search button[type="button"]');
        this.lnkRegister = page.getByRole('link', { name: 'Register' })

    }

    async isHomePageExist()
    {
        let title:string=await this.pge.title();
        if(title.includes('hoempafe'))
            return true
        else
            return false
    }
    //Actions
    async clickMyAccount()
    {
        await this.myAccountBtn.click();
    }

   async clickLoginLink()
    {
        await this.linkLogin.click();
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
            await this.txtSearchbox.fill(pName);}

    // Click the search button
    async clickSearch(){  
            await this.btnSearch.click();      
    }
}