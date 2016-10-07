angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){

	var tripId = $stateParams.id; //$stateparams is an object that contains the params on the matching state (see app.js)

	var trip = mainSrv.getTrip(tripId); // returns matching trip Object, from the service

	$scope.cityName = trip.city;


});