/// <reference types="Cypress" />
const faker = require('faker-br');

describe('Criando meus primeiros comandos customizados', ()=>{

    beforeEach(()=>{
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
    })

    it('Meu primeiro comando',  ()=>{
        cy.melancia()
    })

    it('Utilizando varios parametros em um comando customizado', ()=>{
        var nome = faker.name.firstName()
        cy.preencheDadosPessoaisCom(nome, 'adalberto@gmail.com', 'Rua alguma coisa')
    })

    it('Continuando com comandos: comandos sem parametros', () => {
        cy.preencheDadosPessoaisCom('Rafael', 'rapesil@gmail.com', 'Rua alguma coisa')
        cy.preencheDadosDoCartaoDeCredito()
    })

    it('Continuando com comandos: dados em objetos', () => {
        var dados = {
            nome: 'Rafael',
            email: 'rapesil@gmail.com',
            endereco: 'Rua alguma coisa, 123'
        }

        cy.preencheDadosPessoais(dados)
        cy.preencheDadosDoCartaoDeCredito()
    })

    it('Continuando com comandos: dados em objetos usando faker', () => {
         var dados = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            endereco: faker.address.streetName()
        }

        cy.preencheDadosPessoais(dados)
        cy.preencheDadosDoCartaoDeCredito()
    })
})