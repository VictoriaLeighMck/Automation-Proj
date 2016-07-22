'use strict';
var MenuCategory = require('./menuCategory.page.obj.js'), //require = import
  menuCategory = new MenuCategory(), //new instance of homePageObj
  MenuCategoryFunctions = {

  assertions: {
    getSelectItem: function () {
      menuCategory.selectItem.click();
      browser.waitForAngular();
      //expect().toBe();
    },
    getSelectCheckoutBtn: function () {
      menuCategory.selectCheckoutBtn.click();
      browser.waitForAngular();
    }
  },
  functions: {

  }
};

module.exports = MenuCategoryFunctions;
