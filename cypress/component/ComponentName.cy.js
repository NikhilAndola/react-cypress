import Button from "../../src/Button"

describe('ComponentName.cy.js', () => {
  it('check everything is working', () => {
    cy.mount(<Button btnText="Button" />)
  })
})