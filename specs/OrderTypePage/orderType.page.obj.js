'use strict';

var MyOrderTypePage = function () {
};

MyOrderTypePage.prototype = Object.create([], {

  selectDeliveryOrder: {
    get: function () {
      return browser.driver.findElement(by.linkText('Delivery'));
    }
  },
  addressField: {
    get: function () {
      return browser.driver.findElement(by.name('address'));
    }
    },
    checkAvailability: {
      get: function () {
        return browser.driver.findElement(by.css('input.btn.btn-primary'));
      }
  }
});

module.exports = MyOrderTypePage;
