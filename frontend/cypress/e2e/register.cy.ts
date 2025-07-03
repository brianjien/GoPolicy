describe('User Registration Flow', () => {

  beforeEach(() => {
    cy.visit('/register'); 
  });

  it('should display an error if a user with the same email already exists', () => {
    const existingUser = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    };

    cy.get('#username').type(existingUser.username);
    cy.get('#email').type(existingUser.email);
    cy.get('#password').type(existingUser.password);
    cy.get('form').submit();

    cy.contains('Username or email already exists').should('be.visible');
  });
  
  it('should allow a new user to register successfully and redirect to login', () => {
    const timestamp = Date.now();
    const newUser = {
      username: `newuser_${timestamp}`,
      email: `user_${timestamp}@example.com`,
      password: 'securepassword123',
    };

    cy.get('#username').type(newUser.username);
    cy.get('#email').type(newUser.email);
    cy.get('#password').type(newUser.password);
    cy.get('form').submit();

    cy.url().should('include', '/login');
    cy.contains('User created successfully').should('be.visible');
  });

});