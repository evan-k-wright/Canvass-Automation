module.exports = {
    //A-C
        addInteraction: 'a[href="/interactionTypes/add"]',
        black: 'option[value="#000000"]',
        canvassLogo: 'img[src="/images/app-icon-canvass.png"]',
        companyURL: 'input[placeHolder="Company URL"]',

    //D-F
        employeeName: 'input[name="employee_name"]',
        endDate: 'input[placeHolder="End date"]',
        filter: 'input[value="Filter"]',

    //G-I
        group: 'select[name="group_id"]',
        myAccount: 'a[href="/employees/edit/4275"]',
        interaction: 'select[name="interaction_type_id"]',
        interactionType:'a[href="/interactionTypes"]',

    //J-L
        loginButton: 'button[type="submit"]',
        logOut: 'a[href="/users/logout"]',

    //M-O
        newInteractionName: 'input[name="name"]',
        notHome: 'option[value="9"]',
        order: 'input[name="order"]',

    //P-R
        password: 'input[placeHolder="Password"]',

    //S-U
        save: 'button[type="submit"]',
        settlingsLogo: 'img[src="http://superadmin.saleshub.io/icons/cog.png"]',
        startDate: 'input[placeHolder="Start date"]',
        subType: 'input[name="sub"]',
        submit: 'input[value="Submit"]',
        typeName: 'input[name="type"]',
        username: 'input[placeHolder="Username"]',


    //xPath
    canvassLabel: '(//label[.="Canvass"])[2]',
    hq:'(//option[@value="31"])[1]',
    interactionTypeTitle: '//h1[.="Interaction Types"]',
    login: '//h1[.="Login"]',
    needsHelp: '//a[.="Needs Help"]',
    salesLogo: '(//img[@src="/images/app-icon-sales-hub.png"])[2]',
}