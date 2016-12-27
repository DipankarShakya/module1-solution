(
function (){
'use strict';
angular.module('MylunchChecker',[])
.controller('MylunchCheckerController',MylunchCheckerController);

MylunchCheckerController.$inject=['$scope'];

function MylunchCheckerController($scope){
$scope.Mylunch ="";
$scope.MyMessage="";
$scope.Checklunch =function(){
$scope.MyMessage="";
if ($scope.Mylunch=="")
{
$scope.MyMessage ="Please enter the lunch";
}
else{
var countLunch =$scope.Mylunch.split(',');
if (countLunch.length>3 ){
$scope.MyMessage="Too much";
}
}
};

};

}
)();
