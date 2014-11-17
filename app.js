var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http, factoryGetJSONFile) {
    $scope.name = 'World';

    factoryGetJSONFile.getMyData(function(data) {
        $scope.Points = data.Points.PointsByYear;
    });

    $scope.ChartConfig = {
        barColours: ['#7CBA47', '#9CDB95', '#F6A535', '#956E8E', '#95C6D8', '#95C6D8', '#FAD29A']
    };

});


app.factory('factoryGetJSONFile', function($http) {
    return {
        getMyData: function(done) {
            $http.get('myJSONFile.json')
                .success(function(data) {
                    done(data);
                })
                .error(function(error) {
                    //alert('An error occured whilst trying to retrieve your data');
                });
        }
    }
});
