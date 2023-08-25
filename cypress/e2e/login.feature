Feature: Login to Application


    Scenario: User Successfully Signs In
        Given User navigates to the login page
        When User submits valid login credentials
        Then User should see the homepage

    Scenario: Invalid Credentials Sign In
        Given User navigates to the login page
        When User submits invalid login credentials
        Then User should see alert message on login page