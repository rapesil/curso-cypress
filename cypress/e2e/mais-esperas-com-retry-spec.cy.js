/// <reference types="Cypress" />

describe('mais esperas', ()=>{

    // var x = 0;

    // beforeEach(()=>{
    //     x = x+5000
    // })

    // afterEach(()=>{
    //     x = x + 4000
    // })

    it('Esperando um elemento que já existe no HTML, mas está escondido', ()=>{
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('#start > button').click()

        cy.get('#finish > h4', {timeout: 3000})
            .should('be.visible')
            .should('have.text', 'Hello World!')     
    })
})