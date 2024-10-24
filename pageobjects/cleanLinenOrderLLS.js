import ReusablesComponents from "./reuse"


class cleanLinenOrderLLS {

    getTransactionSubModules(TransactionSubModules) { return $(`//span[.='${TransactionSubModules}']`) }
    getpriority(Priority) { return $(`//select[@id='Priority']/option[.='${Priority}']`) }
    getLinenCodeDropdown(concatLinenCode) { return $(`//ul[@id='UlFetch']/li/div/a[.='${concatLinenCode}']`) }
    getLinenShipmentSubModuleDropDown(subModuleValues) { return $(`//ul[@class='show']/li/a[.='${subModuleValues}']`) }
    get transactionDropDown() { return $("//a[.='Transaction']") }
    get addButton() { return $("//td[@id='Add']") }
    get linenCode() { return $("//input[@id='txtLinenCode0']") }
    get requestedQuantity() { return $("//input[@ng-required='Clean.Quantity']") }
    get storeBalance() { return $("//input[@id='Stockbalance']") }
    get savebutton() { return $("(//button[.='Save'])[1]") }


    async clickTransactionDropDown(TransactionSubModules) {
        await ReusablesComponents.waitAndClick(this.transactionDropDown)
        await ReusablesComponents.waitAndClick(this.getTransactionSubModules(TransactionSubModules))
    }

    async clickSubModulesDropDown(subModuleValues) {
        await ReusablesComponents.waitAndClick(this.getLinenShipmentSubModuleDropDown(subModuleValues))
    }

    async clickaddButton() {
        await ReusablesComponents.waitAndClick(this.addButton)
    }

    async selectPriority(Priority) {
        await ReusablesComponents.waitAndClick(this.getpriority(Priority))
    }
    async selectLinenCode(concatLinenCode, linenCode) {
        await ReusablesComponents.waitAndSetValue(this.linenCode, linenCode)
        await this.getLinenCodeDropdown(concatLinenCode).click()
    }

    async getStoreBalance() {
        const storeBalance = await ReusablesComponents.waitAndGetText(this.storeBalance)
        return storeBalance
    }

    async enterRequestedQuantity() {
       
        const storeBalance = await this.getStoreBalance();
        console.log(":::::::::::::"+storeBalance+":::::::::::::")
        const maxRequestedQuantity = Math.floor(storeBalance * 0.75); // 75% of store balance
        const minRequestedQuantity = Math.max(1, Math.floor(storeBalance * 0.25)); // 25% of store balance, but at least 1
        
        let validRequestedQuantity;
        do {
            validRequestedQuantity = Math.floor(Math.random() * (maxRequestedQuantity - minRequestedQuantity + 1)) + minRequestedQuantity;
        } while (validRequestedQuantity >= storeBalance);

        await ReusablesComponents.waitAndSetValue(this.requestedQuantity, validRequestedQuantity.toString());
        return validRequestedQuantity;
    }

    async clickSaveButton() {
        await ReusablesComponents.waitAndClick(this.savebutton)
    }   


} export default new cleanLinenOrderLLS()