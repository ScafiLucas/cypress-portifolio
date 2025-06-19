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
}

export default HomePage;
