describe("Забыли пароль на qa.studio", function () {
  it("проверка восстановления пароля", function () {
    cy.visit("https://login.qa.studio");
    cy.get("#forgotEmailButton").click();
    cy.get("#mailForgot").type("maksimunnmd@gmail.com");
    cy.get("#restoreEmailButton").click();
    cy.contains("Успешно отправили пароль на e-mail");
    cy.contains("exitMessageButton");
  });
});
