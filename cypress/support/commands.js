
const baseUrl = Cypress.config().baseUrl;

const MAT_OPTION = 'mat-option';
const DATA_CY_GUARDAR = '[data-cy=guardar]';
const DATA_CY_MENU_ARROW = '[data-cy=menu-arrow]';
const DATA_CY_MENU = '[data-cy=menu-main]';
const DATA_CY_LINK_PELICULAS = '[data-cy=link-peliculas]';
const DATA_CY_NUEVA_PELICULA = '[data-cy=nueva-pelicula]';

function crearPelicula() {
  cy.intercept('POST', 'movies').as(
    'apiPostMovies'
  );
  cy.visit(baseUrl);

  cy.get(DATA_CY_MENU, { timeout: 10000 }).should(Cypress.env('esVisible'));
  cy.get(DATA_CY_MENU).click();

  cy.get(DATA_CY_LINK_PELICULAS, { timeout: 10000 }).should(Cypress.env('esVisible'));
  cy.get(DATA_CY_LINK_PELICULAS).click();

  cy.get(DATA_CY_NUEVA_PELICULA, { timeout: 10000 }).should(Cypress.env('esVisible'));
  cy.get(DATA_CY_NUEVA_PELICULA).click();

  cy.get('[data-cy=titulo]').type(Cypress.env('titleTest'));
  cy.get('[data-cy=poster]').type(Cypress.env('posterTest'));
  cy.get('[data-cy=genre]').click().get(MAT_OPTION).contains(Cypress.env('genreTest')).click();
  cy.get('[data-cy=actors]').click().get(MAT_OPTION).contains(Cypress.env('actorsTest')).click();
  cy.get('[data-cy=studio]').click().get(MAT_OPTION).contains(Cypress.env('studioTest')).click();
  cy.get('[data-cy=year]').type(Cypress.env('yearTest'));
  cy.get('[data-cy=duration]').type(Cypress.env('durationTest'));
  cy.get('[data-cy=imdbRating]').type(Cypress.env('imdbRatingTest'));

  cy.get(DATA_CY_GUARDAR).click();
  cy.wait('@apiPostMovies').then((interception) => cy.wrap(interception.response.body.id));
}

Cypress.Commands.add('crearPelicula', crearPelicula);
