// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db=null;
var app=angular.module('starter', ['ionic','ngCordova']);

app.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
    db=window.openDatabase("sqlite","1.0","sqlitedemo",2000);
    $cordovaSQLite.execute(db,"CREATE TABLE example(id integer primary key,firstname text,lastname text)");

  });
});
app.controller("infoCtrl",function ($scope,$cordovaSQLite) {
  $scope.addInfo=function () {
    var query="INSERT INTO example(firstname,lastname) VALUES(?,?)";
    $cordovaSQLite.execute(db,query,[$scope.firstname,$scope.lastname]);
    $scope.load();
  }

  $scope.load=function () {
    $scope.alldata=[];
    $cordovaSQLite.execute(db,"SELECT * FROM example").then(function (result) {
      if (result.rows.length) {
        for (var i = 0; i < result.rows.length; i++) {
          $scope.alldata.push(result.rows.item(i));
        }
      }else {
        console.log("no data found");
      }
    },function () {
      console.log("error"+err);

    });
  }


})
