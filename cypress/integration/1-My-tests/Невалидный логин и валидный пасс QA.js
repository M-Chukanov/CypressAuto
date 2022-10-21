describe("Невалидный логин", function () {
  it("негативная проверка авторизации", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("erman@dolniko.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.contains("Такого логина или пароля нет");
    cy.contains("#exitMessageButton");
  });
});
