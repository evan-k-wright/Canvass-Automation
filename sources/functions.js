const data = require('./data')
const selectors = require('./selectors')

const loginUI = (browser) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.login, 5000)
        .useCss()
        .waitForElementVisible(selectors.companyURL, 5000)
        .waitForElementVisible(selectors.username, 5000)
        .waitForElementVisible(selectors.password, 5000)
        .waitForElementVisible(selectors.loginButton, 5000)
}
const login = (browser, data) => {
    browser
        .setValue(selectors.companyURL, data.company)
        .setValue(selectors.username, data.username)
        .setValue(selectors.password, data.password)
        .click(selectors.loginButton)
        .useXpath()
        .waitForElementVisible(selectors.salesLogo, 5000)
}

const canvassRport = (browser, data) => {
    browser
    .useXpath()
    .waitForElementVisible(selectors.salesLogo, 5000)
    .click(selectors.salesLogo)
    .useCss()
    .click(selectors.canvassLogo)
    .useXpath()
    .waitForElementVisible(selectors.canvassLabel, 5000)
    .useXpath()
    .click(selectors.hq)
    .useCss()
    .setValue(selectors.employeeName, data.employeeName)
    .click(selectors.notHome)
    .clearValue(selectors.startDate)
    .clearValue(selectors.endDate)
    .setValue(selectors.startDate, data.startDate)
    .setValue(selectors.endDate, data.endDate)
    .click(selectors.submit)

}


module.exports = {
    canvassRport: canvassRport,
    login : login,
    loginUI : loginUI, 
}