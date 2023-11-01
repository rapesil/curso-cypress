/// <reference types="Cypress" />

describe('Testando apis com Cypress', ()=> {
    it('Primeira requisição', ()=> {
        cy.request('GET', 'https://www.google.com').as('goiaba')

        cy.get('@goiaba').should((laranja) => {
            expect(laranja.status).to.eq(200)
        })
    })

    it('Validando o retorno de uma requisição', ()=> {
        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

        cy.get('@comments').should((response) => {
            expect(response).to.have.property('name')
            expect(response).to.have.property('duration')
        })
    })

    it.only('Validando nosso primeiro POST', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login', // baseUrl is prepend to URL
            body: {
              email: 'fulano@qa.com',
              password: 'teste',
            },
        }).as('login')

        cy.get('@login').should((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})


