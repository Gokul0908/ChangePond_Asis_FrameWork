import ReusablesComponents from "./reuse";

class gmLinenGroup {

    get linenGroupRefreshIcon() { return $("//span[@class='ui-icon ui-icon-refresh']") }
    get linenGroupaddButton() { return $("//td[@id='Add']") }
    get linenGrpCodeTextBox(){ return $("//input[@ng-model='LinenGroup.LinenGroupCode']")}
    get linenGrpDescription(){ return $("//input[@ng-model='LinenGroup.LinenGroupDescription']")}
    get saveButton() { return $("//button[@id='insert']") }
    get addNewButton() { return $("//button[@title='Add New']") }
    get backButton() { return $("(//button[.='Back'])[1]") }

    async clicklinenGroupaddButton() {
        await ReusablesComponents.waitAndClick(this.linenGroupaddButton)
    }
    async enterlinengrpCode(linenGrpCode){
        await ReusablesComponents.waitAndSetValue(this.linenGrpCodeTextBox, linenGrpCode)
    }
    async enterLinenGrpDescription(linenGrpDescription){
        await ReusablesComponents.waitAndSetValue(this.linenGrpDescription, linenGrpDescription)
    }
    async clickSaveButton(){
        await ReusablesComponents.waitAndClick(this.saveButton)
    }
}
export default new gmLinenGroup()

