
describe('Flujo de ejecución de usuario"', () => {
  const baseUrl = Cypress.config().baseUrl;

  const DATA_CY_ACTUALIZAR = '[data-cy=actualizar]';
  const DATA_CY_TITULO = '[data-cy=titulo]';

  it('El usuario crear y editar la película"', function() {
    // cy.kcLogin(Cypress.env('userSiaciOg'), Cypress.env('userPassword'));
    cy.crearPelicula().then((idPelicula) => {
      cy.get(Cypress.env('classSnackbar')).should('not.be.empty');

      cy.visit(baseUrl + '/movies/edit/' + idPelicula);
      cy.get(DATA_CY_ACTUALIZAR, { timeout: 10000 }).should(Cypress.env('esVisible'));

      cy.get(DATA_CY_TITULO).clear();
      cy.get(DATA_CY_TITULO).type(Cypress.env('textoModificado'));
      cy.get(DATA_CY_ACTUALIZAR).click();
      cy.get(DATA_CY_ACTUALIZAR, { timeout: 10000 }).should(Cypress.env('esVisible'));
      cy.get(DATA_CY_TITULO).invoke('val', Cypress.env('textoModificado'));
    });
  });

});
