import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {

 before(function () {
    cy.visit('/');

 })

  it('Should correctly display page title', () => {
    cy.checkPageTitle('Next To Go Races');
  });

  it('Should display expected values for race category filters', () => {
   cy.validateCategoryName(0,'Thoroughbred');
   cy.validateCategoryName(1,'Greyhound');
   cy.validateCategoryName(2,'Harness');
  });

  it('Should display expected values for race row contents', () => {
     for (let i = 0; i < 5; i++) {
        cy.validateListText('.race-number',i, 'R');
        cy.validateListTextNotEmpty('.race-name',i);
        cy.validateListTextNotEmpty('.item',i);
     }
  });

});
