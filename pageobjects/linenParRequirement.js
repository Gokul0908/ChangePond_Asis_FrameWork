import ReusablesComponents from "./reuse"

class linenParRequire {

    get pageSizeDropDown() { return $("//select[@ng-model='pageSize']") }
    get saveButton() { return $("(//button[.='Save'])[1]") }
    get parRequireField() { return $("//input[@name='ParRequirement']") }

    async selectPageSize(pagesize) {
        await ReusablesComponents.waitAndSetValue(this.pageSizeDropDown, pagesize)
    }

    async selectparRequire(parvalue,) {

        const parrequire = await ReusablesComponents.waitAndGetValue(this.parRequireField)
        if (parrequire == 0) {
            for (let i = 0; i <= pagesize; i++) {
                await ReusablesComponents.waitAndSetValue(this.parRequireField, parvalue)
            }
        }
    }



} export default new linenParRequire()