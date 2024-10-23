import * as Constant from "./../Constants/const"
import ReusablesComponents from "./reuse"


class FMSModule {

    get masterDropDown() { return $("//a[.='Master']") }
    getMasterSubModules(MasterSubModules) { return $(`//span[.='${MasterSubModules}']`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    getCategoryofArea(AreaName) { return $(`//select[@name='CategoryofArea']/option[.='${AreaName}']`) }
    //get companyMasterAddButton() { return $("//span[@class='ui-icon ui-icon-refresh']") }
    get userAreaMaterRefreshIcon() { return $("//span[@class='ui-icon ui-icon-refresh']") }
    get userAreaMasteraddButton() { return $("//td[@id='Add']") }
    get uamUserAreaCode() { return $("//input[@ng-model='AreaCode']") }
    get uamuserAreaName() { return $("//input[@ng-model='AreaName']") }
    get userDepartmentCode() { return $("//input[@id='Departmentcode']") }
    get mySPATACode() { return $("//input[@id='ContactPerson']") }
    get categoryOfAreaDropDown() { return ("//select[@name='CategoryofArea']") }
    //get statusDropDown() { return $("//select[@ng-model='ngStatus']") }
    getStatus(status) { return $(`//select[@ng-model='ngStatus']/option[.='${status}']`) }
    //get levelDropDown() { return $("//select[@ng-model='ngLevel']") }
    getlevelDropDown(selectLevel) { return $(`//select[@ng-model='ngLevel']/option[.='${selectLevel}']`) }
    get startServiceDate() { return $("//input[@id='startDate']") }
    get hospitalRepresentative() { return $("//input[@name='requestno']") }
    get companyRepresentative() { return $("//input[@name='companyrepresentative']") }
    get userLocationCode() { return $("//input[@id='txtUserLocationCode']") }
    get userLocationName() { return $("//input[@id='txtUserLocationName']") }
    get ulmUserAreaCode() { return $("//input[@id='UserAreaCode']") }
    // get startServiceDate() { return $("//input[@name='EffectiveFrom']") }
    get locationOperatingHours() { return $("//select[@id='ddlLocationOperatingHours']") }
    getWorkingHours(hours) { return $(`//select[@name='WorkingHours']/option[.='${hours}']`) }
    get totalFloorArea() { return $("//input[@name='FloorArea']") }
    get airCondArea() { return $("//input[@name='AircondArea']") }
    get cleansingCategory() { return $("//select[@name='CleansingCategory']") }
    get criticality() { return $("//select[@name='Criticality']") }
    get installedFacility() { return ("//select[@name='InstalledFacility']") }
    get saveButton() { return $("//button[@id='Add']") }
    get addNewButton() { return $("//button[@title='Add New']") }
    get backButton() { return $("//button[@title='Back']") }
    get labelLevel() { return $("//label[.='Level']") }
    get labelRemarks() { return $("//label[.='Remarks']") }
    get labelUDC() { return $("//label[text()='User Department code ']") }
    get asisHeartIcon() { return $("//img[@alt='Ministry of Health']") }
    get labelSSD() { return $("(//label[text()='Stop Service Date '])[2]") }
    // get labelHR(){ return $("//label[text()='Hospital Representative ']")}    
    get labelDesignation() { return $("(//label[text()='Designation'])[1]") }
    getdropDown(concatCodeName) { return $(`//ul[@id='UlFetch']/li/div/a[.='${concatCodeName}']`) }
    gethospitalDropDown(concatHospitalRep) { return $(`//ul[@id='UlFetchHospital']/li/div/a[.='${concatHospitalRep}']`) }
    getCompanyDropDown(concatCompanyRep) { return $(`//ul[@id='UlFetchCompany']/li/div/a[.='${concatCompanyRep}']`) }
    getUserAreaCodeDropDown(concatUserAreaCode) { return $(`//ul[@id='UlFetchUserAreaCode']/li/div/a[.='${concatUserAreaCode}']`) }
    get succesLabel() { return $("//div[@class='notify success']") }
    get unsavedChangePopup() { return $("//button[.='No']") }
    get remarks() { return $("//textarea[@name='Remarks']") }   

    async clickMasterDropDown(masterSubModules) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(masterSubModules))
    }
    async enterRemarks(remarks) {
        await ReusablesComponents.waitAndSetValue(this.remarks, remarks)
    }

