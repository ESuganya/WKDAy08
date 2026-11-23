
import { HomePage } from "./homePage";
import { LoginPage } from "./loginPage";
import { Page } from "playwright";

export class PageObjectManager{

    //page:Page
    homePage:HomePage;
    loginPage:LoginPage;

    constructor(page:Page)
    {
        this.homePage=new HomePage(page)
        this.loginPage=new LoginPage(page)
    }
}