describe('angularjs homepage todo list', function() {

    it('plus funkcion', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("2");
      element(by.buttonText("Go!")).click();
      
    });
  });