/// <reference types="Cypress" />

describe('TO DOS', ()=>{
    it.only('Criando tarefas e selecionando uma', ()=>{
        cy.visit('http://localhost:3000')
        cy.window().then(({app})=>{
            console.log(app)
            // app.loggedIn.active = true
            // app.showLoginModule = true
            app.loggedIn.email = "Cypress"
        })

        //cy.get('[data-cy="login-menu"]').click()
    })

 
})

