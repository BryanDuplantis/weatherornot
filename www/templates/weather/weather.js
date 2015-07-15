angular.module('won.weather', [])

  .controller('WeatherCtrl', function ($scope, $stateParams, $http, $ionicLoading) {

    $scope.city = $stateParams.city;

    $ionicLoading.show({
      template: 'Loading...'
    });

    $http
      .get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.long)
      .success(function (data) {
        console.log(data);
        $scope.temp = data.currently.apparentTemperature;
        $ionicLoading.hide();
      });

  });
