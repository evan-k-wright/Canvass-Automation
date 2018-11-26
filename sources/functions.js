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

const loginAndOut = (browser, data) => {
    browser
        .setValue(selectors.companyURL, data.company)
        .setValue(selectors.username, data.username)
        .setValue(selectors.password, data.password)
        .click(selectors.loginButton)
        .waitForElementVisible(selectors.myAccount, 5000)
        .click(selectors.myAccount)
        .waitForElementVisible(selectors.logOut, 5000)
        .click(selectors.logOut)
        .useXpath()
        .waitForElementVisible(selectors.login, 5000)
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
    .click(selectors.filter)
    .clearValue(selectors.startDate)
    .clearValue(selectors.endDate)
    .setValue(selectors.startDate, data.startDate)
    .setValue(selectors.endDate, data.endDate)
    .click(selectors.submit)

}

const canvassInteractions = (browser, data) => {
    browser
        .useXpath()
        .waitForElementVisible(selectors.salesLogo, 5000)
        .click(selectors.salesLogo)
        .useCss()
        .click(selectors.canvassLogo)
        .waitForElementVisible(selectors.interactionType, 5000)
        .click(selectors.interactionType)
        .useXpath()
        .waitForElementVisible(selectors.interactionTypeTitle, 5000)
        .useCss()
        .waitForElementVisible(selectors.addInteraction, 5000)
        .click(selectors.addInteraction)
        .waitForElementVisible(selectors.newInteractionName, 5000)
        .setValue(selectors.newInteractionName, data.newInteractionName)
        .setValue(selectors.typeName, data.typeName )
        //.click(selectors.subType)
        .click(selectors.black)
        //.getLocationInView(selectors.settlingsLogo)
        .click(selectors.settlingsLogo)
        .setValue(selectors.order, data.order)
        .click(selectors.save)
        .useXpath()
        .waitForElementVisible(selectors.needsHelp, 5000)

}


module.exports = {
    canvassInteractions : canvassInteractions,
    canvassRport : canvassRport,
    loginAndOut : loginAndOut,
    login : login,
    loginUI : loginUI, 
}