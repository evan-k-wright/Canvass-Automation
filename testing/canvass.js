const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {
    before: browser => {
        browser.url('https://admin.saleshub.io/users/login')
    },
    after: browser => {
        browser
    },
    
    // 'Login and Out': browser => {
    //     functions.loginUI(browser)
    //     functions.loginAndOut(browser, data)
    // },

    // 'Canvass Report': browser => {
    //     functions.loginUI(browser)
    //     functions.login(browser, data)
    //     functions.canvassRport(browser, data)
    // },

    'Canvass Interactions': browser => {
        functions.login(browser, data)
        functions.canvassInteractions(browser, data)
    },
    
}
