module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {
        //Login
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]',
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //Add Interactions
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
                interactionTypeTitle: {
                    selector: '//h1[.="Interaction Types"]',
                    locateStrategy: 'xpath'
                },

                needsHelp: {
                    selector: '//a[.="Needs Help"]',
                    locateStrategy: 'xpath'
                 },

        //Edit Interactions
            lockLogo: 'img[src="http://superadmin.saleshub.io/icons/lock.png"]',
            newInteractionName: 'input[name="name"]',
            order: 'input[name="order"]',
            red: 'option[value="#FF3030"]',
            save: 'button[type="submit"]',
            
            //xPath
                lockDown: {
                    selector: '//a[.="Lock Down"]',
                    locateStrategy: 'xpath'
                },

                needsHelp: {
                    selector: '//a[.="Needs Help"]',
                    locateStrategy: 'xpath'
                },

        //Edit interaction
            lockLogo: 'img[src="http://superadmin.saleshub.io/icons/lock.png"]',
            newInteractionName: 'input[name="name"]',
            order: 'input[name="order"]',
            red: 'option[value="#FF3030"]',
            save: 'button[type="submit"]',

            //xPath
                lockDown: {
                    selector: '//a[.="Lock Down"]',
                    locateStrategy: 'xpath'
                },

                needsHelp: {
                    selector: '//a[.="Needs Help"]',
                    locateStrategy: 'xpath'
                },

        //Sub Interactions
            order: 'input[name="order"]',
            policeBadge: 'img[src="http://superadmin.saleshub.io/icons/security-general.png"]',
            save: 'button[type="submit"]',
            subName: 'input[name="sub"]',
            typeName: 'input[name="type"]',

            //xPath
                lockDown: {
                    selector: '//a[.="Lock Down"]',
                    locateStrategy: 'xpath'
                },

                parentType: {
                    selector: '//option[.="Lock Down"]',
                    locateStrategy: 'xpath'
                },

                police: {
                    selector: '//a[.="Police"]',
                    locateStrategy: 'xpath'
                },

                subType: {
                    selector: '(//input[@type="checkbox"])[1]',
                    locateStrategy: 'xpath'
                },

        //Edit Sub Interaction
            save: 'button[type="submit"]',
            subEditName: 'input[name="name"]',
            subName: 'input[name="sub"]',
            yeild: 'img[src="http://superadmin.saleshub.io/icons/yield.png"]',

            //xpath
                toxic: {
                    selector: '//a[.="Toxic"]',
                    locateStrategy: 'xpath'
                },

        //Delete Sub Interaction 
            deleteInteraction: 'a[class="delete-item"]',

            //xpath
                toxic: {
                    selector: '//a[.="Toxic"]',
                    locateStrategy: 'xpath'
            },

        //Delete Interaction
            deleteInteraction: 'a[class="delete-item"]',

            //xpath
                lockDown: {
                    selector: '//a[.="Lock Down"]',
                    locateStrategy: 'xpath'
            },
    }
}