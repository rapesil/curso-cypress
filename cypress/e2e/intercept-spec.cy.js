/// <reference types="Cypress" />

describe('Testando o cy.intercept', () => {
    it('Simulando um caso de erro 500 - retornando um json', ()=>{
        cy.intercept('POST', '/authenticate', {
            statusCode: 500,
            body: {
                error: 'Xi, deu muito ruim'
            }
        })

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa-sign-in').click()
    })

    it('Simulando um caso de erro 404 - retornando um HTML', ()=>{
        cy.intercept('POST', '/authenticate', {
            statusCode: 404,
            fixture: 'index.html'
        })

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.wait(10000)
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa-sign-in').click()
    })

    it.only('Simulando um caso de wait (espera) de uma requisição', ()=>{
        cy.intercept('GET', '/secure').as('laranja')

        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa-sign-in').click()
        cy.wait('@laranja').its('response.statusCode').should('equal', 200)
    })
})