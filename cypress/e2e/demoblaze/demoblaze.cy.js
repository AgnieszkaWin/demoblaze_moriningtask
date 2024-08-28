/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Sign un page', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  const userName = faker.internet.userName();
  const password = faker.internet.password();
  it('should create an account, log in and add a phone to the cart', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username')
      .type(userName, { force: true })
      .should('have.value', userName); // Ensure the full username is typed
    cy.get('#sign-password')
      .type(password, { force: true })
      .should('have.value', password); // Ensure the full password is typed
    cy.get(
      '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();
    cy.get('#login2').click();
    cy.get('#loginusername')
      .type(userName, { force: true })
      .should('have.value', userName);
    cy.get('#loginpassword')
      .type(password, { force: true })
      .should('have.value', password);
    cy.get(
      '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();
    cy.get('#nameofuser').should('contain', userName);
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
      .should('contain', 'Samsung galaxy s6')
      .click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6');
  });
});
