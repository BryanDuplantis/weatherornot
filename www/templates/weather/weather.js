angular.module('won.weather', [])

  .controller('WeatherCtrl', function (weather, $scope, $stateParams, $ionicLoading) {

    $scope.city = $stateParams.city;

    $ionicLoading.show({
      template: 'Loading...'
    });

    weather
      .getWeather($stateParams.lat, $stateParams.long)
      .success(function (data) {
        setTimeout(function () {
        $scope.temp = data.currently.apparentTemperature;
        $ionicLoading.hide();
      }, 2000);
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
