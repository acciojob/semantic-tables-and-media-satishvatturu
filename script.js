//your code here
// test.spec.js
describe('My Test Suite', () => {
  it('should pass', () => {
    cy.visit('http://localhost:3000'); // Replace with the correct URL of your application

    // Your other test assertions...

    // Check if there are two media elements in the second section
    cy.get('section:nth-child(2) ol li').should('have.length', 2);
  });
});
