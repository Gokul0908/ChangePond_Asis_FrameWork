import ReusablesComponents from "./reuse"

class generalmaster {

    get masterDropDown() { return $("//a[.='Master']") }
    getMasterSubModules(MasterSubModules) { return $(`//span[.='${MasterSubModules}']`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get standardUserDeptRefreshIcon() { return $("//span[@class='ui-icon ui-icon-refresh']") }
    get standardUserDeptUserAreaCodeaddButton() { return $("//td[@id='Add']") }
    get userDepartmentCode() { return $("//input[@name='UserDepartmentCode']") }
    get userDepartmentName() { return $("//input[@name='UserDepartmentName']") }
    get saveButton() { return $("//button[@id='insert']") }
    get addNewButton() { return $("//button[@id='addnew']") }
    get backButton() { return $("(//button[.='Back'])[1]") }
    get sudaddButton() { return $("//td[@id='Add']") }
    get asisHeartIcon() { return $("//img[@alt='Ministry of Health']") }

    async clickMasterDropDown(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }
    async clickasisHeartIcon() {
        await ReusablesComponents.waitAndClick(this.asisHeartIcon)
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }
    async clickSUDAddButton() {
        await ReusablesComponents.waitAndClick(this.sudaddButton)
    }
    async enterUserDepartmentCode(userDepartmentCode) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)
    }

    async enterUserDepartmentName(userDepartmentName) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentName, userDepartmentName)
    }
    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
    }

}
export default new generalmaster()

