'use strict';
var TastesAndInterests = require('./tastesAndInterestsPage.page.obj.js'),
  tastesAndInterests = new TastesAndInterests(),
  MyTastesAndInterestsFunctions = {

  assertions: {
    getSelectDietaryPreferenceOpt: function (opt) {
       tastesAndInterests.selectDietaryPreferenceOpt(opt, function (index) {
         browser.waitForAngular();
 		tastesAndInterests.updateBtn.click();
 		browser.sleep(15000);
 		tastesAndInterests.isSelected(index).isSelected().then(function (isSelected) {
         console.log('IS SELECTED: ' + isSelected);
       });
         expect(tastesAndInterests.isSelected(index).isSelected()).toBeTruthy();
       });
     }
   },
   functions: {

   }
 };

 module.exports = MyTastesAndInterestsFunctions;
