describe('Google Test', () => {
  it('passes', () => {
    cy.visit('https://google.com')

    // digita cypress no campo de pesquisa do google
    cy.get('input[name="q"]').type('cypress')

    //apenas um exemplo de teste com click
    // cy.get('qualquercoisa').click()

    // para visualizar no console do navegador o titulo da pagina
    console.log(cy.title())

  })
})