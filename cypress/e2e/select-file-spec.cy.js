/// <reference types="Cypress" />
const faker = require('faker-br');

describe('Fazendo o upload de arquivos e testando o faker', ()=> {

    it('Upload via caminho do arquivo (arquivo na raiz do projeto)', () => {
        cy.visit('./src/index.html')

        cy.get('#file-upload').selectFile('./README.md')
        //cy.get('input[type="file"]').selectFile('./README.md')
    })

    it.only('Upload via fixture', ()=> {
         cy.visit('./src/index.html')

        //cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')

        cy.fixture('example.json').as('laranja')
        cy.get('input[type="file"]').selectFile('@laranja')
    })

})




