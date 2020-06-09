describe('angularjs homepage todo list', function() {

    it('plus funkcion', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
      
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("2");
      element(by.buttonText("Go!")).click();

      element(by.binding("latest")).getText().then(function(text){
        
        console.log(text)

      })
    });
      
    it('testing repeater_printing first row data', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
        
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();
  
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("10");
        element(by.buttonText("Go!")).click();

        console.log('testing repeater_printing first row data')
        element(by.repeater("result in memory").row(0)).getText().then(function(text){

        console.log(text)
        });

    })
  });

  //klaudia changes