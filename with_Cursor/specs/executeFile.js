import asisLoginPage from "../pageObject/asisLoginPage"
import * as constant from "../constant/const"
import asisHomePage from "../pageObject/asisHomePage"
import gm from "../pageObject/gm"


describe('Login to ASIS', () => {

        
    it('should login to ASIS', async () => {
        await browser.url(constant.asisURl)
        await browser.maximizeWindow()
        await asisLoginPage.enterUsername(constant.asisUsername)
        await asisLoginPage.enterPassword(constant.asisPassword)
        await browser.pause(3000)
        await asisLoginPage.clickLoginButton()
    })

    it('should select company and location', async () => {
        await asisHomePage.chooseCompany(constant.companyName)
        await browser.pause(3000)
        await asisHomePage.chooseLocation(constant.locationName)
        await asisHomePage.selectServiceIcon(constant.serviceName)
        await browser.pause(3000)
    })

    it("Creating new user department", async () => {
        // await gm.clickMasterDropDown()
        await gm.clickMasterSubModule(constant.masterSubModule)
        await gm.clickSubModuleDropDown(constant.subModuleValue)
        await browser.pause(3000)
        await gm.clickStandardUserDeptUserAreaCodeAddButton()
        await gm.enterUserDepartmentCode(constant.userDepartmentCode)
        await gm.enterUserDepartmentName(constant.userDepartmentName)
        await gm.clickSaveButton()
        await browser.pause(3000)
    }) 

})