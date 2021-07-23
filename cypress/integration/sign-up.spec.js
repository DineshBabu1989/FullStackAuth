describe('Sign Up', () => {
  
  it('Should sign up a user successfully', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("dinesh babu");
    cy.get('input[name=email]').type("emaildinesh@gmail.com");
    cy.get('input[name=password]').type("12345678");
    cy.get('form').submit();
    cy.contains('User registered successfully!');
  });

  it('Should validate the fullname', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("din");
    cy.get('input[name=email]').type("emaildinesh@gmail.com");
    cy.contains('The fullname must be between 5 and 20 characters.');
  });

  it('Should validate the email', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("dinesh");
    cy.get('input[name=email]').type("emaildineshcom");
    cy.get('input[name=password]').type("12345678");
    cy.contains('This is not a valid email.');
  });

  it('Should validate the password', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("dinesh");
    cy.get('input[name=email]').type("emaildinesh@gmail.com");
    cy.get('input[name=password]').type("12345");
    cy.get('form').submit();
    cy.contains('The password must be between 8 and 40 characters.');
  });

  it('Should fail for a duplicate fullname', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("dinesh babu");
    cy.get('input[name=email]').type("emaildinesh@gmail.com");
    cy.get('input[name=password]').type("12345678");
    cy.get('form').submit();
    cy.contains('Failed! fullname is already in use');
  });

  it('Should fail for a duplicate email', () => {
    cy.visit('/register');
    cy.get('input[name=fullname]').type("dinesh 1");
    cy.get('input[name=email]').type("emaildinesh@gmail.com");
    cy.get('input[name=password]').type("12345678");
    cy.get('form').submit();
    cy.contains('Failed! Email is already in use!');
  });
})