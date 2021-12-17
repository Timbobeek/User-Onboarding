describe('User Onboarding App', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  //helpers to get elements

  const nameInput = () => cy.get('input[name=first_name]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const agreementInput = () => cy.get('input[name=termsAgreement]')
  const submitButton = () => cy.get('button');
  const nameValidationMessage = () => cy.get('div#name-error');


  //just to check that i used proper elements from form.js
  it('proper elements are showing', ()=>{
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    agreementInput().check();
    submitButton().should('exist');
  })

  describe('When user fills out the form', () => {
    // it('and name is incomplete then validation message is shown', () => {
    //   nameInput()
    //     .should('have.value', '')
    //     .type('a');

    //   submitButton().should('be.disabled');

    //   nameValidationMessage()
    //     .contains('First name has to be five characters!')
    // })

    it('and name is set and removed then validation message is shown', () => {
      nameInput()
        .should('have.value', '')
        .type('aaaaaa')
        .clear();

      submitButton().should('be.disabled');

      nameValidationMessage()
        .contains('First name is required!')
    })

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

    it('terms of agreement box can be checked',()=>{
      agreementInput()
      .should('not.be.checked')
      .check({force: true})
      .should('be.checked')
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