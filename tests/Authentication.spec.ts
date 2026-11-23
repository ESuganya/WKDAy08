
import {test,expect} from '@playwright/test'

import {PageObjectManager} from '../pages/pageObject'
import {testConfig} from '../test.config'


let pageObject:PageObjectManager;


test.beforeEach('Before Each', async({page})=>{
    await page.goto(testConfig.baseURL)
     pageObject=new PageObjectManager(page)
})

test.describe('Authetication', ()=>{
test.only('Login',{tag:'@smoke'}, async({page})=>{

    await expect(pageObject.homePage.isHomePageExist()).toBeTruthy();

    await pageObject.homePage.clickMyAccount();
    await pageObject.homePage.clickLoginLink();

    await pageObject.loginPage.setEmail(testConfig.username)
    await pageObject.loginPage.setPwd(testConfig.password)
    await pageObject.loginPage.clickLoginBtn();


})

test('Logout', {tag:'@regression'}, ()=>{


})
})