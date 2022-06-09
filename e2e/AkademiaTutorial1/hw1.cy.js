/// <reference types="cypress" />


describe('Test set 1', () =>{
    it('TC 1', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[src="http://automationpractice.com/img/logo.jpg"]')
        .should('be.visible')
        cy.get('#search_query_top')
        .click()
        .type('xxxxxxxxxxxxx')
        cy.get('[name="submit_search"]').click()
        cy.get('#center_column')
        .children()
        .eq(-1)
        .should('contain.text', 'No results were found')
        cy.get('[src="http://automationpractice.com/img/logo.jpg"]')
        .click()
        cy.get('#block_top_menu').children().children().then( task => {
            expect(task[0]).to.contain('Women')
            expect(task[1]).to.contain('Dresses')
            expect(task[2]).to.contain('T-shirts')
        });
    });
    
    it('TC 2', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('[href="http://automationpractice.com/index.php?controller=my-account"]').eq(0).click()
        cy.get('#email').type(Cypress.env("username"))
        cy.get('#passwd').type(Cypress.env("password"))
        cy.get('#SubmitLogin').click()
        cy.get('.myaccount-link-list').children().then( task => {
                    expect(task[1]).to.contain('My credit slips')
                    expect(task[3]).to.contain('My personal information')
        });
        cy.get('[href="http://automationpractice.com/index.php?fc=module&module=blockwishlist&controller=mywishlist"]')
        .should('contain.text', 'My wishlist')
        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]').eq(0).click()
        cy.get('#step_end')
        .should('contain.text', 'Payment')
        cy.get('[href="http://automationpractice.com/index.php?mylogout="]').click()
        cy.get('[title="Log in to your customer account"]')
        .should('contain.text', 'Sign in')
    });

    it('TC 3', () => {
        // opening Website
        cy.visit('http://automationpractice.com/index.php')
        // adding an item to cart
        cy.get('[href="http://automationpractice.com/index.php?controller=cart&add=1&id_product=3&token=e817bb0705dd58da8db074c69f729fd8"]')
        .eq(0)
        .click({ force: true })
        // checking if product is in the cart
        cy.get('#layer_cart')
        .should('contain.text', 'Product successfully added to your shopping cart')
        // proceeding to checkout
        cy.contains('Proceed to checkout')
        .click()
        // checking if checkout contains different attributes
        cy.get('#order_step').children().then( task => {
            expect(task[0]).to.contain('Summary')
            expect(task[1]).to.contain('Sign in')
            expect(task[2]).to.contain('Address')
            expect(task[3]).to.contain('Shipping')
            expect(task[4]).to.contain('Payment')
        })
        // deleting a product from cart
        cy.get('.icon-trash')
        .click()
        // checking if the product is deleted from cart
        cy.get('.alert-warning')
        .should('contain.text', 'Your shopping cart is empty.')
    })

    it('TC 4', () => {
        // opening Website
        cy.visit('http://automationpractice.com/index.php')
        // clicking on item to check more information
        cy.get('[src="http://automationpractice.com/img/p/7/7-home_default.jpg"]')
        .eq(0)
        .click()
        // checking information about product
        cy.get('#product_condition')
        .should('contain.text', 'Condition')
        cy.get('.table-data-sheet').children().children().then( task => {
            expect(task[0]).to.contain('Compositions')
            expect(task[1]).to.contain('Styles')
            expect(task[2]).to.contain('Properties')
        })
        // getting back to main site
        cy.get('#header_logo').click()
        // checking informatin on main website
        cy.get('.shopping_cart')
        .should('contain.text', 'Cart')
    });
});
