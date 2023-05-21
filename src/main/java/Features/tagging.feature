@FunctionalTest
Feature: Adidas Login Testing

@SmokeTest @RegressionTest
Scenario: Login with correct email and correct password
Given This is a valid login test

@SmokeTest @RegressionTest
Scenario: Verify top page links
Given Clicking on top page links

@RegressionTest
Scenario: Search anything
Given Clicking on search box

@SmokeTest @End2End
Scenario: Search for orders
Given Clicking on order link

@SmokeTest @End2End
Scenario: Go to account info
Given Clicking on account link

@End2End
Scenario: Account Logout
Given This is a logout test

Scenario: Browser closed
Given This is a close browser test