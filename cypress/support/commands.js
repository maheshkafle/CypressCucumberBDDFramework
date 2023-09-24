// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
 Cypress.Commands.add('searchresult', (element, expectedPageCount) => 
 { 
    cy.get(element).invoke('text').then(($el) => {
        const divMsg = $el.trim(' ')
        const actualPageCount = divMsg.substring(0,5).trim(' ')
        expect(expectedPageCount).to.be.equal(actualPageCount)
    });
 })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })