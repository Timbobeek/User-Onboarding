describe('User Onboarding App', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  //helpers to get elements

  const nameInput = () => cy.get('input[name=first_name]')

  it('proper elements are showing', ()=>{
    nameInput().should('exist');
  })

  describe('When user fills out the form', () => {
    it('name can be typed', () => {
      nameInput()
        .should('have.value', '')
        .type('test test test')
        .should('have.value', 'test test test')
    })


  })























})