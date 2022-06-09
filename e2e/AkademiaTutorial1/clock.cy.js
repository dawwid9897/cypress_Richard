// FUNCTION "CLOCK"
it('move timer' , () =>{
    const now = new Date()
    cy.visit('https://para-advokat.com/')
    cy.clock(now)
    cy.tick(6000000)

})
// FUNCTION WRAP

it('wrap - object' , () =>{

    cy.visit('https://para-advokat.com/')
    cy.wrap({ amount: 50 }).should('have.property', 'amount').and('eq', 50)
    
    
    const David = () => {
        return 'Buldog'}

        expect(David).to.eq('Buldog')
      cy.wrap({ name: David }).invoke('name').should('eq', 'Buldog') 
        //cy.invoke('David').should('eq', 'Buldog')
        



})
