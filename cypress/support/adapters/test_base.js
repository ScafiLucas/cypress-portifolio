/**
 * BaseTest Class
 * Cypress adapter centralizing basic commands and utilities for web automation.
 * All actions accept an optional timeout parameter to improve test reliability.
 *
 * Usage:
 *   Import the class in your test and use the static methods.
 *   Example:
 *     import BaseTest from '../support/base_test';
 *     BaseTest.visitUrl('https://example.com');
 */
class BaseTest {
  // ===========================
  // Navigation
  // ===========================

  /**
   * Visits a specific URL.
   * @param {string} url - The URL to visit.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static visitUrl(url, timeout = 10000) {
    cy.visit(url, { timeout });
  }

  /**
   * Reloads the current page.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static reloadPage(timeout = 10000) {
    cy.reload({ timeout });
  }

  /**
   * Navigates back to the previous page.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static goBack(timeout = 10000) {
    cy.go('back', { timeout });
  }

  /**
   * Navigates forward to the next page.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static goForward(timeout = 10000) {
    cy.go('forward', { timeout });
  }

  // ===========================
  // Elements
  // ===========================

  /**
   * Gets an element by selector.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   * @returns {Cypress.Chainable} - Cypress chainable for the element.
   */
  static getElement(selector, timeout = 10000) {
    return cy.get(selector, { timeout });
  }

  /**
   * Gets an element by index.
   * @param {string} selector - CSS selector of the element.
   * @param {number} index - Index of the element (0-based).
   * @param {number} [timeout=10000] - Optional timeout in ms.
   * @returns {Cypress.Chainable} - Cypress chainable for the element.
   */
  static getElementAtIndex(selector, index, timeout = 10000) {
    return cy.get(selector, { timeout }).eq(index);
  }

  /**
   * Clicks an element.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static click(selector, timeout = 10000) {
    cy.get(selector, { timeout }).click();
  }

  /**
   * Clicks an element by index.
   * @param {string} selector - CSS selector of the element.
   * @param {number} index - Index of the element (0-based).
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static clickElementAtIndex(selector, index, timeout = 10000) {
    cy.get(selector, { timeout }).eq(index).click();
  }

  /**
   * Clicks an element containing specific text.
   * @param {string} selector - CSS selector of the element.
   * @param {string} text - Text to find and click.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static clickElementWithText(selector, text, timeout = 10000) {
    cy.get(selector, { timeout }).contains(text).click();
  }

  /**
   * Long clicks an element.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static longClick(selector, timeout = 10000) {
    cy.get(selector, { timeout }).click({ force: true, multiple: true, delay: 1000 });
  }

  /**
   * Types text into a field.
   * @param {string} selector - CSS selector of the field.
   * @param {string} text - Text to type.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static type(selector, text, timeout = 10000) {
    cy.get(selector, { timeout }).type(text);
  }

  /**
   * Clears a text field.
   * @param {string} selector - CSS selector of the field.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static clearField(selector, timeout = 10000) {
    cy.get(selector, { timeout }).clear();
  }

  /**
   * Selects a value in a dropdown.
   * @param {string} selector - CSS selector of the dropdown.
   * @param {string} value - Value to select.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static selectDropdown(selector, value, timeout = 10000) {
    cy.get(selector, { timeout }).select(value);
  }

  // ===========================
  // Assertions
  // ===========================

  /**
   * Asserts that an element is visible.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldBeVisible(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible');
  }

  /**
   * Asserts that an element is not visible.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldNotBeVisible(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('not.be.visible');
  }

  /**
   * Asserts that a text is present on the page.
   * @param {string} text - Text to check.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldContainText(text, timeout = 10000) {
    cy.contains(text, { timeout }).should('exist');
  }

  /**
   * Asserts that an element contains specific text.
   * @param {string} selector - CSS selector of the element.
   * @param {string} text - Expected text.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static elementShouldContainText(selector, text, timeout = 10000) {
    cy.get(selector, { timeout }).should('contain', text);
  }

  /**
   * Asserts that elements have a specific length.
   * @param {string} selector - CSS selector of the elements.
   * @param {number} length - Expected length.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldHaveLength(selector, length, timeout = 10000) {
    cy.get(selector, { timeout }).should('have.length', length);
  }

  /**
   * Asserts that an element exists.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldExist(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('exist');
  }

  /**
   * Asserts that an element does not exist.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldNotExist(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('not.exist');
  }

  /**
   * Asserts that an element is disabled.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldBeDisabled(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.disabled');
  }

  /**
   * Asserts that an element is enabled.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static shouldBeEnabled(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.enabled');
  }

  /**
   * Gets an element by selector and returns a chainable.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   * @returns {Cypress.Chainable} - Cypress chainable for the element.
   */
  static getElementChainable(selector, timeout = 10000) {
    return cy.get(selector, { timeout });
  }

  /**
   * Gets an element by index and returns a chainable.
   * @param {string} selector - CSS selector of the element.
   * @param {number} index - Index of the element (0-based).
   * @param {number} [timeout=10000] - Optional timeout in ms.
   * @returns {Cypress.Chainable} - Cypress chainable for the element.
   */
  static getElementAtIndexChainable(selector, index, timeout = 10000) {
    return cy.get(selector, { timeout }).eq(index);
  }

  // ===========================
  // Waits
  // ===========================

  /**
   * Waits for a specific amount of time (ms).
   * @param {number} time - Time in milliseconds.
   */
  static wait(time) {
    cy.wait(time);
  }

  /**
   * Waits until an element is visible.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static waitForElementVisible(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible');
  }

  /**
   * Waits until an element is not visible.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static waitForElementNotVisible(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('not.exist');
  }

  // ===========================
  // Utilities
  // ===========================

  /**
   * Uploads a file.
   * @param {string} selector - CSS selector of the file input.
   * @param {string} filePath - Path to the file.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static uploadFile(selector, filePath, timeout = 10000) {
    cy.get(selector, { timeout }).selectFile(filePath);
  }

  /**
   * Executes a custom Cypress command.
   * @param {Function} command - Custom Cypress function.
   */
  static executeCommand(command) {
    command();
  }

  // ===========================
  // URL Assertions
  // ===========================

  /**
   * Asserts that the current URL includes a specific path.
   * @param {string} path - The path to check for in the URL.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static urlShouldInclude(path, timeout = 10000) {
    cy.url({ timeout }).should('include', path);
  }

  /**
   * Asserts that the current URL equals a specific URL.
   * @param {string} url - The expected URL.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static urlShouldEqual(url, timeout = 10000) {
    cy.url({ timeout }).should('eq', url);
  }

  /**
   * Gets the current URL and returns a chainable for further assertions.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   * @returns {Cypress.Chainable} - Cypress chainable for the URL.
   */
  static getCurrentUrl(timeout = 10000) {
    return cy.url({ timeout });
  }
}

export default BaseTest;
