describe('User Login Flow', () => {

  
  beforeEach(() => {
   
    cy.visit('http://localhost:5173/login');
  });

  it('should display an error for incorrect credentials', () => {
    
    cy.get('#email').type('wrong@email.com');

   
    cy.get('#password').type('wrongpassword');

 
    cy.get('form').submit();

   
    cy.contains('Login failed').should('be.visible');
  });

  it('should successfully log in and redirect with correct credentials', () => {
   
    const user = {
      email: 'tester@gopolicy.com',
      password: 'securepassword123'
    };
    
    
    cy.get('#email').type(user.email);


    cy.get('#password').type(user.password);
    
  
    cy.get('form').submit();

   
    cy.url().should('eq', 'http://localhost:5173/');

    
    cy.get('nav').contains('Login').should('not.exist');
    cy.get('nav').contains('Logout').should('be.visible');
  });

});