'use strict';

var signInModal = function () {
};

signInModal.prototype = Object.create([], {

  userNameField: {
    get: function () {
      return browser.driver.findElement(by.id('user'));
    }
  },

  passwordField: {
    get: function () {
      return browser.driver.findElement(by.id('password'));
    }
  },

  signInButton: {
    get: function () {
      return browser.driver.findElement(by.css('[value="Sign In"]'));
    }
  }
});

module.exports = signInModal;
