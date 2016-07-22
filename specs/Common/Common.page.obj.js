'use strict';

var MyCommonPage = function () {
};

MyCommonPage.prototype = Object.create([], {

  homePage: {
    value: function() {
      browser.get('/');
    }
  },
  selectMyAccountOverflow: {
    get: function () {
      return browser.driver.findElement(by.linkText('My Account'));
    }
  },
  selectTastesAndInterests: {
    get: function () {
      return browser.element.all(by.repeater('page in accountPages'));
    }
  },
  selectSignOutBtn: {
    get: function () {
      return browser.driver.findElement(by.linkText('Sign Out'));
    }
  }
});

module.exports = MyCommonPage;
