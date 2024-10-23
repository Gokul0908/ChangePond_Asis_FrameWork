import reusableComponents from "./reuse"

class gm{

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


    async clickMaterDropDown(){
        await reusableComponents.waitAndClick(this.masterDropDown)
    }
    async clickMasterSubModuleDD(MasterSubModule){
        await reusableComponents.waitAndClick(this.masterDropDown)
        await reusableComponents.waitAndClick(this.getMasterSubModules(MasterSubModule))
    }

    async clicksubModuleDD(selectsubmodule){
        await reusableComponents.waitAndClick(this.getSubModuleDropDown(selectsubmodule))
    }
    async clickAddButton(){
        await reusableComponents.waitAndClick(this.standardUserDeptUserAreaCodeaddButton)
    }
    async enterUserDepartmentCode(userDepartmentCode){
        await reusableComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)
    }
    async enterUserDepartmentName(userDepartmentName){
        await reusableComponents.waitAndSetValue(this.userDepartmentName, userDepartmentName)
    }
    async clickSaveButton(){
        await reusableComponents.waitAndClick(this.saveButton)
    }

}export default new gm()