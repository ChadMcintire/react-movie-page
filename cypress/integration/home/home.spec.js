describe("Home page", () => {
  beforeEach(() => {
      cy.visit('/')
  })
//  it("new test", () => {
//  })
  it("the title and buttons exist and contain the write words", () => {
    cy.get('.App-header').should('contain', 'GMDB')
    cy.get('button').should('contain', 'Home')
    cy.get('button').should('contain', 'login')
    cy.get('button').should('contain', 'Search')
    expect(cy.get('input[name="movieSearch"]')).toExist()
  })

  it("produces a form with username, password and submit button after clicking the login in button", () => {
    const loginbutton = cy.get('[name="login"]')
    loginbutton.click().then(() => {
      cy.get('button').should('contain', 'Submit')
      expect(cy.get('[name="uname"]')).toExist()
      expect(cy.get('[name="pass"]')).toExist()
    })
  })
})
