/// <reference types="Cypress" />
import { PaginaDeTODO, pagTODO } from './todoPage'

describe('TO DOS', ()=>{
    it('Criando tarefas e selecionando uma', ()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('Aprender a usar o Cypress {enter}')
        cy.get('.new-todo').type('Aprender a criar Page Objects {enter}')
        cy.get(':nth-child(1) > .view > .toggle').click()

        cy.get('.completed > .view > label').should('be.visible')
    })

    it('Criando tarefas e selecionando com Page Objects', ()=>{
        pagTODO.acessarPaginaDeToDos()
            .criarToDo()
            .marcaTarefaComoConcluida()
            .deveVerificarSeAlgumaTarefaFoiConcluida()
    })

    it('Criando tarefas sem selecionar que foi concluída', ()=>{
        pagTODO.acessarPaginaDeToDos()
            .criarToDo()
            .deveVerificarQueNenhumaTarefaFoiConcluida()
    })

    it.only('Criando tarefas customizadas sem selecionar que foi concluída', ()=>{
        pagTODO.acessarPaginaDeToDos()
            .criarToDoPara('Aprendendo Selenium')
            .deveVerificarQueNenhumaTarefaFoiConcluida()
    })

    it('Teste 2', ()=>{
        pagTODO.acessarPaginaDeToDos()
    })
})

// POM
// Page Object Model