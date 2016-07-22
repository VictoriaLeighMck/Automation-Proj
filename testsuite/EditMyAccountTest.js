'use strict';

var MyHomePageFunctions = require('../specs/HomePage/HomePageFunctions.js'),
    signInModalFunctions = require('../specs/SignInModal/signInModal.js'),
    MyTastesAndInterestsFunctions = require('../specs/TastesAndInterestsPage/tastesAndInterestsPage.js'),
    MyCommonPageFunctions = require('../specs/Common/Common.js'),
    CommonObj = require('../specs/Common/Common.page.obj.js'),
    commonObj = new CommonObj();

describe('Retail Home Page', function() {
  beforeEach(function(done){
  commonObj.homePage();
  browser.waitForAngular();
    done();
  });
  it('should edit Tastes and interests', function() {

    MyHomePageFunctions.assertions.getSelectSignIn();

    signInModalFunctions.assertions.getUserNameField();

    signInModalFunctions.assertions.getPasswordField();

    signInModalFunctions.assertions.getSignInButton();

    MyCommonPageFunctions.assertions.getSelectMyAccountOverflow();

    MyCommonPageFunctions.assertions.getSelectTastesAndInterests();

    MyTastesAndInterestsFunctions.assertions.getSelectDietaryPreferenceOpt('Gluten Free');

    MyCommonPageFunctions.assertions.getSelectSignOutBtn();
    browser.sleep(6000);


  }, 120000);
});
