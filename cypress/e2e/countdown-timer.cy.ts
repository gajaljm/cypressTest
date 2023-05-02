describe('Some Feature', () => {

   beforeEach(() => {
        cy.server();
        cy.intercept('GET', '/v2/racing/next-races-category-group**', { fixture: 'get.json' });
        cy.visit('/');

      });

   it('Test Mock fixtures', () => {
     // Your test code
   });

  it('Should validate that timer is ticking down', () => {
    cy.clock();
    let timer = cy.get('.item').invoke('text');
    cy.tick(3000);
  });

  it('Should validate that race time sign swaps to negative when expected jump time is exceeded', () => {
    // Handle this deterministically through mocking race jump times
  });

  it('Should validate that races do not display after 5 minutes past the jump', () => {
    // Handle this deterministically through mocking race jump times
  });

  it('Should validate that races are displayed in the ascending order of jump time', () => {
      // Handle this deterministically through mocking race jump times
    });

});
