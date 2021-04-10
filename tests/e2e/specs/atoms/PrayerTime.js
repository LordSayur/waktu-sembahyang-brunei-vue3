const component = 'atoms-prayertime'
const iframeSrc = (variant) => {
  return `http://localhost:6006/iframe.html?id=${component}--${variant}&viewMode=story`
}

describe('Prayer Time', () => {
  it('should display correct name and time (1:01 AM)', () => {
    cy.visit(iframeSrc("inactive-1"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '1:01 AM');
  });
  it('should display correct name and time (11:11 AM)', () => {
    cy.visit(iframeSrc("inactive-2"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '11:11 AM');
  });
  it('should display correct name and time (1:01 PM)', () => {
    cy.visit(iframeSrc("inactive-3"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '1:01 PM');
  });
  it('should display correct name and time (11:11 PM)', () => {
    cy.visit(iframeSrc("inactive-4"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '11:11 PM');
  });
  it('should contain active class when active props is true)', () => {
    cy.visit(iframeSrc("active"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '1:00 AM');
    cy.get('.active').should('exist')
  });
  it('should display correct name and time for Tutong district (1:01 AM)', () => {
    cy.visit(iframeSrc("tutong"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '1:01 AM');
    cy.get('.active').should('exist')
  });
  it('should display correct name and time for Belait district (1:03 AM)', () => {
    cy.visit(iframeSrc("belait"));
    cy.get('#name').should('contain.text', 'Imsak');
    cy.get('#separator').should('contain.text', ':');
    cy.get('#time').should('contain.text', '1:03 AM');
    cy.get('.active').should('exist')
  });
})
