'use strict';
var OrderType = require('./orderType.page.obj.js'), //require = import
  orderType = new OrderType(), //new instance of homePageObj
  MyOrderTypeFunctions = {

  assertions: {
    getSelectDeliveryOrder: function () {
      orderType.selectDeliveryOrder.click();
      browser.waitForAngular();
      //expect().toBe();
    },
    getAddressField: function () {
      orderType.addressField.sendKeys('2125 S Hurstbourne');
      browser.waitForAngular();
    },
    getCheckAvailability: function () {
      orderType.checkAvailability.click();
      browser.waitForAngular();
    }
  }
};

module.exports = MyOrderTypeFunctions;
