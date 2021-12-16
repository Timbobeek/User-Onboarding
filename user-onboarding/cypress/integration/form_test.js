describe('User Onboarding App', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  //helpers to get elements

  const nameInput = () => cy.get('input[name=first_name]')

  it('proper elements are showing', ()=>{
    nameInput().should('exist');
  })























})