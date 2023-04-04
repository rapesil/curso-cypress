/// <reference types="Cypress" />

describe('alertas', ()=>{
    it('Testando um alerta', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get('#content > div > ul > li:nth-child(1) > button').click()

        cy.on('window:alert', (goiaba)=>{
            expect(goiaba).to.equal('I am a JS Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Testando um alerta de confirmação: clicando OK', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(2) > button').click()
        cy.on('window.confirm', ()=> true)
        cy.get('#result').should('have.text', 'You clicked: Ok')
        // cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Testando um alerta de confirmação: clicando Cancel', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window.confirm', ()=> false)
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        // cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Testando um prompt', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(goiaba => {
            cy.stub(goiaba, 'prompt').returns('Esse é o texto que digito no prompt')
        })
        cy.get(':nth-child(3) > button').click()
        cy.get('#result').should('have.text', 'You entered: Esse é o texto que digito no prompt')
    })

    it.only('Teste', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/alert');
      
        cy.on('window:confirm', (str) => {
          expect(str).to.equal('Are you sure?');
          return new Promise((resolve, reject) => {
            resolve(false);
          });
        });
      
        cy.get('#confirm-button').click();
        cy.wait(1000); // espera para garantir que o alerta seja exibido
        cy.get('#confirm-answer').should('contain.text', 'Answer: No');
      });

})