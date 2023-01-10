describe('Testa unicarioca',  () => {
    it('Testa checkboxes', () => {
        cy.visit('https://unicarioca.edu.br/graduacao')
        cy.get('#tipo-presencial').check()
        cy.get('#area-54').check()
    })
})