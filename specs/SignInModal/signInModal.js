'use strict';
var signInModal = require('./signInModal.page.obj.js'), //require = import
  signIn = new signInModal(), //new instance of Sign In Modal Obj
  signInModalFunctions = {

  assertions: {
    getUserNameField: function () {
      signIn.userNameField.sendKeys('victorialeighmck97');
      //expect().toBe();
  },
  getPasswordField: function () {
    signIn.passwordField.sendKeys('bread33');
  },
  getSignInButton: function () {
    signIn.signInButton.click();
    browser.waitForAngular();
}
 }
};

module.exports = signInModalFunctions;
