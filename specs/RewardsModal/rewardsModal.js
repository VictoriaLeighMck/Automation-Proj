'use strict';
var RewardsModal = require('./rewardsModal.page.obj.js'), //require = import
  rewardsModal = new RewardsModal(), //new instance of homePageObj
  RewardsModalFunctions = {

  assertions: {
    getExitModal: function () {
      browser.sleep(2000);
      rewardsModal.exitModal.click();
      browser.waitForAngular();
      //expect().toBe();
    }
  },
  functions: {

  }
};

module.exports = RewardsModalFunctions;
