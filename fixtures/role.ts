
import {test as base } from '@playwright/test'
import { Page } from '@playwright/test'

type roleFixture={
    adminUser:Page;
    generalUser:Page;
}

export const test = base.extend<roleFixture>({
    adminUser: async({page}, use)=>{

        //Login steps for admin
        await page.goto('https://tutorialsninja.com/demo/')
         await page.getByRole('link', {name:'My Account'})

         await use(page)

         //console.log('Test completes')

    },

    generalUser: async({page}, use)=>{

        //All the steps
        await use(page)




    }

})