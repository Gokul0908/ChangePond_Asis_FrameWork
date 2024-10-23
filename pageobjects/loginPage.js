import ReusablesComponents from "./reuse"

class LoginPage {

    get asisUsername() { return $("//input[@id='LoginName']") }
    get asisPassword() { return $("//input [@id='Password']") }
    get loginButton() { return $("//button[@id='btnlogin']") }
    get forgotPasswordLink() { return $("//a[.='Forgot Password?']") }
    get signUpLink() { return $("//a[.='Sign Up!']") }
    get abiText() { return $("//p[.='ASIS Business Intelligence']") }    


    async asisUserLoginToTheApplication(aUserName,aPassword) {
        await ReusablesComponents.waitAndSetValue(this.asisUsername, aUserName)
        await ReusablesComponents.waitAndSetValue(this.asisPassword,aPassword)
        await ReusablesComponents.waitAndClick(this.loginButton)
    }
    // async clickProfiieIcon(){
    //     await ReusablesComponents.waitAndClick(this.profileIcon)
    // }
    
    //  async clickLogOutButton(){
    //     await ReusablesComponents.waitAndClick(this.logOutButton)
    //  }
   
     
}
export default new LoginPage()