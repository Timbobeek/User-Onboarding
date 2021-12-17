describe('User Onboarding App', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  //helpers to get elements

  const nameInput = () => cy.get('input[name=first_name]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  
  const submitButton = () => cy.get('button'); 


  //just to check that i used proper elements from form.js
  it('proper elements are showing', ()=>{
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');

    submitButton().should('exist');
  })

  

  describe('When user fills out the form', () => {
    it('name, email, password can be typed', () => {
      nameInput()
        .should('have.value', '')
        .type('name test test')
        .should('have.value', 'name test test')

      emailInput()
        .should('have.value', '')
        .type('email@yandex.ru')
        .should('have.value', 'email@yandex.ru') //important what you type here, since it is a type 'email' and has its own rules

      passwordInput()
        .should('have.value', '')
        .type('password test test')
        .should('have.value', 'password test test')
    })

    it('submit button is disabled', ()=>{
      submitButton().should('be.disabled');
    })
  })

  describe('When user wants to submit the form',()=>{
    it('the submit button works when all fields are filled out', ()=>{
      nameInput().type('Timmeehhhhhh');
      emailInput().type('timmeh@yahoo.com');
      passwordInput().type('timmy12345%');
      submitButton().should('not.be.disabled');
    })
  })























})