
'use strict';

var RewardsModal = function () {
};

RewardsModal.prototype = Object.create([], {

  exitModal: {
    get: function () {
      return browser.driver.findElement(by.css('i.btn-modal-close'));
    }
  }
});

module.exports = RewardsModal;
