


it ('Training today', () => {
    cy.visit('https://portal.edupage.org/')
    cy.contains('Please log in')
    .should('have.text', 'Please log in')
    cy.get('.slogan')
    .should('be.visible')
    cy.get('a[href="/portal/?module=Login').click();
    cy.get('#lostPasswordBtn').click();
    cy.contains('Please enter')
    .should('be.visible')


    




})