(function() {
  'use strict';

  angular
    .module('spa-demo.cities')
    .controller('spa-demo.cities.CitiesController', CitiesController);

  CitiesController.$inject = ['spa-demo.cities.City'];

  /* @ngInject */
  function CitiesController(City) {
    var vm = this;
    vm.cities;
    vm.city;

    activate();
    return;
    ////////////////

    function activate() {
      newCity();
      vm.cities = City.query(); // we need this to obtain instances from Api
    }

    function newCity() {
      vm.city = new City();
    }
    function handleError(response) {
      console.log(response);
    }
    function edit(object, index) {
    }
    function create() {
    }
    function update() {
    }
    function remove() {
    }
    function removeElement(elements, element) {
    }
  }
})();