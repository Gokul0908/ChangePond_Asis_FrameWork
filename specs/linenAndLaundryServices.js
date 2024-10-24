import LoginPage from "../pageobjects/loginPage"
import * as constant from "../Constants/const"
import asisHomePage from "../pageobjects/asisHomePage"
import GeneralMaster from "../pageobjects/GeneralMaster"
import fMSModule from "../pageobjects/fMSModule"
import fmsUserLocationMaster from "./../pageobjects/fmsUserLocationMaster"
import gmLinenGroup from "../pageobjects/gmLinenGroup"
import linenItemDetails from "../pageobjects/linenItemDetails"
import lls from "../pageobjects/lls"
import linenParRequirement from "../pageobjects/linenParRequirement"
import cleanLinenOrderLLS from "../pageobjects/cleanLinenOrderLLS"


describe("Creating a full flow for Linen and Laundry Services", async () => {

    before(async () => {
        await browser.url(constant.asisURL)
        await browser.maximizeWindow()
    })

    after(async () => {
        await asisHomePage.asisuserLogoutToTheApplication()
    })


    describe("Asis User Login to the Application and Creating User Area Master and User Location Master", async () => {


        it("Asis User Login to the Application and Creating Standard User Department Code  for LLS ", async () => {
            await LoginPage.asisUserLoginToTheApplication(constant.aUserName, constant.aPassword)
            await asisHomePage.chooseCompany(constant.company)
            await asisHomePage.chooseLocation(constant.location)
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await GeneralMaster.clickMasterDropDown(constant.masterSubModulesGeneral)
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleValues)
            await GeneralMaster.clickSUDAddButton()
            await GeneralMaster.enterUserDepartmentCode(constant.userDepartmentCode)
            await GeneralMaster.enterUserDepartmentName(constant.userDepartmentName)
            await GeneralMaster.clickSaveButton()
            await GeneralMaster.clickasisHeartIcon()
        })


        it("Creating user Area Master in FMS", async () => {

            await asisHomePage.hoverOnServiceIcon(constant.fmsServices)
            await asisHomePage.selectServicesIcon(constant.fmsServices)
            await fMSModule.clickMasterDropDown(constant.masterLocationSubModule)
            await fMSModule.clickSubModulesDropDown(constant.locationSubModule1)
            await fMSModule.clickUserAreaMasterAddButton()
            await fMSModule.enterFMSUserAreaCode(constant.fmsUserAreaCode)
            await fMSModule.enterFMSUserAreaName(constant.fmsUserAreaName)
            await fMSModule.enterfmsUserDepartCode(constant.userDepartmentCode)
            await fMSModule.clickLabelUDC()
            await browser.pause(3000)
            await fMSModule.entermySPATACode(constant.fmsMySpaCode)
            await fMSModule.selectCategoryOfAreaDropDown(constant.fmsCategoryOfArea)
            await fMSModule.setStatus(constant.fmsStatus)
            await fMSModule.selectlevel(constant.fmsLevel)
            await fMSModule.setWorkingHours(constant.fmsWorkingHours)
            await browser.pause(3000)
            await fMSModule.setTotalFloorArea(constant.fmsTotalFloorArea)
            await fMSModule.clickLabelLevel()
            await fMSModule.setStartServiceDate(constant.fmsStartServiceDate)
            await browser.pause(3000)
            await fMSModule.clickLabelSSD()
            //await fMSModule.selectHospitalRepresentative(constant.fmshospitalRepresentative)
            await fMSModule.selecthospital(constant.fmshospitalRepresentative)
            await browser.pause(3000)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.selectCompanyRepresentative(constant.fmsCompanyRep)
            await browser.pause(3000)
            await fMSModule.clickLabelDesignaton()
            await fMSModule.enterRemarks(constant.remarks)
            // await browser.pause(3000)
            await fMSModule.clickLabelSSD()
            await fMSModule.clickLabelLevel()
            await browser.pause(3000)
            await fMSModule.clickSaveButton()
            await fMSModule.checkSuccessNotification(constant.fmsSuccessMessage)
            await browser.pause(2000)

        })


        it("Creating user Location Master in FMS", async () => {

            await fMSModule.clickSubModulesDropDown(constant.locationSubModule2)
            await fmsUserLocationMaster.clickULMAddButton()
            await fmsUserLocationMaster.enterUserLocationCode(constant.fmsUserLocationCode)
            await fmsUserLocationMaster.enterUserLocationName(constant.fmsUserLocationName)
            await fmsUserLocationMaster.selectUserAreaCodeDropDown(constant.fmsUserAreaCode)
            await fmsUserLocationMaster.clickLabelUDC()
            await browser.pause(2000)
            await fmsUserLocationMaster.setStartServiceDate(constant.fmsStartServiceDate)
            await fmsUserLocationMaster.enterLocationSpecificName(constant.locationSpecificName)
            await fmsUserLocationMaster.clickLabelUDC()
            await browser.pause(2000)
            await fmsUserLocationMaster.clickLabelAuthorized()
            await fmsUserLocationMaster.setOperatingHours(constant.operatingHours)
            await fmsUserLocationMaster.setFloorArea(constant.floorArea)
            await fmsUserLocationMaster.setAirCondArea(constant.airCondArea)
            await fmsUserLocationMaster.selectCleansingCategory(constant.cleansingCategory)
            await fmsUserLocationMaster.selectCriticality(constant.criticality)
            await fmsUserLocationMaster.selectInstalledFacility(constant.installedFacility)
            await fmsUserLocationMaster.clickLabelDiscipline()
            await fmsUserLocationMaster.clickSaveButton()
            await fmsUserLocationMaster.checkSuccessNotification(constant.ULMSuccessMessage)
        });
    })

    describe("Creating Linen Group Code and Creating linen Item Details in GM ", async () => {

        it("Linen Group Code nd linen Item Details", async () => {

            await GeneralMaster.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.gmServices)
            await GeneralMaster.clickMasterDropDown(constant.masterSubModulesLLS)
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleLinenGroup)
            await gmLinenGroup.clicklinenGroupaddButton()
            await gmLinenGroup.enterlinengrpCode(constant.linenGrpCode)
            await gmLinenGroup.enterLinenGrpDescription(constant.linenGrpDescription)
            await gmLinenGroup.clickSaveButton()
            await browser.pause(2000)

            //Creating Linen Item Details
            await GeneralMaster.clickSubModulesDropDown(constant.subModuleLinenItemDetail)
            await linenItemDetails.clickAddButton()
            await linenItemDetails.selectHospitalSpecific(constant.hospitalSpecific)
            await linenItemDetails.enterLinenGrpCode(constant.linenGrpCode, constant.concatlinen)
            await linenItemDetails.selectLinenCategory(constant.linenCategory)
            await linenItemDetails.enterLinenCode(constant.linenCode)
            await linenItemDetails.enterLinenDescription(constant.linenDescription)
            await linenItemDetails.setLinenStatus(constant.linenStatus)
            await linenItemDetails.enterDimesionInput(constant.dimensionvalue)
            await browser.pause(2000)
            await linenItemDetails.enterEffectiveDate(constant.linenEffectiveDate)
            await linenItemDetails.selectLinenColor(constant.linenColor)
            await browser.pause(2000)
            await linenItemDetails.selectMaterial(constant.selectMaterial)
            await linenItemDetails.selectStandard(constant.selectStandard)
            await browser.pause(2000)
            await linenItemDetails.setStandardWeight(constant.standardWeight)
            await linenItemDetails.clickLabelRemarks()
            await browser.pause(2000)
            await linenItemDetails.clickSaveButton()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await browser.pause(2000)

        })
    })

    describe("Adding Linen Item Details , Linen Unit Price, User Department and Area Details in LLS", async () => {

        it("Linen Item Details in LLS", async () => {
            await asisHomePage.clickasisHeartIcon()
            await asisHomePage.selectServicesIcon(constant.llsServiceIcon)
            await lls.clickMasterDropDown(constant.masterDropDownLinenDetails)
            await lls.clickSubModulesDropDown(constant.subModuleLinenItemDetails)
            await lls.clickaddButton()
            await browser.pause(2000)
            await lls.enterLinenGrpCode(constant.linenCode, constant.concatLinenCode)
            await lls.clickSaveButton()
            await browser.pause(2000)
            await lls.clickAttachmentsTab()
            await lls.selectFileType(constant.fileType)
            await lls.enterFileName(constant.fileName)
            await lls.uploadFile(constant.filepath)
            await browser.pause(3000)
            // await lls.clickAttachmentSaveButton()
            await lls.clickAttachmentSaveButton2()
            await linenItemDetails.checkSuccessNotification(constant.lIDSuccessMessage)
            await browser.pause(3000)
        })

        it("Linen Unit Price in LLS ", async () => {
            await lls.clickSubModulesDropDown(constant.submoduleLinenUnitPrice)
            // await lls.getLinenCodeText()
            await lls.selectPageSize(constant.pagesize)
            // await lls.fillEmptyTextBoxes(constant.linenUnitPrice)
            await lls.enterUnitPriceRM(constant.linenUnitPrice)
            await lls.clickLinenUnitPriceSaveButton()
            // await browser.pause(3000)
            // await lls.clickSubModulesDropDown(constant.submoduleLinenParRequire)            
            // await linenParRequirement.selectPageSize(constant.pagesize)
            // await browser.pause(3000)
            // await linenParRequirement.selectparRequire(constant.parvalue, constant.pagesize)
            await browser.pause(2000)
        })

        it("Create UserDepartment and Area Details in lls", async () => {
            await lls.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await lls.clickaddButton()
            await browser.pause(2000)
            await lls.selectUserDepartmentArea(constant.fmsUserAreaCode, constant.concatfmsUserAreaCode)
            await browser.pause(2000)
            await lls.clickLabelRemarks()
            await lls.selecthospital(constant.hospitalname, constant.hospitalRepresentative)
            await browser.pause(3000)
            await lls.selectOperatingDays(constant.operatingDays)
            await browser.pause(3000)
            await lls.enterEffectiveDate(constant.effectiveDate)
            await lls.enterBagpieces(constant.bagpieces)
            await lls.enterDeliveryTime(constant.deliveryTime)
            await browser.pause(3000)
            await lls.clickLabelRemarks()
            await lls.enterCollectionTime(constant.collectionTime)
            await lls.enterLinenArrangementTime(constant.linenTime)
            await lls.selectCleansingAndSantizingDay(constant.SantizingDay)
            await lls.selectFurnishingItem(constant.furnishingItem)
            await lls.selectStartingMonth(constant.startingMonth)
            await lls.selectWeekDay(constant.weekDay)
            await browser.pause(3000)
            await lls.enterLinencode(constant.linenCode, constant.concatLinenCode1)
            await lls.enterPar1Require(constant.par1Require)
            await lls.enterPar2Require(constant.par2Require)
            await browser.pause(3000)
            await lls.selectDefaultIssue(constant.defaultIssue)
            await lls.clickUserDepartSaveButton()
            await browser.pause(3000)
            await lls.checkSuccessNotification(constant.lIDSuccessMessage)
            await lls.clickSubModulesDropDown(constant.submoduleUserDepartmentArea)
            await browser.pause(10000)
        })

    })

    describe("Creating Linen Order and Despatching in LLS", async () => {

        it("Linen Order and Despatching", async () => {
            await cleanLinenOrderLLS.clickTransactionDropDown(constant.transactionSubModule)
            await cleanLinenOrderLLS.clickSubModulesDropDown(constant.linenShipmentSubModule)
            await browser.pause(2000)
            await cleanLinenOrderLLS.clickaddButton()
            await cleanLinenOrderLLS.selectPriority(constant.priority)
            await cleanLinenOrderLLS.selectLinenCode(constant.concatLinenCode2, constant.linenCode)
            await browser.pause(2000)
            await cleanLinenOrderLLS.enterRequestedQuantity()
            await cleanLinenOrderLLS.clickSaveButton()
            await browser.pause(2000)
        })
    })
})