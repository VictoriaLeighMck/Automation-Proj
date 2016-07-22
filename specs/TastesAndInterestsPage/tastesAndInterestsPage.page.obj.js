'use strict';

var MyTastesAndInterests = function () {
};


var _ = require('lodash');

describe('foo', function() {
  it('should do stuff', function() {
    _.each();
  });
})


MyTastesAndInterests.prototype = Object.create([], {

  selectDietaryPreferenceOpt: {
  //opt = dietary pref you want to select, like Vegetarian or Low Fat (text must be exactly what displays in app)
  //when you call this in logic, it will be customizePage.dietaryPreferenceOpt(opt)
  //when you call logic function in test, it will be customizeFunctions.assertions.functionThatCallsPageObj('Low Fat')
  value: function (opt, callback) {
    //pulls all checkboxes for both dietary prefs and gathering types and throws them in an array (dietOpts)
    //you could narrow this down to just dietary prefs, but it's not necessary, so I chose not to, to have less code
   browser.element.all(by.css('.checkbox')).then(function (dietOpts) {
      //loop through all checkboxes (dietOpts) individually and return
      // single checkbox (dietOpt) and the index of that checkbox (index)
      _.forEach(dietOpts, function (dietOpt, index) {
        //get text of individual checkbox returned above (dietOpt)
        //getText returns a promise<string>, which you use .then to resolve and return the string
        dietOpt.getText().then(function (optText) {
          //check to see if text returned above (optText) equals dietary pref passed to function (opt)
          //if so, get all dietary prefs and then put in array, then get opt by index
          //since this puts items in array in same order as browser.element.all(by.css('.checkbox')), index will match
          if (optText.indexOf(opt) !== -1) {
		  browser.element.all(by.css('.checkbox .check')).get(index).click();
          callback(index);
          }
        });
      });
    });
   }
 },
 isSelected: {
 	value: function (index) {
		return browser.element.all(by.css('.checkbox input')).get(index);
	}
 },
 updateBtn: {
	get: function () {
		return browser.element(by.buttonText('Update'));
	}
 }
});

module.exports = MyTastesAndInterests;
