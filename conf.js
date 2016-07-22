var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:    'protractor-demo-tests-report.html'
});
exports.config = {
 framework: 'jasmine',
 baseUrl: 'https://delivery-qarc.panerabread.com/#!/',
 seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: ['./testsuite/EditMyAccountTest.js',
    './testsuite/SignedInRPUTest.js'],

 onPrepare: function() {
    browser.driver.manage().window().maximize();
  },
  onPrepare: function() {
var reporter = require('protractor-html-screenshot-reporter');
        jasmine.getEnv().addReporter(new reporter({
        baseDirectory: './e2e/TestResults/Screenshots',
            filePrefix: 'report',
            consolidateAll: true,
            showStacktrace: true
    }));
  }
}
