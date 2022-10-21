describe("Негативная авторизация", function () {
  it("Негативная проверка авторизации с невалидным паролем", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#mail").type("German@dolnikov.ru");
    cy.get("#pass").type("Iloviqa1");
    cy.get("#loginButton").click();
    cy.contains("Нужно исправить проблему валидации");
    cy.contains("#exitMessageButton");
  });
});
