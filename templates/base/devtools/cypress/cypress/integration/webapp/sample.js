describe('Sample', () => {
  it('looks as expected', () => {
    // @TODO mock the backend for functional/visual tests to ensure stable data
    cy.visit('/');
    cy.matchImageSnapshot('sample');
  });
});
