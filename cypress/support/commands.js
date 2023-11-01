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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('melancia', ()=>{
  cy.get('#fname').type('Rafael')
})

Cypress.Commands.add('preencheDadosDoCartaoDeCredito', ()=> {
  cy.get('#cname').type('RAFAEL P SILVA')
  cy.get('#ccnum').type('1111222233334444')
  cy.get('#expmonth').type('Maio')
  cy.get('#expyear').type('2030')
  cy.get('#cvv').type('123')
})

Cypress.Commands.add('preencheDadosPessoaisCom', (nome, email, endereco) => {
  cy.get('#fname').type(nome)
  cy.get('#email').type(email)
  cy.get('#adr').type(endereco)
})

Cypress.Commands.add('preencheDadosPessoais', (dadosPessoais) => {
  cy.get('#fname').type(dadosPessoais.nome)
  cy.get('#email').type(dadosPessoais.email)
  cy.get('#adr').type(dadosPessoais.endereco)
})