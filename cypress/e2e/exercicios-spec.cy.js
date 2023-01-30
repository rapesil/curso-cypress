describe('Checkboxes', () => {
    it('Cadastrar novo cliente com sucesso', () => {
        cy.visit('./src/index.html')
        cy.get('#firstName').type('Adalberto')
        cy.get('#lastName').type('José da Silva')
        cy.get('#email').type('betinhojs@hotmail.com')
        cy.get('#open-text-area').type('Cliente atendido com sucesso')
        cy.get('.button').click()
        cy.get('span[class="success"] > strong').should('be.visible')
         .should('have.text', 'Mensagem enviada com sucesso.')  
    })
})