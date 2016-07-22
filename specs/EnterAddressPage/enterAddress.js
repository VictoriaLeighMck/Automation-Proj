'use strict';
var EnterAddress = require('./enterAddress.page.obj.js'), //require = import
  enterAddress = new EnterAddress(), //new instance of homePageObj
  EnterAddressFunctions = {

  assertions: {
    getSelectAddressTypeHome: function () {
      enterAddress.selectAddressTypeHome.click();
      browser.waitForAngular();
      //expect().toBe();
    },
    getSelectContinue: function () {
      enterAddress.selectContinue.click();
      browser.waitForAngular();
    }
  },
  functions: {

  }
};

module.exports = EnterAddressFunctions;
