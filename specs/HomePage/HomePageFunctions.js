'use strict';
var HomePage = require('./homePage.page.obj.js'), //require = import
  homePage = new HomePage(), //new instance of homePageObj
  MyHomePageFunctions = {

  assertions: {
    getSelectSignIn: function () {
      homePage.selectSignIn.click();
      browser.waitForAngular();
      //expect().toBe();
    }
  },
  functions: {

  }
};

module.exports = MyHomePageFunctions;
