

describe ('Test set for Academy', () => {
    it ('Akademia testing1', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('a[href="prod.html?idp_=1"] img')
        .should('be.visible')
        cy.get('a[href="prod.html?idp_=1"] ')
        .last()
        cy.get('.card-block')
        .eq(0)
        .children()
        .parent()
        .should('contain.text', 'Samsung galaxy s6')
        cy.contains('Samsung galaxy s6')
        .should('have.text', 'Samsung galaxy s6')


    

    })
    
    it ('Akademia testing2', () => {
    
    })
})
