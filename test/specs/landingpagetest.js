const landingPage = require('/Users/lakshman.musulla/Desktop/Automation/WebDriverIO POM Framework/pages/landingpage.js')
const constants = require('/Users/lakshman.musulla/Desktop/Automation/WebDriverIO POM Framework/constants.js')
const loginPage= require('/Users/lakshman.musulla/Desktop/Automation/WebDriverIO POM Framework/pages/loginpage.js')

describe('Tests to verify Amanzon Landing Page', function () {
     it('Test to verify Lan ding Page Title', function () {
        browser.url('/')
        assert.equal(landingPage.pageTitle, constants.LANDING_PAGE_TITLE)
        browser.pause(3000)
       landingPage.clickSignIn()
       loginPage.enterEmail(constants.EMAIL)
       loginPage.clickOnContinueBtn()
       browser.pause(2000)
       loginPage.enterPassword(constants.PASSWORD)
       loginPage.clickOnSubmitBtn()
       browser.pause(5000)
       
    })


})
