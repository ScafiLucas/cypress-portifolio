/**
 * HomePageElements
 * Abstraction for mapping all elements of the Home Page.
 * Use these selectors with BaseTest methods in your test or page actions.
 */
class HomePageElements {
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

  // Main Content
  static mainContainer = 'main.MuiContainer-root';
  static contentContainer = '.MainLayout-content';
  static appBarSpacer = '.MainLayout-appBarSpacer';

  // Transaction List
  static transactionList = '[data-test="transaction-list"]';
  static transactionItem = '[data-test="transaction-item"]';
  static transactionAmount = '[data-test="transaction-amount"]';
  static transactionDescription = '[data-test="transaction-description"]';
  static transactionDate = '[data-test="transaction-date"]';
  static transactionSender = '[data-test="transaction-sender"]';
  static transactionReceiver = '[data-test="transaction-receiver"]';

  // Transaction Filters
  static transactionFilters = '[data-test="transaction-list-filter"]';
  static dateRangeFilter = '[data-test="transaction-list-filter-date-range-button"]';
  static amountFilter = '[data-test="transaction-list-filter-amount-range-button"]';
  static clearFiltersButton = '[data-test="transaction-list-filter-clear-button"]';

  // Empty State
  static emptyState = '[data-test="empty-list-header"]';
  static emptyStateMessage = '[data-test="empty-list-message"]';
  static emptyStateButton = '[data-test="empty-list-create-transaction-button"]';

  // Loading States
  static loadingSkeleton = '[data-test="transaction-list-skeleton"]';
  static loadingSpinner = '[data-test="loading-spinner"]';

  // Dialog/Modal
  static dialog = '[data-test="modal"]';
  static dialogTitle = '[data-test="modal-title"]';
  static userOnboardingDialogTitle = '[data-test="user-onboarding-dialog-title"]';
  static dialogContent = '[data-test="modal-content"]';
  static dialogActions = '[data-test="modal-actions"]';
  static dialogCloseButton = '[data-test="modal-close"]';
  static dialogConfirmButton = '[data-test="modal-confirm"]';
  static dialogCancelButton = '[data-test="modal-cancel"]';

  // Account Balance
  static accountBalance = '[data-test="sidenav-user-balance"]';
  static accountBalanceAmount = '[data-test="sidenav-user-balance-amount"]';
  static accountBalanceCurrency = '[data-test="sidenav-user-balance-currency"]';

  // Search
  static searchInput = '[data-test="transaction-list-search-input"]';
  static searchClearButton = '[data-test="transaction-list-search-clear-button"]';

  // Pagination
  static paginationContainer = '[data-test="transaction-list-pagination"]';
  static paginationNextButton = '[data-test="transaction-list-pagination-next"]';
  static paginationPreviousButton = '[data-test="transaction-list-pagination-previous"]';
  static paginationPageButton = '[data-test="transaction-list-pagination-page"]';

  // Tabs
  static tabsContainer = '[data-test="transaction-list-tabs"]';
  static allTransactionsTab = '[data-test="transaction-list-tab-all"]';
  static personalTab = '[data-test="transaction-list-tab-personal"]';
  static friendsTab = '[data-test="transaction-list-tab-friends"]';

  // Footer
  static footer = '[data-test="footer"]';
  static footerText = '[data-test="footer-text"]';
  static footerLinks = '[data-test="footer-links"]';

  // Error States
  static errorMessage = '[data-test="error-message"]';
  static errorRetryButton = '[data-test="error-retry-button"]';

  // Success Messages
  static successMessage = '[data-test="success-message"]';
  static successCloseButton = '[data-test="success-close-button"]';
}

export default HomePageElements;
