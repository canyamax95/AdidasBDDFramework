package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			//features = "C:\\QA\\Selenium_Workspace\\AdidasBDDFramework\\src\\main\\java\\Features\\Login.feature",//the path of the feature files
			features = "C:\\QA\\Selenium_Workspace\\AdidasBDDFramework\\src\\main\\java\\Features\\tagging.feature",
			glue={"stepDefinitions"}, //step Definition Package Name
			format= {"pretty","html:test-output", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}, // to generate different types of reports
			monochrome=true, // display the console output in a proper readable format
			strict=true, // it will check if any step is not defined in step definition file
			dryRun = true// To check the mapping is proper between feature file and stepDefinition file
			//tags = {"~@SmokeTest", "~@RegressionTest", "~@End2End"}
			)

	public class TestRunner {
	
}
	
	//ORed: tags = {"@SmokeTest, @RegressionTest"} ----> execute all tests tagged as @SmokeTest OR @RegressionTest
	//ANDed: tags = {"@SmokeTest", "@RegressionTest"} ----> execute all tests tagged as @SmokeTest AND @RegressionTest
	// ~ --> this symbol is used to ignore specific test