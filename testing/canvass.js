const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {
    before: browser => {
        //browser.url('https://admin.saleshub.io/users/login')
    },
    after: browser => {
        browser
    },

    // 'Login and out' : browser => {
    //     functions.pageObjectLoginAndLogout(browser, data)
    // },
    
    // 'Canvass: Report': browser =>{
    //     functions.pageObjectCanvassReport(browser, data)
    // }

    'Canvass Interactions': browser => {
        functions.pomInteractions(browser, data)
    }

    // 'Canvass: Interaction Type': browser => {
    //     functions.login(browser, data)
    //     functions.canvassAddInteractions(browser, data)
    //     functions.canvassEditInteractions(browser, data)
    //    // functions.canvassDeleteInteraction(browser)
    // },

    // 'Canvass: Sort Interactions': browser => {
    //     functions.login(browser, data)
    //     functions.canvassSortInteractions(browser)
    // },
    
}
