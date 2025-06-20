import BaseTest from '../adapters/test_base';
import HomePageElements from '../elements/home_page_elements';

/**
 * HomePage Class
 * Page Object Model for the Home Page with all necessary methods for UI testing.
 * Integrates with HomePageElements and BaseTest for reliable automation.
 */
class HomePage {

  // Create a Method to make sure that the Page was correctly loaded, identifying by the app title
  static verifyHomePageLoaded() {
    BaseTest.shouldBeVisible(HomePageElements.userOnboardingDialogTitle);
  }

  // Bank Account Methods
  static clickOnboardingDialogTitle() {
    BaseTest.click(HomePageElements.userOnboardingDialogTitle);
  }

  static clickOnboardingNextButton() {
    BaseTest.click(HomePageElements.onboardingNextButton);
  }

  static inputBankName(bankName) {
    BaseTest.type(HomePageElements.bankNameInput, bankName);
  }

  static inputRoutingNumber(routingNumber) {
    BaseTest.type(HomePageElements.routingNumberInput, routingNumber);
  }

  static inputAccountNumber(accountNumber) {
    BaseTest.type(HomePageElements.accountNumberInput, accountNumber);
  }

  static clickSaveBankAccountButton() {
    BaseTest.click(HomePageElements.saveBankAccountButton);
  }

  static clickDoneButton() {
    BaseTest.click(HomePageElements.doneButton);
  }

  static shouldSeeOnboardingSuccessMessage() {
    BaseTest.shouldBeVisible(HomePageElements.onboardingSuccessMessage);
  }

  static shouldSeeBankNameInList(bankName) {
    BaseTest.elementShouldContainText(HomePageElements.bankAccountName, bankName);
  }
}

export default HomePage;
