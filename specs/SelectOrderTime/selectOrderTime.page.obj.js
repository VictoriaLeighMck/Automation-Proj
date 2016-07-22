'use strict';

var ChooseOrderTime = function () {
};

ChooseOrderTime.prototype = Object.create([], {

  selectNowTime: {
    get: function () {
      return browser.driver.findElement(by.css('button.btn.btn-primary.order-btn'));
    }
  },
  selectLaterTime: {
    get: function () {
      return browser.element.all(by.repeater('date in dateList'));
    }
  }
});

module.exports = ChooseOrderTime;