    async checkSuccessNotification(successMessage) {
        await this.succesLabel.waitForDisplayed({ timeout: 20000 })
        const status = await ReusablesComponents.waitAndGetText(this.succesLabel)
        await expect(status).toBe(successMessage)
        console.log("User Area Master Status is::::::::::::::" + status)
        return status
    }

    async clickUnSavedPopup() {
        await ReusablesComponents.waitAndClick(this.unsavedChangePopup)
    }
    async clickLabelSSD() {
        await this.labelSSD.waitForDisplayed()
        await this.labelSSD.click()
    }
    async clickLabelDesignaton() {
        await this.labelDesignation.waitForDisplayed()
        await this.labelDesignation.click()
    }
    async clickLabelLevel() {
        await this.labelLevel.waitForDisplayed()
        await this.labelLevel.click()
    }
    async clickLabelUDC() {
        await this.labelUDC.waitForDisplayed()
        await this.labelUDC.click()
    }
    async clickRemarks() {
        await this.labelRemarks.waitForDisplayed()
        await this.labelRemarks.click()
    }
    async clickasisHeartIcon() {
        await this.asisHeartIcon.waitForDisplayed()
        await this.asisHeartIcon.click()
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }
    async clickUserAreaMasterAddButton() {
        await ReusablesComponents.waitAndClick(this.userAreaMasteraddButton)
    }
    async enterFMSUserAreaCode(fmsUserAreaCode) {
        await ReusablesComponents.waitAndSetValue(this.uamUserAreaCode, fmsUserAreaCode)
    }
    async enterFMSUserAreaName(fmsUserAreaName) {
        await ReusablesComponents.waitAndSetValue(this.uamuserAreaName, fmsUserAreaName)
    }
    async selectCategoryOfAreaDropDown(AreaName) {
        // await ReusablesComponents.waitAndClick(this.categoryOfAreaDropDown)
        await ReusablesComponents.waitAndClick(this.getCategoryofArea(AreaName))
    }

    async entermySPATACode(fmsMySpaCode) {
        await ReusablesComponents.waitAndSetValue(this.mySPATACode, fmsMySpaCode)
    }

    async selectlevel(selectlevel) {
        await ReusablesComponents.waitAndClick(this.getlevelDropDown(selectlevel))
    }
    async setWorkingHours(hours) {
        await ReusablesComponents.waitAndClick(this.getWorkingHours(hours))
    }
    async setStatus(status) {
        await ReusablesComponents.waitAndClick(this.getStatus(status))
    }
    async setTotalFloorArea(floorArea) {
        await ReusablesComponents.waitAndSetValue(this.totalFloorArea, floorArea)
    }
    async setStartServiceDate(startServiceDate) {
        await ReusablesComponents.waitAndSetValue(this.startServiceDate, startServiceDate)
    }

    async enterfmsUserDepartCode(userDepartmentCode) {
        // await this.userDepartmentCode.click()
        // await this.userDepartmentCode.setValue(userDepartmentCode)
        // const selectvalue= await this.dropDown
        // selectvalue.selectByVisibleText(userDepartmentCode)
        await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)
        // await this.getdropDown(Constant.concatCodeName).waitForDisplayed({timeout:20000})
        await this.getdropDown(Constant.concatCodeName).click()
    }


    async selecthospital(selectHospital) {
        // await ReusablesComponents.waitAndClick(this.hospitalrep)
        // //await this.hospitalrep.setValue()
        // await this.hospitalrep.selectByVisibleText(hospitalRepresentative).click()
        await ReusablesComponents.waitAndSetValue(this.hospitalRepresentative, selectHospital)
        // await this.gethospitalDropDown(Constant.concatHospitalRep).waitForDisplayed()
        await this.gethospitalDropDown(Constant.concatHospitalRep).click()
    }

    async selectHospitalRepresentative(hospitalRepresentative) {
        await ReusablesComponents.waitAndSetValue(this.hospitalRepresentative, hospitalRepresentative)
    }

    async selectCompanyRepresentative(companyRepresentative) {
        await ReusablesComponents.waitAndSetValue(this.companyRepresentative, companyRepresentative)
        // await this.getCompanyDropDown(Constant.concatCompanyRep).waitForDisplayed()
        await this.getCompanyDropDown(Constant.concatCompanyRep).click()
    }
    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
    }


}

export default new FMSModule()