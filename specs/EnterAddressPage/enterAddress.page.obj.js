'use strict';

var EnterAddress = function () {
};

EnterAddress.prototype = Object.create([], {

  selectAddressTypeHome: {
    get: function () {
      return browser.driver.findElement(by.css('[value="string:HOME"]'));
    }
  },
  selectContinue: {
    get: function () {
      return browser.driver.findElement(by.css('input.btn.btn-primary.pull-right'));
    }
  }
});

module.exports = EnterAddress;
