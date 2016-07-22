
'use strict';

var CheckoutPage = function () {
};

CheckoutPage.prototype = Object.create([], {

  placeOrderBtn: {
    get: function () {
      return browser.driver.findElement(by.css('input.btn.btn-primary.pull-right.col-xs-12.col-sm-3.col-md-3.placeOrder'));
    }
  }
});

module.exports = CheckoutPage;
