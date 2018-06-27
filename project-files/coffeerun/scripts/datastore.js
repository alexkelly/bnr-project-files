/*

Basic IIFE (immediately-invoked function expression) Structure

(function (window) {
  'use strict';
  // code
})(window);

*/

(function (window) {
  'use strict';
  // Declare the local variable App
  // || is a default operator aka the logical or operator, used to provide a valid value
  // Creates {} if window.App has not yet been created
  var App = window.App || {};

  function DataStore() {
    /*

      Constructor: object factory function, used to create and customize a new object
      Inside the body of the constructor, you can refer to that new object with the keyword this
      You used the dot operator to create a property named data on your new object and assigned an empty object to data

      In console: var ds = new App.DataStore();

    */
    this.data = {};
  }

  /*

    Functions are also objects, so they can have properties

    Create add function as a property of the prototype
    This gives DataStore.prototype the property 'add' and assigns a f(x) to it
    The f(x) takes two arguments: key (the unique identifier) and val (some info)
    Those arguments are used to make changes to the instance's data property

  */
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  }

  /*

    get method: accepts a key, looks up the value for it in the instance's data property,
    and returns it

    In console: ds.get('');

  */
  DataStore.prototype.get = function (key) {
    return this.data[key];
  }

  /*

    getAll method: nearly the same as the get method, but instead of looking up the value
    for a single key, it returns a reference to the data property

    In console: ds.getAll();

  */
  DataStore.prototype.getAll = function () {
    return this.data;
  }

  /*

    Method for removing information
    delete operator removes a key/value pair from an object

    In console: ds.remove('');

  */
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  }

  // Attach DataStore to the App object and reassign the global App property to the modified App
  App.DataStore = DataStore;
  window.App = App;
  
})(window);
