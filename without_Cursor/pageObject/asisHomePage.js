import resusableComponents from "./reuse"

class asisHomePage {

    get asisFullForm() { return $("//p[.='Asset and Services Information System']") }
    get chooseCompanyDropDown() { return $("//select[@name='Company']") }
    get chooseLocationDropDown() { return $("//select[@name='Hospital']") }
    getServicesIcon(serviceName) { return $(`//p[.='${serviceName}']/../a/div[@class='icon']`) }
    get serviceText() { return $("//h3[@class='panel-title']") }
    get profileIcon() { return $("//span[.='mohadmin']") }
    get logOutButton() { return $("//a[.='Log Out']") }
    getcompanys(selectCompany) { return $(`//select[@id='Company']/option[.='${selectCompany}']`) }
    getlocation(selectLocation) { return $(`//select[@id='Hospital']/option[.='${selectLocation}']`) }
    get asisHeartIcon() { return $("//img[@alt='Ministry of Health']") }


    async selectcompanyDropDown(selectCompany) {
        await resusableComponents.waitAndClick(this.chooseCompanyDropDown)
        await resusableComponents.waitAndClick(this.getcompanys(selectCompany))
    }

    async selectLocationDropDown(selectLocation) {
        await resusableComponents.waitAndClick(this.chooseLocationDropDown)
        await resusableComponents.waitAndClick(this.getlocation(selectLocation))
    }
    async selectServiceIcon(selectIcon) {
        await resusableComponents.waitAndClick(this.getServicesIcon(selectIcon))
    }
    async clickAsisHeartIcon() {
        await resusableComponents.waitAndClick(this.asisHeartIcon)
    }

} export default new asisHomePage()