var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){

	$scope.income = [];
	$scope.expense = [];
	$scope.flagWords = ["rent", "home", "mortgage"];
	var incomeTotal = 0;
	var expenseTotal = 0;
	var total = 0;

	$scope.addIncome = function(){
		$scope.income.push({"incomeDescription" : $scope.incomeDescription, "incomeAmount" : $scope.incomeAmount});
		incomeTotal += $scope.incomeAmount;
		$scope.totalIncome = incomeTotal
		console.log(incomeTotal);

		total += incomeTotal;
		$scope.total = total;

		$scope.incomeDescription = "";
		$scope.incomeAmount = "";

	}

	$scope.addExpense = function(){

		if ($scope.flagWords.indexOf($scope.expenseDescription.toLowerCase()) >= 0 && $scope.expenseAmount > (25 / 100) * incomeTotal) {
			alert("Your rent should not exceed 25% of your monthly take home pay.");
		} else {
			if ($scope.expenseAmount > 0) {
				$scope.expense.push({"expenseDescription" : $scope.expenseDescription, "expenseAmount" : $scope.expenseAmount});
				expenseTotal += $scope.expenseAmount;
				$scope.totalExpense = expenseTotal;
				console.log($scope.expenseAmount);

				total -= expenseTotal;
				$scope.total = total;
			}
		}


		$scope.expenseDescription = "";
		$scope.expenseAmount = "";

	}

});