
class ReusablesComponents {

    async waitAndClick(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.click()
    }

    async waitAndSetValue(selector, value) {
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.setValue(value)
    }

    async waitScrollAndClick(selector) {
        await selector.scrollIntoView({ block: 'end' })
        await selector.waitForDisplayed({ timeout: 60000 })
        await selector.click()
    }

    async waitAndGetText(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        return await selector.getText()
    }


    async waitAndGetValue(selector) {
        await selector.waitForDisplayed({ timeout: 60000 })
        return await selector.getValue()
    }


}

export default new ReusablesComponents()