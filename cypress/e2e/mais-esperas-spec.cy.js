/// <reference types="Cypress" />

describe('mais esperas', ()=>{
    it('Esperando um elemento que já existe no HTML, mas está escondido', ()=>{
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('#start > button').click()

        cy.get('#finish > h4', {timeout: 5000})
            .should('be.visible')
            .should('have.text', 'Hello World!')     
    })

    it('Esperando um elemento que ainda não existe no HTML', ()=>{
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/2')

        cy.get('#start > button').click()
        cy.get('#finish > h4', {timeout: 5000})
            .should('be.visible')
            .should('have.text', 'Hello World!')
    })

    it.only('Esperando um elemento sumir', ()=>{
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('#start > button').click()

        cy.get('#loading', {timeout: 5000}).should('not.be.visible')
        cy.get('#finish > h4').should('be.visible')
    })
})