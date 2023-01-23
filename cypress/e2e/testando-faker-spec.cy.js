/// <reference types="Cypress" />
const goiaba = require('faker-br');

describe('Testando o Faker', () => {
    it('Primeiro exemplo usando Faker', ()=>{
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        var nome = goiaba.name.findName()
        cy.get('#fname').type(nome)

        var email = goiaba.internet.email()
        cy.get('#email').type(email)

        var nomeDaRua = goiaba.address.streetName()
        cy.get('#adr').type(nomeDaRua)

        var cc = goiaba.random.number()
        cy.get('#ccnum').type(cc)

        var cep = goiaba.address.zipCodeValid()
        //cy.log(cep)
        cy.get('#zip').type(cep)
    })
})