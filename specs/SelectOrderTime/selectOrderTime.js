'use strict';
var OrderTime = require('./selectOrderTime.page.obj.js'), //require = import
  orderTime = new OrderTime(), //new instance of homePageObj
  OrderTimeFunctions = {

  assertions: {
    getSelectNowTime: function () {
      orderTime.selectNowTime.click();
      browser.waitForAngular();
      //expect().toBe();
    },
    getSelectLaterTime: function () {
      orderTime.selectLaterTime.get(2).click();
      browser.waitForAngular();
    }
  },
  functions: {

  }
};

module.exports = OrderTimeFunctions;
