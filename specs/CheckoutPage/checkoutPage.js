'use strict';
var CheckoutPage = require('./checkoutPage.page.obj.js'), //require = import
  checkoutPage = new CheckoutPage(), //new instance of homePageObj
  CheckoutPageFunctions = {

  assertions: {
    getPlaceOrderBtn: function () {
      browser.sleep(3000);
      checkoutPage.placeOrderBtn.click();
      browser.waitForAngular();
      //expect().toBe();
    }
  },
  functions: {

  }
};

module.exports = CheckoutPageFunctions;
