const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {
    before: browser => {
        //browser.url('https://admin.saleshub.io/users/login')
    },
    after: browser => {
        browser.end()
    },

    'Login and out' : browser => {
        functions.pageObjectLoginAndLogout(browser, data)
    },
    
    'Canvass: Report': browser =>{
        functions.pageObjectCanvassReport(browser, data)
    },

    'Canvass Interactions': browser => {
        functions.pomInteractions(browser, data)
    },
    
}