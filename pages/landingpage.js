class LandingPage{

get signIn (){ return $('//span[text()="Account & Lists"]')}

clickSignIn() { this.signIn.click() }
get pageTitle(){
return browser.getTitle()}
}
module.exports=new LandingPage()