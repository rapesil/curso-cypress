describe('Google Test', () => {
  it('Deve fazer uma busca no google com sucesso', () =>{
    // AAA
    // Arrange (Preparação)
    // Abre o navegador e Acessa o site do google
    cy.visit('https://google.com')

    // Act (Ação)
    // digita cypress no campo de pesquisa do google
    cy.get('input[name="q"]').type('cypress')

    // Assert (Verificação)
  
  })

  it('Deve retornar erro se algo acontecer', () => {

  })
})
























it('passes', () => {
  
  //apenas um exemplo de teste com click
  // cy.get('qualquercoisa').click()

  // para visualizar no console do navegador o titulo da pagina
  console.log(cy.title())
})
