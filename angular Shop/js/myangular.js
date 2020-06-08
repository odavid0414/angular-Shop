var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) 
{
    $scope.products = ["Item1", "Item2", "Item3","Item4", "Item5", "Item6"];
    $scope.price = ["5000", "1000", "3000","4000", "10000", "8000"];
    $scope.add = function () 
	{
        $scope.errortext = "";
        if (!$scope.addItem) {return;}
        if ($scope.products.indexOf($scope.addItem) == -1) 
		{
            $scope.products.push($scope.addItem);
            $scope.price.push($scope.addPrice);
        } else {
            $scope.errortext = "This Item is already in your List.";
        }
    }
    $scope.removeItem = function (x) 
	{
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});