import { aPassword } from "../../Constants/const"
import ReusableComponents from "./reuse"

class asisLoginPage {
    get asisUsername() { return $("//input[@id='LoginName']") }
    get asisPassword() { return $("//input [@id='Password']") }
    get loginButton() { return $("//button[@id='btnlogin']") }

    async asisUserLogintotheApplication(username, Password) {
        await ReusableComponents.waitAndSetValue(this.asisUsername, username)
        await ReusableComponents.waitAndSetValue(this.asisPassword, Password)
        await ReusableComponents.waitAndClick(this.loginButton)
    }
}
export default new asisLoginPage()