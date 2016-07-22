'use strict';

var MyHomePageFunctions = require('../specs/HomePage/HomePageFunctions.js'),
    MyOrderTypeFunctions = require('../specs/OrderTypePage/orderType.js'),
    EnterAddressFunctions = require('../specs/EnterAddressPage/enterAddress.js'),
    signInModalFunctions = require('../specs/SignInModal/signInModal.js'),
    BeverageUpsellFunctions = require('../specs/BeverageUpsellModal/beverageUpsell.js'),
    RewardsModalFunctions = require('../specs/RewardsModal/rewardsModal.js'),
    MyCommonPageFunctions = require('../specs/Common/Common.js'),
    MenuPageFunctions = require('../specs/MenuPage/menuPage.js'),
    MenuCategoryFunctions = require('../specs/MenuCategoryPage/menuCategory.js'),
    OrderTimeFunctions = require('../specs/SelectOrderTime/selectOrderTime.js'),
    CheckoutPageFunctions = require('../specs/CheckoutPage/checkoutPage.js'),
    CommonObj = require('../specs/Common/Common.page.obj.js'),
    commonObj = new CommonObj();

describe('Retail Home Page', function() {
  beforeEach(function(done){
  commonObj.homePage();
  browser.waitForAngular();
    done();
  });
  it('should pull up the Retail Panera Web Site', function() {

    MyHomePageFunctions.assertions.getSelectSignIn();

    signInModalFunctions.assertions.getUserNameField();

    signInModalFunctions.assertions.getPasswordField();

    signInModalFunctions.assertions.getSignInButton();

    MyOrderTypeFunctions.assertions.getSelectDeliveryOrder();

    MyOrderTypeFunctions.assertions.getAddressField();

    MyOrderTypeFunctions.assertions.getCheckAvailability();

    EnterAddressFunctions.assertions.getSelectAddressTypeHome();

    EnterAddressFunctions.assertions.getSelectContinue();

    OrderTimeFunctions.assertions.getSelectNowTime();

    MenuPageFunctions.assertions.getSelectMenuCategory();

    MenuCategoryFunctions.assertions.getSelectItem();

    MenuCategoryFunctions.assertions.getSelectCheckoutBtn();

    BeverageUpsellFunctions.assertions.getSelectExit();

    RewardsModalFunctions.assertions.getExitModal();

    CheckoutPageFunctions.assertions.getPlaceOrderBtn();

    MyCommonPageFunctions.assertions.getSelectSignOutBtn();



    browser.sleep(5000);

  }, 120000);
});
