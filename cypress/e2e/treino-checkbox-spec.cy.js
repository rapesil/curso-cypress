describe('Treino de checkboxes e radio buttons', () => {
    it('Deve selecionar o checkbox same', () => {
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        cy.get('[name="same"]').check()
        cy.get('[name="same"]').should('be.checked')
    })

    it('Deve selecionar uma opção de radio button', () => {
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        cy.get('[value="Y"]').check()
        cy.get('[value="Y"]').should('be.checked')
    })

    it.only('Deve selecionar o segundo radio', () => {
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        cy.get('[type="radio"]').eq(1).check()
        cy.get('[value="N"]').should('be.checked')
    })
})