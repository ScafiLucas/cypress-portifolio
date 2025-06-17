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
   * Clicks an element.
   * @param {string} selector - CSS selector of the element.
   * @param {number} [timeout=10000] - Optional timeout in ms.
   */
  static click(selector, timeout = 10000) {
    cy.get(selector, { timeout }).click();
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
}

export default BaseTest;
