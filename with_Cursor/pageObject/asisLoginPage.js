import ReusablesComponents from '../reuse'

class asisLoginPage {

    get username() {
        return $("//input[@id='LoginName']")
    }
    get password() {
        return $("//input [@id='Password']")
    }
    get loginButton() {
        return $("//button[@id='btnlogin']")
    }


    async enterUsername(username) {
        await ReusablesComponents.waitAndSetValue(this.username, username)
    }
    async enterPassword(password) {
        await ReusablesComponents.waitAndSetValue(this.password, password)
    }
    async clickLoginButton() {
        await ReusablesComponents.waitAndClick(this.loginButton)
    }

} export default new asisLoginPage()