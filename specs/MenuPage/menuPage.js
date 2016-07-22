'use strict';
var MenuPage = require('./menuPage.page.obj.js'), //require = import
  menuPage = new MenuPage(), //new instance of homePageObj
  MenuPageFunctions = {

  assertions: {
    getSelectMenuCategory: function () {
      menuPage.selectMenuCategory.click();
      browser.waitForAngular();
      //expect().toBe();
    }
  },
  functions: {

  }
};

module.exports = MenuPageFunctions;
