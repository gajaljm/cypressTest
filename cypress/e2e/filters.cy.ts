describe('Category Filters', () => {

before(function () {
    cy.visit('/');
 })

  it('Should validate that all checkboxes are checked by default', () => {
       cy.get('.filter-checkbox').eq(0).check().should('be.checked');
       cy.get('.filter-checkbox').eq(1).check().should('be.checked');
       cy.get('.filter-checkbox').eq(2).check().should('be.checked');
  });

  it('Should validate that checkboxes filter content appropriately', () => {
        cy.get('.filter-checkbox').eq(0).click();
        cy.get('.filter-checkbox').eq(1).click();
  });

  it('Should validate that unchecking all checkboxes re-enables all', () => {
        cy.get('.filter-checkbox').eq(0).click();
        cy.get('.filter-checkbox').eq(1).click();
        cy.get('.filter-checkbox').eq(2).click();
        cy.get('.filter-checkbox').eq(0).check().should('be.checked');
        cy.get('.filter-checkbox').eq(1).check().should('be.checked');
        cy.get('.filter-checkbox').eq(2).check().should('be.checked');
  });
});
