angular.module('won.weather', [])

  .controller('WeatherCtrl', function (settings, weather, $scope, $stateParams, $ionicLoading) {

    $scope.city = $stateParams.city;

    $ionicLoading.show({
      template: 'Loading...'
    });

    weather
      .getWeather($stateParams.lat, $stateParams.long)
      .success(function (data) {
        setTimeout(function () {
        $scope.temp = data.currently.apparentTemperature;
        $scope.newTemp = Math.round($scope.temp);
        $ionicLoading.hide();
      }, 1000);
    });
  })

  .factory('weather', function ($http) {
    return {
      getWeather: function (lat, long) {
        return $http
          .get('/api/forecast/' + lat + ',' + long)
      }
    };
  });
