
'use strict';

var MyHomePage = function () {
};

MyHomePage.prototype = Object.create([], {

  selectSignIn: {
    get: function () {
      return browser.driver.findElement(by.linkText('Sign In | Register'));
    }
  }
});

module.exports = MyHomePage;
