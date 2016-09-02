app.factory('homeService', ['$http', function($http){
    return {
        get: function(callback){
          console.log(1);
            // $http.get('/api/comments').success(function(data) {
            //     callback(data);
            // });
        }
    };
}]);
