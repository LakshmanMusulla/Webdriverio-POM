const commonActions=require('/Users/lakshman.musulla/Desktop/Automation/WebDriverIO POM Framework/utilities/commons.js')
class LoginPage {

 get email(){ return $('#ap_email')}
 get continueButton(){ return  $('#continue')}
 get password(){ return $('#ap_password')}
 get submit(){return $("#signInSubmit")} 

 isEmailDisplayed()
 {
     commonActions.isElementDisplayed(this.email) 
 }
 isPasswordDisplayed()
 {
     commonActions.isElementDisplayed(this.password)
 }
 isContinueButtonDisplayed()
 {
     commonActions.isElementDisplayed(this.continueButton)
 }
 isSubmitButtonDisplayed()
 {
     commonActions.isElementDisplayed(this.submit)
 }
  
 enterEmail(value)
 {
     this.isEmailDisplayed()
     commonActions.safeType(this.email,value)
 }
 enterPassword(value)
 {
     this.isPasswordDisplayed()
     commonActions.safeType(this.password,value)
 }
 clickOnContinueBtn()
 {  
     this.isContinueButtonDisplayed()
     commonActions.safeClick(this.continueButton)
 }

 clickOnSubmitBtn()
 {
     this.isSubmitButtonDisplayed()
     commonActions.safeClick(this.submit)
 }


}
module.exports= new LoginPage()