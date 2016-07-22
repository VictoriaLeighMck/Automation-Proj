'use strict';
var CommonObj = require('./Common.page.obj.js'), //require = import
  commonObj = new CommonObj(), //new instance of homePageObj
  MyCommonPageFunctions = {

  assertions: {
    getSelectCheckout: function () {
      commonObj.SelectCheckout.click();
    },
    getSelectMyAccountOverflow: function () {
      commonObj.selectMyAccountOverflow.click();
      browser.sleep(2000);
    },
    getSelectTastesAndInterests: function () {
      commonObj.selectTastesAndInterests.get(8).click();
    },

    getSelectSignOutBtn: function () {
         commonObj.selectSignOutBtn.isDisplayed().then(function(isDisplayed) {
           if (isDisplayed) {
           commonObj.selectSignOutBtn.click();
           browser.waitForAngular();
         }
       });
    }
  }
};

module.exports = MyCommonPageFunctions;
