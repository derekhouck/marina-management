describe('The Home Page', () => {
  beforeEach(() => {
    cy.app('clean')
    cy.appFixtures()
  })

  it('successfully loads', () => {
    cy.visit('/')
  })
})