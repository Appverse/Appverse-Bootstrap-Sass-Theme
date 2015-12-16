Feature: LOGIN

Narrative:
    In order to compare testing frameworks for HTML5 apps
    As a user
    I want to be able to execute end to end tests for the PilotoBS

Background:
    Given I am on the login page

Scenario Outline: Login as a verified user
    Meta: @scLoginLocale

    Then I should see the header: <title>

    When I login
    Then I should be on the accounts page

    Examples:

    | title                       | username | password |
    | Welcome to Internet Banking | AUMMYAPP | CWK1111M |
