module.exports = {
    //loginUI
        companyURL: 'input[placeHolder="Company URL"]',
        loginButton: 'button[type="submit"]',
        password: 'input[placeHolder="Password"]',
        username: 'input[placeHolder="Username"]',
            //xPath 
                login: '//h1[.="Login"]',

    //login And Out
        companyURL: 'input[placeHolder="Company URL"]',
        username: 'input[placeHolder="Username"]',
        password: 'input[placeHolder="Password"]',
        loginButton: 'button[type="submit"]',
        myAccount: 'a[href="/employees/edit/4275"]',
        logOut: 'a[href="/users/logout"]',
            //xPath
                login: '//h1[.="Login"]',

    //login
        companyURL: 'input[placeHolder="Company URL"]',
        loginButton: 'button[type="submit"]',
        password: 'input[placeHolder="Password"]',
        username: 'input[placeHolder="Username"]',
            //xPath
                salesLogo: '(//img[@src="/images/app-icon-sales-hub.png"])[2]',

    //canvass Report
        canvassLogo: 'img[src="/images/app-icon-canvass.png"]',
        employeeName: 'input[name="employee_name"]',
        endDate: 'input[placeHolder="End date"]',
        filter: 'input[value="Filter"]',
        notHome: 'option[value="9"]',
        startDate: 'input[placeHolder="Start date"]',
        submit: 'input[value="Submit"]',
            //xpath
                canvassLabel: '(//label[.="Canvass"])[2]',
                hq:'(//option[@value="31"])[1]',
                salesLogo: '(//img[@src="/images/app-icon-sales-hub.png"])[2]',

    //canvass Add Interactions
        addInteraction: 'a[href="/interactionTypes/add"]',
        black: 'option[value="#000000"]',
        canvassLogo: 'img[src="/images/app-icon-canvass.png"]',
        interactionType:'a[href="/interactionTypes"]',
        newInteractionName: 'input[name="name"]',
        order: 'input[name="order"]',
        salesLogo: '(//img[@src="/images/app-icon-sales-hub.png"])[2]',
        save: 'button[type="submit"]',
        settlingsLogo: 'img[src="http://superadmin.saleshub.io/icons/cog.png"]',
        typeName: 'input[name="type"]',
            //xPath
                interactionTypeTitle: '//h1[.="Interaction Types"]',
                needsHelp: '//a[.="Needs Help"]',
    
    //canvass Edit Interactions
        lockLogo: 'img[src="http://superadmin.saleshub.io/icons/lock.png"]',
        newInteractionName: 'input[name="name"]',
        order: 'input[name="order"]',
        red: 'option[value="#FF3030"]',
        save: 'button[type="submit"]',
            //xPath
                lockDown: '//a[.="Lock Down"]',
                needsHelp: '//a[.="Needs Help"]',

    //canvass Delete Interaction 
        deleteInteraction: 'a[class="delete-item"]',
            //xPath
                lockDown: '//a[.="Lock Down"]',

    //canvass Sort Interactions
        alreadySolar: 'option[value="13"]',
        cancelButton: 'a[class="cancel-button"]',
        canvassLogo: 'img[src="/images/app-icon-canvass.png"]',
        interactionType:'a[href="/interactionTypes"]',
        lgcy: 'li[id="x_x28"]',
        mainTypes: 'select[id="id"]',
        sort: 'a[href="/interactionTypes/sort/0"]',
            //xPath
                salesLogo: '(//img[@src="/images/app-icon-sales-hub.png"])[2]',
    
    //canvass Sub Interaction
        parentType: 'option[value="65"]',
        subName: 'input[name="sub"]',
        typeName: 'input[name="type"]',
            //xPath
                lockDown: '//a[.="Lock Down"]',
                subType: '(//input[@type="checkbox"])[1]',
                 
   
}