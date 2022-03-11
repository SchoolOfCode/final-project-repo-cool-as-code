describe("Navigation", () => {
  it("should navigate to the home page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "home" and click it
    // cy.get('a[href*="/home"]').click();
    cy.visit("http://localhost:3000/home");

    //Click on logout on navbar, its redirected to home page

    //cy.contains("logout").click();

    //  "add recipe" is clicked and navigates to create recipe form

    //cy.visit("http://localhost:3000/createRecipe");
    //cy.contains("add recipe").click();

    // // // The new url should include "/home"
    // cy.url().should("include", "/home");

    // // Find a link with an href attribute containing "add recipe" and click it
    // cy.get('a[href*="/createRecipe"]').click();

    // // // The new url should include "/recipe"
    // cy.url().should("include", "/createRecipe");

    // // The new page should contain an h1 with "About page"
    // cy.get("h1").contains("About Page");

    cy.clearAuth0Cookies();
  });
});
