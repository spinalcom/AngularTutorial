angular.module('angularTuto', ["spinal-angular"])

	.config(function (FileSystemProvider) {
	
	  var fs = spinalCore.connect("http://168:JHGgcz45JKilmzknzelf65ddDadggftIO98P@127.0.0.1:8888/");
	  FileSystemProvider.set(fs);
  
	})

  .service('TutoService', ['spinalCore', function (spinalCor) {

    var params = {
      process: null,
      path: "tuto" // path of the file to load in the remote File System
    };
    
    var tutoFactory = {};

    var init = function () {

      if (params.process) {
        return true;
      }

      return spinalCore.init(params)
        .catch(function (err) {
          alert('Error');
        });

    }

    tutoFactory.subscribe = function (attribute, handler) {

      return init().then(function() {
          params.process.subscribe(attribute, handler);
        });

    }
    
    return tutoFactory;

  }])

  .controller('TutoCtrl', ['TutoService', function (TutoService) {

    $ctrl = this;
    
    TutoService.subscribe('myNumber', function (myNumber) {
      $ctrl.myNumber = myNumber;
    });
    
    $ctrl.update = function (newNumber) {
      if ($ctrl.myNumber)
        $ctrl.myNumber.set(newNumber);
    }

  }]);
