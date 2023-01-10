describe('Testando Selects', ()=> {

    beforeEach(()=> {
        // caso não use baseUrl
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        

        // caso use baseURL
        // cy.visit('/2022/02/sample-registration-form.html')

    })

    it('Selecionando New Delhi via value', ()=> {
        // Simplesmente deixa selecionado a opção New delhi
        cy.get('[name="city"]').select('ND')

        // Faz uma busca do mesmo select de cima, porém verifica qual a opção 
        // que está selecionada.
        cy.get('[name="city"] option:selected')
            .should('have.text', 'New Delhi')
    })

    it('Selecionando Bhopal via texto', ()=> {
        cy.get('[name="city"]').select('Bhopal')
            .should('have.value', 'Bh')
    })

    it('Selecionando Indore via index', ()=> {
        cy.get('[name="city"]').select(3)
            .should('have.value', 'Ind')

        cy.get('[name="city"] option:selected')
            .should('have.text', 'Indore')
    })

    it('Deve fazer validações em mais de um elemento',  ()=>{
        // digitando em um campo de texto e verificando se o valor foi digitado
        cy.get('#cname').type('Rafael Peixoto')
            .should('have.value', 'Rafael Peixoto')
        //cy.get('[id="cname"]')

        // selecionando uma opção e verificando se foi realmente selecionada.
        cy.get('[name="city"]').select('Bhopal')
        .should('have.value', 'Bh')
    })

    it('Deve selecionar mais de uma opção', ()=> {
        // Verifica se as opções foram selecionadas corretamente
        // Importante: a ordem deve ser a mesma da tela
        cy.get('select[name="Hobbies"]').select(['SG', 'DN'])
            .invoke('val')
            .should('deep.equal', ['SG', 'DN'])
    })

    it('Deve buscar um elemento repetido pelo indice', ()=> {
        cy.get('select').eq(2)
    })
})