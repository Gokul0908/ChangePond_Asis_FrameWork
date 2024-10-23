import asisLoginPage from "../pageObject/asisLoginPage";
import * as constant from "../constant/conts"
import asisHomePage from "../pageObject/asisHomePage";
import gm from "../pageObject/generalMaster"
describe("Executing linen and Laundary Service without Cursor AI", async () => {

    it("Login to the Asis Application ", async () => {
        await browser.url(constant.asisURl)
        await browser.maximizeWindow()
        await asisLoginPage.asisUserLogintotheApplication(constant.username, constant.password)
        await browser.pause(2000)
    })
    it("Creating Standard user Department", async () => {
        await asisHomePage.selectcompanyDropDown(constant.company)
        await asisHomePage.selectLocationDropDown(constant.location)
        await browser.pause(2000)
        await asisHomePage.selectServiceIcon(constant.serviceIcon)
        await gm.clickMasterSubModuleDD(constant.MastersubModule)
        await browser.pause(2000)
        await gm.clicksubModuleDD(constant.Generalsubmodule)
        await gm.clickAddButton()
        await gm.enterUserDepartmentCode(constant.userDepartmentCode)
        await gm.enterUserDepartmentName(constant.userDepartmentName)
        await gm.clickSaveButton()
        await browser.pause(2000)
    })
})