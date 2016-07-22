'use strict';

var MenuPage = function () {
};

MenuPage.prototype = Object.create([], {

  selectMenuCategory: {
    get: function () {
      return browser.element.all(by.cssContainingText('.hidden-xs .placard-header .no-padding','Salads'));
    }
  }
});

module.exports = MenuPage;
