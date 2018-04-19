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
    vm.edit = edit;
    vm.create = create;
    vm.update = update;
    vm.remove = remove;

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
    function edit(object) {
      console.log("selectef", object)
      vm.city = object;
    }

    function create() {
      // console.log("creating city, vm.city")
      vm.city.$save()
        .then(function (response) {
          // console.log(response);
          vm.cities.push(vm.city);
          newCity();
        })
        .catch(handleError);
    }

    function update() {
      // console.log("update", vm.city)
      vm.city.$update()
        .then(function (response) {
          // console.log(response);
        })
        .catch(handleError);
    }

    function remove() {
      // console.log("remove", vm.city)
      vm.city.$delete()
        .then(function (response) {
          console.log(response);
          // remove the element from local array
          // removeElement(vm.cities, vm.city);
          vm.cities = City.query(); // if i choose the above i have to comment out this line
          // replace edit area with prototype instance
          newCity();
        })
        .catch(handleError);
    }

    // this function is better if we want to delete
    // something locally, just as a shopping cart
    function removeElement(elements, element) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == element.id) {
          elements.splice(i,1);
          break;
        }
      }
    }

  }
})();