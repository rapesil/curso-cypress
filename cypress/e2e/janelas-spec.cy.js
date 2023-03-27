/// <reference types="Cypress" />

describe('Trabalhando com janelas', () => {
    it('Simula a abertura de uma nova janela - mexendo em atributos', () => {
        cy.visit('http://the-internet.herokuapp.com/windows')
        
    })

    it.only('Simula a abertura de uma nova janela - stub e fake', function () {
        cy.visit('https://alapanme.github.io/testing-cypress.html')
        
    })
})