module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {
        companyURL: 'input[placeHolder="Company URL"]',
        loginButton: 'button[type="submit"]',
        logOut: 'a[href="/users/logout"]',
        myAccount: 'a[href="/employees/edit/6073"]',
        password: 'input[placeHolder="Password"]',
        salesHub: 'div[class="current-app"]',
        username: 'input[placeHolder="Username"]',

        //xPath
            login: {
                selector: '//h1[.="Login"]',
                locateStrategy: 'xpath',
            },

    }

}