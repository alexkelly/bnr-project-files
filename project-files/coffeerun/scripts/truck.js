// IIFE and constructor for the Truck type
(function (window) {
  'use strict';
  var App = window.App || {};

  /*

    Add parameters (truckId, db) to constructor
    Each instance will have a uid and its own DataStore instance

    In console: var myTruck = new App.Truck('', new App.DataStore());

  */
  function Truck(truckId, db) {
    // Assign each parameter as properties to the newly constructed instance
    this.truckId = truckId;
    this.db = db;
  }

  /*

    Adding orders:
    createOrder method
    Calls DataStore's add method from datastore.js
    Did not need to specify App.DataStore namespace, instance of Truck
    are designed to work with anything that has the same method names as DataStore

    In console: myTruck.createOrder({ emailAddress: '', coffee: ''});

  */
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  /*

    Removing orders:
    Assign a function expression to Truck.prototype.deliverOrder
    Accepts a customerId argument, passes to this.db.remove

    In console: myTruck.deliverOrder('');

  */
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  }

  /*

    Printing orders:
    printOrders method gets an array of all of the custmer email addresses,
    iterates through the array, and prints the order info

    In console: myTruck.printOrders();

  */
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
      // bind method accepts an object argument and returns a new version of the function
      // when new version is called it will use the argument passed into bind as the value of this
    }.bind(this));
  };


  App.Truck = Truck;
  window.App = App;

}) (window);
