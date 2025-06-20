import BaseTest from '../adapters/test_base';
import AppMenuElements from '../elements/app_menu_elements';

/**
 * AppMenuPage Class
 * Page Object Model for the App Menu with all necessary methods for UI testing.
 * Integrates with AppMenuElements and BaseTest for reliable automation.
 */
class AppMenuPage {
  static clickHomeMenuItem() {
    BaseTest.click(AppMenuElements.navDrawerHome);
  }

  static clickMyAccountMenuItem() {
    BaseTest.click(AppMenuElements.navDrawerMyAccount);
  }

  static clickBankAccountsMenuItem() {
    BaseTest.click(AppMenuElements.navDrawerBankAccounts);
  }

  static clickNotificationsMenuItem() {
    BaseTest.click(AppMenuElements.navDrawerNotifications);
  }

  static clickLogoutButton() {
    BaseTest.click(AppMenuElements.logoutButton);
  }

  static shouldSeeUserBalance() {
    BaseTest.shouldBeVisible(AppMenuElements.accountBalance);
  }

  static shouldHaveBalance(balance) {
    BaseTest.elementShouldContainText(AppMenuElements.accountBalance, balance);
  }
}

export default AppMenuPage; 