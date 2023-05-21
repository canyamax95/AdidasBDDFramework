$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/QA/Selenium_Workspace/AdidasBDDFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Adidas Login Testing",
  "description": "",
  "id": "adidas-login-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct email and correct password",
  "description": "",
  "id": "adidas-login-testing;login-with-correct-email-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "This is a valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.this_is_a_valid_login_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Verify top page links",
  "description": "",
  "id": "adidas-login-testing;verify-top-page-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    },
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Clicking on top page links",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.clicking_on_top_page_links()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Search anything",
  "description": "",
  "id": "adidas-login-testing;search-anything",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Clicking on search box",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.clicking_on_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Search for orders",
  "description": "",
  "id": "adidas-login-testing;search-for-orders",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    },
    {
      "line": 16,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Clicking on order link",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.clicking_on_order_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Go to account info",
  "description": "",
  "id": "adidas-login-testing;go-to-account-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SmokeTest"
    },
    {
      "line": 20,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Clicking on account link",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.clicking_on_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Account Logout",
  "description": "",
  "id": "adidas-login-testing;account-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.this_is_a_logout_test()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Browser closed",
  "description": "",
  "id": "adidas-login-testing;browser-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "This is a close browser test",
  "keyword": "Given "
});
formatter.match({
  "location": "TagginStepDefinition.this_is_a_close_browser_test()"
});
formatter.result({
  "status": "skipped"
});
});