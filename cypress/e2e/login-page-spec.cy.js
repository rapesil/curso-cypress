describe('Login Page Test', () => {

    // roda apenas uma vez antes de todos os testes
    before(() => {
        console.log('beforeAll');
    });

    // sempre será executado antes de cada teste
    beforeEach(() => {
        console.log('beforeEach');
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    afterEach(() => {
        console.log('afterEach')
    });

    after(() => {
        console.log('goiaba')
    });


    it('Deve logar com sucesso', () => {
        // busca elemento pelo id - forma simplificada
        cy.get('#username').type('tomsmith')

        // busca elemento pelo id - forma completa
        cy.get('[id="password"]').type('SuperSecretPassword!')

        // busca elemento pela classe - forma simplificada
        cy.get('.fa-sign-in').click()

        cy.get('.icon-signout').should('be.visible')
        cy.get('#flash').should('be.visible')
            .contains('You logged into a secure area!')
    })

    it('Deve informar que dados de login são invalidos:  senha inválida', () => {
        // busca elemento pelo id - forma simplificada
        cy.get('#username').type('tomsmith')

        // busca elemento pelo id - forma completa
        cy.get('[id="password"]').type('senha-errada')

        // busca elemento pela classe - forma simplificada
        cy.get('.fa-sign-in').click()

        cy.get('#flash').should('be.visible')
            .contains('Your password is invalid!')
    })

    it('Deve informar que dados de login são inválidos: usuario invalido', () => {

        // busca elemento pelo id - forma simplificada
        cy.get('#username').type('usuario-errado')

        // busca elemento pelo id - forma completa
        cy.get('[id="password"]').type('SuperSecretPassword!')

        // busca elemento pela classe - forma simplificada
        cy.get('.fa-sign-in').click()

        cy.get('#flash').should('be.visible')
        .contains('Your username is invalid!')
    })
})

