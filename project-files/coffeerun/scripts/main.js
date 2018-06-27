/*

  IIFE to receive the window object for use inside the function body
  and retreive constructors defined as part of the window.App namespace

  To make code more readable

*/
(function (window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  /*

    Create an instance of Truck by calling the Truck constructor
    Almost the same way it was done in console

  */
  var myTruck = new Truck('le truck', new DataStore());
  /*

    Export Truck to the global namespace so that we can interact with the instance of Truck
    Now myTruck should autocomplete in console, means that it found the variable that
    was exported as a property of the window object

  */
  window.myTruck = myTruck;
})(window);
