/**
 * AppMenuElements
 * Abstraction for mapping all elements of the App Menu.
 * Use these selectors with BaseTest methods in your test or page actions.
 */
class AppMenuElements {
  // Navigation Bar
  static menuButton = '[data-test="sidenav-toggle"]';
  static appTitle = '[data-test="app-name-logo"]';
  static newTransactionButton = '[data-test="nav-top-new-transaction"]';
  static notificationsButton = '[data-test="nav-top-notifications-link"]';
  static notificationsBadge = '[data-test="nav-top-notifications-count"]';
  static userMenuButton = '[data-test="sidenav-user-menu"]';
  static userMenuAvatar = '[data-test="sidenav-user-avatar"]';
  static userMenuName = '[data-test="sidenav-user-full-name"]';
  static userMenuUsername = '[data-test="sidenav-username"]';
  static logoutButton = '[data-test="sidenav-signout"]';

  // Navigation Drawer
  static navDrawer = '[data-test="sidenav"]';
  static navDrawerHome = '[data-test="sidenav-home"]';
  static navDrawerMyAccount = '[data-test="sidenav-user-settings"]';
  static navDrawerBankAccounts = '[data-test="sidenav-bankaccounts"]';
  static navDrawerNotifications = '[data-test="sidenav-notifications"]';
  static navDrawerLogout = '[data-test="sidenav-signout"]';

  // Account Balance
  static accountBalance = '[data-test="sidenav-user-balance"]';
  static accountBalanceAmount = '[data-test="sidenav-user-balance-amount"]';
  static accountBalanceCurrency = '[data-test="sidenav-user-balance-currency"]';
}

export default AppMenuElements; 