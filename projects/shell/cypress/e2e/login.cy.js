
describe('Login and Register Form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000/');
  });

  it('Should display the login form correctly', () => {
   

    // Verifica se o campo de usuário (username) está presente
    cy.get('input#username').should('be.visible').and('have.attr', 'placeholder', 'Enter your user');

    // Verifica se o campo de senha (password) está presente
    cy.get('input#password').should('be.visible').and('have.attr', 'placeholder', 'Enter your password');

    // Verifica se o botão "Next" está presente
    cy.get('button.btn_submit').should('be.visible').and('contain', 'Next');
  });

   it('Should display an error when submitting empty form', () => {

    // Preenche o campo de usuário com um email válido
    cy.get('input#username').type('validuser@example.com');

    // Preenche o campo de senha com uma senha válida
    cy.get('input#password').type('validpassword123');

    // Clica no botão "Next"
    cy.get('button.btn_submit').click();


  });
  });
