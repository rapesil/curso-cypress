describe('Checkboxes', () => {
    it('Deve selecionar checkbox 2', () => {
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        cy.get('[name="same"]').check()

        cy.get('[name="same"]').should('be.checked')
        cy.screenshot()
    })

    it('Deve desmarcar checkbox 2', () => {
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        cy.get('[name="Y"]').check()
        cy.screenshot()
    })


})