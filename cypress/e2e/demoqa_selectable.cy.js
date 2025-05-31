// cypress/e2e/demoqa_selectable.cy.js

describe('DemoQA Selectable Grid Functionality', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/selectable');
  });

  it('should select multiple items in the grid and validate selection', () => {
    
    cy.get('#demo-tab-grid').click(); 

    const itemsToSelect = ["Two", "Four", "Six", "Eight"];
    const itemsToValidateNotSelected = ["One", "Three", "Five", "Seven", "Nine"];

    const selectedItemClass = 'active'; 


    itemsToSelect.forEach(itemText => {
      cy.get('#gridContainer li') 
        .contains(itemText)
        .click();
    });

  
    itemsToSelect.forEach(itemText => {
      cy.get('#gridContainer li') 
        .should('have.class', selectedItemClass);
    });


    itemsToValidateNotSelected.forEach(itemText => {
      cy.get('#gridContainer li')
        .contains(itemText)
        .should('not.have.class', selectedItemClass);
    });
  });

  
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});