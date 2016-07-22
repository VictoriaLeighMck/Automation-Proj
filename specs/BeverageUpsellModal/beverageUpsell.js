'use strict';
var BeverageUpsell = require('./beverageUpsell.page.obj.js'), //require = import
  beverageUpsell = new BeverageUpsell(), //new instance of homePageObj
  BeverageUpsellFunctions = {

  assertions: {
    getSelectExit: function () {
      beverageUpsell.selectExit.click();
      browser.waitForAngular();
      //expect().toBe();
    }
  },
  functions: {

  }
};

module.exports = BeverageUpsellFunctions;
