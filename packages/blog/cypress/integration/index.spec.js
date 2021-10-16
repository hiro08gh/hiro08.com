describe('Home', function () {
  beforeEach(function () {
    cy.injectAxe();
  });
  context('accesibility test', function () {
    before(function () {
      cy.visit('/about');
    });
    it('checkA11y', function () {
      cy.checkA11y();
    });
  });
});
