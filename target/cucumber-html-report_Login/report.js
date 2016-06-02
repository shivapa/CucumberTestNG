$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mercury/bdd/login/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality Feature",
  "description": "",
  "id": "login-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality-feature;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-functionality-feature;login-functionality;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 12,
      "id": "login-functionality-feature;login-functionality;;2"
    },
    {
      "cells": [
        "mercury",
        "mercury1"
      ],
      "line": 13,
      "id": "login-functionality-feature;login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12578693731,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1116922542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 13
    },
    {
      "val": "mercury",
      "offset": 27
    }
  ],
  "location": "TestLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3828445864,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 13952891,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"mercury\" and \"mercury1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8429861337,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1060866045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 13
    },
    {
      "val": "mercury1",
      "offset": 27
    }
  ],
  "location": "TestLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2997230025,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"SIGN-OFF\"}\nCommand duration or timeout: 68 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027snehap-w7\u0027, ip: \u0027172.27.59.69\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 04154e5d-7e94-4ce4-b395-1cf60d47bf65\n*** Element info: {Using\u003dlink text, value\u003dSIGN-OFF}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.mercury.bdd.login.TestLogin.user_enters_and(TestLogin.java:45)\r\n\tat ✽.And User enters \"mercury\" and \"mercury1\"(com/mercury/bdd/login/Login.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"SIGN-OFF\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027snehap-w7\u0027, ip: \u0027172.27.59.69\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/snehap/AppData/Local/Temp/anonymous1321631467140466397webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10723)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/snehap/AppData/Local/Temp/anonymous1321631467140466397webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10732)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/snehap/AppData/Local/Temp/anonymous1321631467140466397webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12614)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/snehap/AppData/Local/Temp/anonymous1321631467140466397webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12619)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/snehap/AppData/Local/Temp/anonymous1321631467140466397webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12561)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestLogin.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});