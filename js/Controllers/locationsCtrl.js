angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
	
	$scope.getData = function() {
		$scope.data = mainSrv.travelInfo
	}
	$scope.getData()

});