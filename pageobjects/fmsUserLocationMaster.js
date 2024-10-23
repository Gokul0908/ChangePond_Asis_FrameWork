import ReusablesComponents from "./reuse"
import * as Constant from "./../Constants/const"


class fmsAddUserLocationMaster {

    get UserLocationCode() { return $("//input[@id='txtUserLocationCode']") }
    get UserLocationName() { return $("//input[@id='txtUserLocationName']") }
    get LabelUDC() { return $("//label[.='User Department Code']") }
    get startServiceDate() { return $("//input[@name='EffectiveFrom']") }
    get userLocationMasteraddButton() { return $("//td[@id='Add']") }
    get userAreaCode() { return $("//input[@id='UserAreaCode']") }
    getUserAreaCodeDropDown(concatUserAreaCode) { return $(`//ul[@id='UlFetchUserAreaCode']/li/div/a[.='${concatUserAreaCode}']`) }
    getStatus(status) { return $(`//select[@ng-model='UserLocation.Status']/option[.='${status}']`) }
    get locationSpecificName() { return $("//input[@ng-model='UserLocation.LocationSpecificName']") }
    get LocationOperatingHours() { return $("//select[@ng-model='UserLocation.LocationOperatingHours']") }
    getLocationOperatingHours(operatingHours) { return $(`//select[@ng-model='UserLocation.LocationOperatingHours']/option[.='${operatingHours}']`) }
    get floorArea() { return $("//input[@ng-model='UserLocation.FloorArea']") }
    get airCondArea() { return $("//input[@ng-model='UserLocation.AircondArea']") }
    get cleansingCategory() { $("//select[@ng-model='UserLocation.CleansingCategory']") }
    getcleansingCategory(selectCategory) { return $(`//select[@ng-model='UserLocation.CleansingCategory']/option[.='${selectCategory}']`) }
    get selectcritical() { return $("//select[@ng-model='UserLocation.Criticality']") }
    getcriticality(selectCriticality) { return $(`//select[@ng-model='UserLocation.Criticality']/option[.='${selectCriticality}']`) }
    get installedFacility() { return $("//select[@ng-model='UserLocation.InstalledFacility']") }
    getInstalledFacility(selectFacility) { return $(`//select[@ng-model='UserLocation.InstalledFacility']/option[.='${selectFacility}']`) }
    get labelUDC() { return $("//label[text()='User Department Code']") }
    get labelAuthorized() { return $("//label[text()='Authorized Person ']") }
    get labelDiscipline() { return $("//label[text()='Discipline']") }
    get saveButton() { return $("//button[@title='Save']") }
    get addNewButton() { return $("//button[@title='Add New']") }
    get backButton() { return $("//button[@title='Back']") }
    get succesLabel() { return $("//div[@class='notify success']") }




    async clickULMAddButton() {
        await ReusablesComponents.waitAndClick(this.userLocationMasteraddButton)
    }

    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
    }
    async clickLabelDiscipline() {
        await ReusablesComponents.waitAndClick(this.labelDiscipline)
    }
    async clickLabelUDC() {
        await ReusablesComponents.waitAndClick(this.LabelUDC)
    }
    async clickLabelAuthorized() {
        await ReusablesComponents.waitAndClick(this.labelAuthorized)
    }
    async enterLocationSpecificName(LocationName) {
        await ReusablesComponents.waitAndSetValue(this.locationSpecificName, LocationName)
    }
    async enterUserLocationCode(userLocationCode) {
        await ReusablesComponents.waitAndSetValue(this.UserLocationCode, userLocationCode)
    }
    async enterUserLocationName(userLocationName) {
        await ReusablesComponents.waitAndSetValue(this.UserLocationName, userLocationName)
    }

    async selectUserAreaCodeDropDown(userAreaCode) {
        await ReusablesComponents.waitAndSetValue(this.userAreaCode, userAreaCode)
        // await this.getUserAreaCodeDropDown(Constant.concatfmsConcatUserAreaCode).waitForDisplayed({ timeout: 20000 })
        await this.getUserAreaCodeDropDown(Constant.concatfmsConcatUserAreaCode).click()
    }

    async selectCleansingCategory(selectCategory) {
        await ReusablesComponents.waitAndClick(this.getcleansingCategory(selectCategory))

    }

    async selectCriticality(selectCritical) {
        await ReusablesComponents.waitAndClick(this.getcriticality(selectCritical))
    }
    async selectInstalledFacility(selectFacility) {
        await ReusablesComponents.waitAndClick(this.getInstalledFacility(selectFacility))
    }
    async setOperatingHours(operatingHours) {
        await ReusablesComponents.waitAndClick(this.getLocationOperatingHours(operatingHours))
    }
    async selectStatus(status) {
        await ReusablesComponents.waitAndClick(this.getStatus(status))
    }
    async setFloorArea(floorArea) {
        await ReusablesComponents.waitAndSetValue(this.floorArea, floorArea)
    }
    async setAirCondArea(AirCondArea) {
        await ReusablesComponents.waitAndSetValue(this.airCondArea, AirCondArea)
    }


    async setStartServiceDate(startServiceDate) {
        await ReusablesComponents.waitAndSetValue(this.startServiceDate, startServiceDate)
    }
    
    async checkSuccessNotification(successMessage) {
        await this.succesLabel.waitForDisplayed({timeout:20000})
        const status = await ReusablesComponents.waitAndGetText(this.succesLabel)
        await expect(status).toBe(successMessage)
        console.log("User Area Master Status is::::::::::::::"+status)
        return status
    }

}

export default new fmsAddUserLocationMaster()