angular.module('won.settings', [])

  .controller('SettingsCtrl', function (settings, $scope, $ionicLoading) {
    $scope.scale = settings.scale;// settings.scale;
    $scope.precision = settings.precision; // settings.precision;

    $scope.randomScale = function () {
      $ionicLoading.show({
        duration: 5000
      });
    };

    $scope.$watch('scale', function() {
        settings.setscale($scope.scale);

    });

    $scope.$watch('precision', function() {
      settings.setprec($scope.precision);
      console.log($scope.precision);
    });

  })

  .factory('settings', function () {
    return {
      scale: 'F',
      precision: 1,
      setscale: function(s) {
        localStorage.scale = s;
      },
      setprec: function(p) {
        localStorage.precision = p;
      }

    };
  });
