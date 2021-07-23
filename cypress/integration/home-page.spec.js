describe('Home page', () => {
  it('Should render home page properly', () => {
    cy.visit('/');
    cy.contains('Public Content');
    cy.contains('li', 'Sign Up').click();
    cy.url().should('include', '/register');

    cy.contains('li', 'Login').click();
    cy.url().should('include', '/login');

    cy.contains('li', 'Home').click();;
    cy.url().should('include', '/');
  })
})