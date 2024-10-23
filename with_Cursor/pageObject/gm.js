import ReusablesComponents from '../reuse'
import * as constant from '../constant/const'
class gm {

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


    async clickMasterDropDown() {
        await ReusablesComponents.waitAndClick(this.masterDropDown);
    }

    async clickMasterSubModule(subModule) {
        await ReusablesComponents.waitAndClick(this.masterDropDown);
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(subModule));
    }

    async clickSubModuleDropDown(subModuleValue) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValue));
    }

    async clickStandardUserDeptRefreshIcon() {
        await ReusablesComponents.waitAndClick(this.standardUserDeptRefreshIcon);
    }

    async clickStandardUserDeptUserAreaCodeAddButton() {
        await ReusablesComponents.waitAndClick(this.standardUserDeptUserAreaCodeaddButton);
    }

    async enterUserDepartmentCode(code) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, code);
    }

    async enterUserDepartmentName(name) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentName, name);
    }

    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton);
    }

    async clickAddNewButton() {
        await ReusablesComponents.waitAndClick(this.addNewButton);
    }

    async clickBackButton() {
        await ReusablesComponents.waitAndClick(this.backButton);
    }

    async clickSudAddButton() {
        await ReusablesComponents.waitAndClick(this.sudaddButton);
    }

    async clickAsisHeartIcon() {
        await ReusablesComponents.waitAndClick(this.asisHeartIcon);
    }
    
}
export default new gm()