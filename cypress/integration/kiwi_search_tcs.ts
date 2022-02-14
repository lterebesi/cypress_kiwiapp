describe("Kiwi App - Search flights scenarios", () => {
  const cookiesAccept        = '.bxaSJY';
  const defaultDepartureCity = '[data-test="PlacePickerInput-origin"]'
  const bookingCheckbox      = 'input[type=checkbox]';
  const firstDestination     = '[data-test="PlacePickerInput-destination"]';
  const secondDestination    = '[data-test="PlacePickerInput-destination"] > :nth-child(2)';
  const searchButton         = '[data-test="LandingSearchButton"]';
  const cheapestprice        = 'Cheapest';
  const closeDefaultLocation = '[data-test="PlacePickerInputPlace-close"]';
  const departureLocation    = '[data-test="SearchField-input"]';
  const departureDate        = '[name="search-inboundDate"]';
  const setDatesButton       = 'Set dates';
  const lastDepartureDate    = '[data-test="DayDateTypography"]';

  // As all scenarios use the same URL, accept cookies and have a default location set,
  // they were added within the beforeEach() hook
  beforeEach(() => {
    cy.visit(Cypress.env("baseURL"));
    cy.get(cookiesAccept).click();
    cy.get(bookingCheckbox).uncheck({ force: true });

    cy.get(defaultDepartureCity).then(($defaultCity) => {
      const defaultCity = $defaultCity.text();
      cy.log("The default departure city is: ", defaultCity);
      cy.get(defaultDepartureCity).should("contain", defaultCity);
    });
  });

  // Each scenario performs as ultimate steps a Search button click and validates a text
  // which is unique on the landing sarch results page - added in the afterEach() hook
  afterEach(() => {
    cy.get(searchButton).click();
    cy.contains(cheapestprice).should("be.visible");
    cy.clearCookies();
  });

  it("Search for a flight - from the default location to single destination, anytime", () => {
    cy.get(firstDestination).click();
    cy.get(firstDestination)
      .first()
      .type(Cypress.env("toDestination"), { delay: 700 })
      .type("{enter}", { delay: 700 })
      .type("{esc}");
    cy.get(firstDestination).should("contain", Cypress.env("toDestination"));
  });

  it("Search for a flight - from the default location to single destination, preferred dates", () => {
    cy.get(firstDestination).click();
    cy.get(firstDestination)
      .first()
      .type(Cypress.env("toDestination"), { delay: 700 })
      .type("{enter}", { delay: 700 })
      .type("{esc}");
    cy.get(firstDestination).should("contain", Cypress.env("toDestination"));
    cy.get(departureDate).click();
    cy.get(lastDepartureDate).last().click();
    cy.contains(setDatesButton).click();
  });

  it("Search for a flight - from the default location to multiple destinations, anytime", () => {
    cy.get(firstDestination).click();
    cy.get(firstDestination)
      .first()
      .type(Cypress.env("toDestination"), { delay: 700 })
      .type("{enter}", { delay: 700 })
      .type(Cypress.env("toDestinationTwo"), { delay: 700 });
    cy.get(secondDestination).type("{enter}", { delay: 700 }).type("{esc}");

    cy.get(firstDestination).should("contain", Cypress.env("toDestination"));
    cy.get(secondDestination).should(
      "contain",
      Cypress.env("toDestinationTwo")
    );
  });

  it("Search for a flight - from new location, anytime", () => {
    cy.get(closeDefaultLocation).click();
    cy.get(departureLocation)
      .first()
      .click()
      .type(Cypress.env("newDepartureLocation"), { delay: 700 })
      .type("{enter}", { delay: 700 });
    cy.get(firstDestination).click();
    cy.get(firstDestination)
      .first()
      .type(Cypress.env("toDestination"), { delay: 700 });
    cy.get(firstDestination)
      .first()
      .type("{enter}", { delay: 700 })
      .type("{esc}");
    cy.get(firstDestination).should("contain", Cypress.env("toDestination"));
  });

  it("Search for a flight - from new location, preferred dates", () => {
    cy.get(closeDefaultLocation).click();
    cy.get(departureLocation)
      .first()
      .click()
      .type(Cypress.env("newDepartureLocation"), { delay: 700 })
      .type("{enter}", { delay: 700 });
    cy.get(firstDestination).click();
    cy.get(firstDestination)
      .first()
      .type(Cypress.env("toDestination"), { delay: 700 });
    cy.get(firstDestination)
      .first()
      .type("{enter}", { delay: 700 })
      .type("{esc}");

    cy.get(firstDestination).should("contain", Cypress.env("toDestination"));

    cy.get(departureDate).click();
    cy.get(lastDepartureDate).last().click();
    cy.contains(setDatesButton).click();
  });
});
