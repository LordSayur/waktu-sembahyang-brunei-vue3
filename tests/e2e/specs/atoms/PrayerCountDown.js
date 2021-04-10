const component = 'atoms-prayercountdown'
const iframeSrc = (variant) => {
  return `http://localhost:6006/iframe.html?id=${component}--${variant}&viewMode=story`
}

describe('Prayer Count Down', () => {
  it('should display count and next payer time in inactive mode', () => {
    cy.visit(iframeSrc("inactive"));
    cy.get('#count').should('contain.text', '30 minit');
    cy.get('#message').should('contain.text', 'kan masuk');
    cy.get('#next-prayer').should('contain.text', 'Imsak');
  });
  it('should display count and next payer time in active mode', () => {
    cy.visit(iframeSrc("active"));
    cy.get('#count')
      .should('contain.text', '10 minit')
      .should('have.class', 'active');
    cy.get('#message').should('contain.text', 'kan masuk');
    cy.get('#next-prayer').should('contain.text', 'Imsak');
  });
  it('should display count and next payer time for Tutong district', () => {
    cy.visit(iframeSrc("tutong"));
    cy.get('#count').should('contain.text', '31 minit');
    cy.get('#message').should('contain.text', 'kan masuk');
    cy.get('#next-prayer').should('contain.text', 'Imsak');
  });
  it('should display count and next payer time for Belait district', () => {
    cy.visit(iframeSrc("belait"));
    cy.get('#count').should('contain.text', '33 minit');
    cy.get('#message').should('contain.text', 'kan masuk');
    cy.get('#next-prayer').should('contain.text', 'Imsak');
  });
});