'use strict';

var MenuCategory = function () {
};

MenuCategory.prototype = Object.create([], {

  selectItem: {
    get: function () {
      return browser.driver.findElement(by.css('.hidden-xs button#plc781338.pull-right.btn.btn-sm.btn-primary.col-xs-12'));
    }
  },
  selectCheckoutBtn: {
    get: function () {
      return browser.driver.findElement(by.css('button#orderCheckoutBtn.btn.btn-primary'));
    }
  }
});

module.exports = MenuCategory;
