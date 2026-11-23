//import {test,expect} from '@playwright/test'
import { PageObjectManager } from '../pages/pageObject';
import {test} from '../fixtures/role.ts'

 
let pageObject:PageObjectManager;

test.beforeEach('Before Each', async({page})=>{
   //await page.goto('https://tutorialsninja.com/demo/')
    pageObject=new PageObjectManager(page)
})

test.describe('Product Search', () => {
test('Search for existiing product @regression', async ({adminUser}) => {
    
    const productName = "MacBook";
  // Step 2 & 3: Enter product name and click Search
  await pageObject.homePage.enterProductName(productName);
  await pageObject.homePage.clickSearch();

});
test('Search Product with general User',async({generalUser})=>{

} )
})
