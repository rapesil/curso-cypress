/// <reference types="Cypress" />

describe('Trabalhando com janelas', () => {
    it('Simula a abertura de uma nova janela - mexendo em atributos', () => {
        cy.visit('http://the-internet.herokuapp.com/windows')
        cy.get('.example > a')
            .invoke('removeAttr', 'target')
            .click()

        cy.url().should('include', '/windows/new')
        cy.get('h3').should('have.text', 'New Window')
    })

    it('Simula a abertura de uma nova janela - stub e fake', function () {
        cy.visit('https://alapanme.github.io/testing-cypress.html')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake( url => {
                win.location.href = 'https://the-internet.herokuapp.com/';
            }).as("goiaba")
        })
        cy.get('button').click()
        cy.get('@goiaba')
            .should("be.called")
        cy.url().should('include', 'https://the-internet.herokuapp.com/')
        cy.get('h1')
            .should('have.text', 'Welcome to the-internet')

        
    })
})