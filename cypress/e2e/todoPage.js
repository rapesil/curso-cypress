export class PaginaDeTODO {

    acessarPaginaDeToDos() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        return this
    }

    criarToDoPara(tarefa) {
        cy.get('.new-todo').type(`${tarefa} {enter}`) 
        return this
    }

    criarToDo() {
       cy.get('.new-todo').type('Aprendendo Cypress {enter}') 
       return this
    }

    marcaTarefaComoConcluida() {
        cy.get(':nth-child(1) > .view > .toggle').click()
        return this
    }
   
    deveVerificarSeAlgumaTarefaFoiConcluida() {
        cy.get('.completed > .view > label').should('be.visible')
        return this
    }

    deveVerificarQueNenhumaTarefaFoiConcluida() {
        cy.get('.completed > .view > label').should('not.exist')
        return this
    }
}

export const pagTODO = new PaginaDeTODO()
