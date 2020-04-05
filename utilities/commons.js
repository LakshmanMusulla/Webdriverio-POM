class Commons {

    safeClick(element) {
        element.waitForDisplayed()
        element.click()
    }

    safeType(element, value) {
        element.waitForDisplayed()
        element.setValue(value)
    }

    safeClearText(element) {
        element.click()
        element.clearValue()
    }

    safeGetText(element) {
        element.waitForDisplayed()
        element.getText()
    }

    isElementDisplayed(element) {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    safegetBrowserTitle() {
        return browser.getTitle()
    }

}
module.exports = new Commons()