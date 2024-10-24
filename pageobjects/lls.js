import ReusablesComponents from "./reuse"

class lls {

    get masterDropDown() { return $("//a[.='Master']") }
    getMasterSubModules(MasterSubModules) { return $(`//span[.='${MasterSubModules}']`) }
    getSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }    
    get addButton() { return $("//td[@id='Add']") }
    get linenGrpCode() { return $("//input[@id='GmLinenCode']") }
    getLinenCodeDropDown(concatLinenCode) { return $(`//ul[@id='UlFetchGmLinenCode']/li/div/a[.='${concatLinenCode}']`) }
    get saveButton() { return $("(//button[@id='saveTab'])[1]") }
    get attachmentsTab() { return $("//a[.='Attachments']") }
    getFileType(filetype) { return $(`//select[@name='FileType']/option[.='${filetype}']`) }
    get fileName() { return $("//input[@ng-model='fileAttach.FileName']") }
    get chooseFile() { return $("//input[@type='file']") }
    get attachmentSaveButton() { return $("(//button[@id='saveUpdate'])[2]") }
    get attachmentSaveButton2() { return $("(//button[@id='saveTab'])[2]") }
    get linenItemCode() { return $("//input[@name='LinenCode']") }
    get unitPricerm() { return $("//input[@name='UnitPriceRM']") }
    get linenUnitPriceSaveBtn() { return $("//button[@id='saveWorkOrderbtn']") }
    getpagesize(pagesize) { return $(`//select[@ng-model='pageSize']/option[.='${pagesize}']`) }
    get userDepartmentCode() { return $("//input[@name='UserDepartmentCode']") }
    get hospitalRepresentative() { return $("//input[@name='HospitalRepresentative']") }
    getoperatingDays(noofDays) { return $(`//select[@ng-model='UserDepartment.OperatingDays']/option[.='${noofDays}']`) }
    get effectiveDate() { return $("//input[@name='EffectiveFromDate']") }
    getbag(count) { return $(`//input[@id='rentalSpace_${count}']`) }
    getdropDown(concatCodeName) { return $(`//ul[@id='UlUserAreaFetch']/li/div/a[.='${concatCodeName}']`) }
    get labelOperatiingDays() { return $("//label[text()='Operating Days ']") }
    gethospitalDropDown(concatHospitalRep) { return $(`//ul[@id='UlFetchHospital']/li/div/a[.= '${concatHospitalRep}']`) }
    get deliveryTime() { return $("//input[@ng-change='timeCalculate()']") }
    get deliveryTimeDropDown() { return $("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[1]") }
    gettime(deliveryTime) { return $(`(//div[@class='xdsoft_time_box xdsoft_scroller_box'])[1]/div/div[.='${deliveryTime}']`) }
    get collectionTime() { return $("//input[@id='txtC1stWindowCollectionStartTime']") }
    get collectionTimeDropDown() { return $("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[7]") }
    getCollectionTime(collectionTime) { return $(`(//div[@class='xdsoft_time_box xdsoft_scroller_box'])[7]/div/div[.='${collectionTime}']`) }
    get linenArrangement() { return $("//input[@id='txtArrangementStartTime']") }
    get linenArrangementTimeDropDown() { return $("(//div[@class='xdsoft_datetimepicker xdsoft_noselect xdsoft_'])[13]") }
    getLinenArrangementTime(linenTime) { return $(`(//div[@class='xdsoft_time_box xdsoft_scroller_box'])[13]/div/div[.='${linenTime}']`) }
    getfurnishingItem(furnishingItem) { return $(`//select[@id='txtFrequency']/option[.='${furnishingItem}']`) }
    getCleansingAndSantizingDay(SantizingDay) { return $(`//select[@id='ddlCleaningSanitizing']/option[.='${SantizingDay}']`) }
    getStartingMonth(startingMonth) { return $(`//select[@id='ddlMonth']/option[.='${startingMonth}']`) }
    getWeekDay(weekDay) { return $(`//select[@id='ddlweek']/option[.='${weekDay}']`) }
    get linencode() { return $("//input[@name='LinenCode']") }
    getUserDepartLinenCodeDropDown(concatLinenCode) { return $(`//ul[@id='UlFetch1']/li/div/a[.='${concatLinenCode}']`) }
    get par1Require() { return $("//input[@id='rentalSpace_8']") }
    get par2require() { return $("//input[@id='rentalSpace_9']") }
    getDefaultIssue(defaultIssue) { return $(`//select[@id='ddlDefaultIssue']/option[.='${defaultIssue}']`) }
    get userDepartSaveButton() { return $("(//button[.='Save'])[1]") }
    get succesLabel() { return $("//div[@class='notify success']") }


    async clickMasterDropDown(MasterSubModules) {
        await ReusablesComponents.waitAndClick(this.masterDropDown)
        await ReusablesComponents.waitAndClick(this.getMasterSubModules(MasterSubModules))
    }
    

    async clickLinenUnitPriceSaveButton() {
        await ReusablesComponents.waitAndClick(this.linenUnitPriceSaveBtn)
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getSubModuleDropDown(subModuleValues))
    }
    async clickAttachmentsTab() {
        await ReusablesComponents.waitAndClick(this.attachmentsTab)
    }

    async clickAttachmentSaveButton() {
        await ReusablesComponents.waitAndClick(this.attachmentSaveButton)
    }
    async clickAttachmentSaveButton2() {
        await ReusablesComponents.waitAndClick(this.attachmentSaveButton2)
    }

    async clickaddButton() {
        await ReusablesComponents.waitAndClick(this.addButton)
    }

    async enterLinenGrpCode(linenCode, concatLinenCode) {
        await ReusablesComponents.waitAndSetValue(this.linenGrpCode, linenCode)
        await this.getLinenCodeDropDown(concatLinenCode).click()
    }

    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.saveButton)
    }
    async selectFileType(filetype) {
        await ReusablesComponents.waitAndClick(this.getFileType(filetype))
    }
    async enterFileName(fileName) {
        await ReusablesComponents.waitAndSetValue(this.fileName, fileName)
    }

    async uploadFile(filepath) {

        const remoteFilePath = await browser.uploadFile(filepath)
        await this.chooseFile.waitForDisplayed()
        await this.chooseFile.setValue(remoteFilePath)
    }

    // async getLinenCodeText() {
    //     const linenItemCode = await ReusablesComponents.waitAndGetValue(this.linenItemCode)
    //     console.log("::::::::::Linen Item Code iS::::::::::::::" + linenItemCode)
    // }

    async enterUnitPriceRM(unitPrice) {
        await ReusablesComponents.waitAndSetValue(this.unitPricerm, unitPrice)

    }
    async selectPageSize(pagesize) {
        await ReusablesComponents.waitAndClick(this.getpagesize(pagesize))
    }

    async selectUserDepartmentArea(userDepartmentCode, concatCodeName) {
        await ReusablesComponents.waitAndSetValue(this.userDepartmentCode, userDepartmentCode)
        await this.getdropDown(concatCodeName).click()
    }


    async selecthospital(selectHospital, concatHospitalRep) {

        await ReusablesComponents.waitAndSetValue(this.hospitalRepresentative, selectHospital)
        await this.gethospitalDropDown(concatHospitalRep).click()
    }
    async selectOperatingDays(operatingDays) {
        await ReusablesComponents.waitAndClick(this.getoperatingDays(operatingDays))
    }

    async enterEffectiveDate(effectiveDate) {
        await ReusablesComponents.waitAndSetValue(this.effectiveDate, effectiveDate)
    }

    async enterBagpieces(bag) {
        for (let count = 0; count <= 7; count++) {
            await ReusablesComponents.waitAndSetValue(this.getbag(count), bag);
        }
    }

    async verifyTimeDropDown() {
        await this.deliveryTimeDropDown.waitForDisplayed()
    }

    async enterDeliveryTime(deliveryTime) {

        await ReusablesComponents.waitAndClick(this.deliveryTime)
        await this.verifyTimeDropDown()
        await this.gettime(deliveryTime).click()
    }

    async clickLabelRemarks() {
        await ReusablesComponents.waitAndClick(this.labelOperatiingDays)
    }

    async verifyCollectionTimeDropDown() {
        await this.collectionTimeDropDown.waitForDisplayed()
    }

    async enterCollectionTime(collectionTime) {
        await ReusablesComponents.waitAndClick(this.collectionTime)
        await this.verifyCollectionTimeDropDown()
        await this.getCollectionTime(collectionTime).click()
    }

    async verifyLinenArrangementTimeDropDown() {
        await this.linenArrangementTimeDropDown.waitForDisplayed()
    }

    async enterLinenArrangementTime(linenTime) {
        await ReusablesComponents.waitAndClick(this.linenArrangement)
        await this.verifyLinenArrangementTimeDropDown()
        await this.getLinenArrangementTime(linenTime).click()
    }

    async selectFurnishingItem(furnishingItem) {
        await ReusablesComponents.waitAndClick(this.getfurnishingItem(furnishingItem))
    }

    async selectCleansingAndSantizingDay(SantizingDay) {
        await ReusablesComponents.waitAndClick(this.getCleansingAndSantizingDay(SantizingDay))
    }

    async selectStartingMonth(startingMonth) {
        await ReusablesComponents.waitAndClick(this.getStartingMonth(startingMonth))
    }
    async selectWeekDay(weekDay) {
        await ReusablesComponents.waitAndClick(this.getWeekDay(weekDay))
    }

    async enterLinencode(linencode, concatLinenCode) {
        await ReusablesComponents.waitAndSetValue(this.linencode, linencode)
        await this.getUserDepartLinenCodeDropDown(concatLinenCode).click()
    }

    async enterPar1Require(par1Require) {
        await ReusablesComponents.waitAndSetValue(this.par1Require, par1Require)
    }

    async enterPar2Require(par2Require) {
        await ReusablesComponents.waitAndSetValue(this.par2require, par2Require)
    }

    async selectDefaultIssue(defaultIssue) {
        await ReusablesComponents.waitAndClick(this.getDefaultIssue(defaultIssue))
    }

    async clickUserDepartSaveButton() {
        await ReusablesComponents.waitAndClick(this.userDepartSaveButton)
    }

    async checkSuccessNotification(successMessage) {
        await this.succesLabel.waitForDisplayed({timeout:20000})
        const status = await ReusablesComponents.waitAndGetText(this.succesLabel)
        await expect(status).toBe(successMessage)        
        return status
    }

} export default new lls()