module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {

        //Login
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]',
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        canvassLogo: 'img[src="/images/app-icon-canvass.png"]',
        endDate: 'input[placeHolder="End date"]',
        filter: 'input[value="Filter"]',
        notHome: 'option[value="9"]',
        report: 'i[class="fas fa-rocket"]',
        repsName: 'input[name="employee_name"]',
        salesHub: 'div[class="current-app"]',
        startDate: 'input[placeHolder="Start date"]',
        submit: 'input[value="Submit"]',

        //xpath
            hq: {
                selector: '(//option[@value="31"])[1]',
                locateStrategy: 'xpath'
            },
    }
}