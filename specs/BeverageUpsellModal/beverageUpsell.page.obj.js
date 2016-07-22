
'use strict';

var BeverageUpsell = function () {
};

BeverageUpsell.prototype = Object.create([], {

  selectExit: {
    get: function () {
      return browser.driver.findElement(by.css('button.btn.btn-secondary'));
    }
  }
});

module.exports = BeverageUpsell;
