import { getCurrentMonth, getRandomTime, getTodayDate } from "../Date_TimeFunction"
import utils from "./../utils/utilities"

export const asisURL = "http://172.16.0.60:7500/Account/Login?ReturnUrl=%2fGM%2fstandarduserdepartment%2fadd"
export const aUserName = "mohadmin"
export const aPassword = "Welcome@123"
export const gmServices = "GM"
export const fmsServices = "FMS"
export const company = "Radicare"
export const location = "Ampang"
export const masterSubModulesGeneral = "General"
export const subModuleValues = "Standard User Department"
export const masterLocationSubModule = "Location"
export const locationSubModule1 = "User Area Master"
export const locationSubModule2 = "User Location Master"


// Add User Area Master 
export const userDepartmentCode = "AR" + utils.getRandomNumbers(3)
export const userDepartmentName = "AReception" + utils.getRandomNumbers(3)
export const concatCodeName = userDepartmentCode + ' ' + '-' + ' ' + userDepartmentName
export const fmsUserAreaCode = "AV" + utils.getRandomNumbers(3)
export const fmsUserAreaName = "AVisitingArea" + utils.getRandomNumbers(2)
export const concatfmsUserAreaCode = fmsUserAreaCode + ' ' + '-' + ' ' + fmsUserAreaName
export const fmsMySpaCode = "ASPA" + utils.getRandomNumbers(2)
export const fmsCategoryOfArea = "General Area"
export const fmsLevel = "Level 04"
export const fmsWorkingHours = "8"
export const fmsStatus = "Active"  //  Inactive  Active
export const fmsTotalFloorArea = "1000"
export const fmsStartServiceDate = getTodayDate()
export const fmshospitalRepresentative = "Hospital Director"
export const fmsHospitalNumber = "869679"
export const concatHospitalRep = fmsHospitalNumber + ' ' + '-' + ' ' + fmshospitalRepresentative
export const fmsCompanyRep = "sep"
export const fmsCompanyNumber = "sep"
export const concatCompanyRep = fmsCompanyNumber + '-' + fmsCompanyRep
// export const fmscompanyRepresentative="STFEMP-123-Donald Duck"
export const fmsSuccessMessage = "Data saved successfully"
export const remarks = " Data Saved"


//Add User Location Master 
export const fmsUserLocationCode = "ACP" + utils.getRandomNumbers(3)
export const fmsUserLocationName = "ACarParking" + utils.getRandomString(3)
export const concatfmsConcatUserAreaCode = fmsUserAreaCode + ' ' + '-' + ' ' + fmsUserAreaName
export const status = "Active"  //  Inactive  Active
export const locationSpecificName = "ANearICU"
export const operatingHours = "24"
export const floorArea = "1000"
export const airCondArea = "500"
export const cleansingCategory = "Medical Area"
export const criticality = "Critical"  // Non-Critical
export const installedFacility = "Mobile"
export const ULMSuccessMessage = "Data saved successfully"


//LinenGroup
export const masterSubModulesLLS = "LLS"
export const subModuleLinenGroup = "Linen Group"
export const linenGrpCode = "ATL" + utils.getRandomString(3)
export const linenGrpDescription = "ATableLinen" + utils.getRandomString(3)
export const concatlinen = linenGrpCode + ' ' + '-' + ' ' + linenGrpDescription + ' '
export const linenCode = "ATable" + utils.getRandomString(3)
export const linenDescription = "ATableLinen" + utils.getRandomString(3)

//Linen Item detail
export const subModuleLinenItemDetail = "Linen Item Details"
export const hospitalSpecific = "No"   //No  //Yes
export const hospitalMaster = "Kuala Lumpur"
export const linenStatus = "Active"  //Inactive
export const linenCategory = "Ward Linen"
export const linenColor = "Apple Green"
export const dimensionvalue = "10*15"
export const linenEffectiveDate = getTodayDate()
export const selectMaterial = "100% Cotton Drill"
export const selectStandard = "MS2"
export const standardWeight = "7"
export const lIDSuccessMessage = "Data saved successfully"

// LLS Linen Item Details
export const llsServiceIcon = "LLS"
export const masterDropDownLinenDetails = "Linen Details"
export const subModuleLinenItemDetails = "Linen Item Details"
export const submoduleLinenUnitPrice="Linen Unit Price"
export const concatLinenCode = linenCode + ' ' + '-' + ' ' + linenDescription + ' '
export const fileType="Manual"
export const fileName="MyFiles"+ utils.getRandomNumbers(3)
export const filepath="./Upload_Files/samplefile.pdf"
export const linenUnitPrice= utils.getRandomNumbers(3)
export const emptyLinenCode=" "
export const submoduleLinenParRequire="Linen PAR Requirements"
export const pagesize="20"
export const parvalue= utils.getRandomNumbers(3)

// LLS User Department and Area
export const submoduleUserDepartmentArea="User Department/Area Details"
export const operatingDays="7 days per week"
export const effectiveDate= getTodayDate()
export const bagpieces= utils.getRandomNumbers(2)
export const hospitalname = "hospital"
export const hospitalRepresentative="Hospital Director - Hospital Director"
export const deliveryTime = getRandomTime()
export const collectionTime = getRandomTime()
export const linenTime = getRandomTime()
export const furnishingItem = "3-Monthly"
export const SantizingDay = "Monday"
export const startingMonth = getCurrentMonth()
export const weekDay = "W1"
export const concatLinenCode1 = linenCode + '-' + ' ' + linenDescription
export const par1Require = utils.getRandomNumbers(3)
export const par2Require = utils.getRandomNumbers(3)
export const defaultIssue = "Yes"
