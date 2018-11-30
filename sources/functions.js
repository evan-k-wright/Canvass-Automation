//const selectors = require('./selectors')

const pageObjectLoginAndLogout = (browser, data) => {
    let loginPage = browser.page.loginPage();
    loginPage.navigate()
        .setValue('@companyURL', data.company)
        .setValue('@username', data.username)
        .setValue('@password', data.password)
        .click('@loginButton')
        .waitForElementVisible('@myAccount', 5000)
        .click('@myAccount')
        .waitForElementVisible('@logOut', 5000)
        .click('@logOut')
        .waitForElementVisible('@login', 5000)
}

const pageObjectLogin = (browser, data) => {
    let loginPage = browser.page.loginPage();
    loginPage.navigate()
        .setValue('@companyURL', data.company)
        .setValue('@username', data.username)
        .setValue('@password', data.password)
        .click('@loginButton')
        .waitForElementVisible('@salesHub', 5000)
}

const pageObjectCanvassReport = (browser, data) => {
    let canvassReport = browser.page.canvassReport();
    canvassReport.navigate()
        .setValue('@companyURL', data.company)
        .setValue('@username', data.username)
        .setValue('@password', data.password)
        .click('@loginButton')
        .waitForElementVisible('@salesHub', 5000)
        .click('@salesHub')
        .click('@canvassLogo')
        .waitForElementVisible('@report', 5000)
        .click('@hq')
        .setValue('@repsName', data.repsName)
        .click('@notHome')
        .click('@filter')
        .clearValue('@startDate')
        .clearValue('@endDate')
        .setValue('@startDate', data.startDate)
        .setValue('@endDate', data.endDate)
        .click('@submit')
}

const pomInteractions = (browser, data) => {
    let canvassInteractions = browser.page.canvassInteractions();
    canvassInteractions.navigate()
        //login    
        .setValue('@companyURL', data.company)
        .setValue('@username', data.username)
        .setValue('@password', data.password)
        .click('@loginButton')
        .waitForElementVisible('@salesHub', 5000)

        //add interaction    
        .click('@salesHub')
        .click('@canvassLogo')
        .waitForElementVisible('@interactionType', 5000)
        .click('@interactionType')
        .waitForElementVisible('@interactionTypeTitle', 5000)
        .waitForElementVisible('@addInteraction', 5000)
        .click('@addInteraction')
        .waitForElementVisible('@newInteractionName', 5000)
        .setValue('@newInteractionName', data.newInteractionName)
        .setValue('@typeName', data.typeName)
        .click('@black')
        .click('@settlingsLogo')
        .setValue('@order', data.order)
        .click('@save')
        .waitForElementVisible('@needsHelp', 5000)

        //edit interaction
        .click('@needsHelp')
        .clearValue('@newInteractionName')
        .setValue('@newInteractionName', data.editName)
        .click('@red')
        .click('@lockLogo')
        .clearValue('@order')
        .setValue('@order', data.editOrder)
        .click('@save')
        .waitForElementVisible('@lockDown', 5000)

        //sub interaction 
        .click('@addInteraction')
        .click('@subType')
        .waitForElementVisible('@parentType', 5000)
        .click('@parentType')
        .setValue('@newInteractionName', data.subName)
        .setValue('@typeName', data.typeName)
        .click('@policeBadge')
        .setValue('@order', data.subOrder)
        .click('@save')
        .waitForElementVisible('@police', 5000)

        //edit sub interaction
        .click('@police')
        .clearValue('@subEditName')
        .setValue('@subEditName', data.editSubName)
        .click('@yeild')
        .click('@save')
        .waitForElementNotPresent('@police', 5000)
        .waitForElementVisible('@toxic', 5000)

        //delete sub interaction
        .click('@toxic')
        .waitForElementVisible('@deleteInteraction', 5000)
        .click('@deleteInteraction')
        .api.acceptAlert()
        canvassInteractions.waitForElementNotPresent('@toxic', 5000)

        //delete interaction
         .click('@lockDown')
        .waitForElementVisible('@deleteInteraction', 5000)
        .click('@deleteInteraction')
        .api.acceptAlert()
        canvassInteractions.waitForElementNotPresent('@lockDown', 5000)
}

module.exports = {
    pageObjectCanvassReport: pageObjectCanvassReport,
    pageObjectLoginAndLogout: pageObjectLoginAndLogout,
    pageObjectLogin: pageObjectLogin,
    pomInteractions: pomInteractions
}