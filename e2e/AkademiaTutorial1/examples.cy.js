/// <reference types="cypress" />

it ('Akademia testing aplikacie' , () =>{
cy.visit('/')
cy.get('.svg')
cy.contains('PARA')
cy.get('#profil---')
cy.contains('republiky').click()
cy.contains('SLUŽBY').click()

});