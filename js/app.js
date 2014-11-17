	// the app module
	var mainApp = angular.module('mainApp', ['ngRoute','ngResource']);

	// configured routes
	mainApp.config(function($routeProvider) {
		$routeProvider

		// dashboard page
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		// leads page
		.when('/leads', {
			templateUrl: 'pages/leads.html',
			controller: 'leadsController'
		})

		// prospects page
		.when('/prospects', {
			templateUrl: 'pages/prospects.html',
			controller: 'prospectsController'
		})

		// closing page
		.when('/closing', {
			templateUrl: 'pages/closing.html',
			controller: 'closingController'
		})

		// summary page
		.when('/summary', {
			templateUrl: 'pages/summary.html',
			controller: 'summaryController'
		})

		// contacts page
		.when('/contacts', {
			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		})

		// add contacts page
		.when('/contacts/add', {
			templateUrl: 'pages/add.html',
			controller: 'addController'
		})

		// contact cards
		.when('/contacts/:name', {
			templateUrl: 'pages/card.html',
			controller: 'cardController'
		})

		// contacts edit
		.when('/contacts/:name/edit', {
			templateUrl: 'pages/editor.html',
			controller: 'editorController'
		})

		// admin page
		.when('/admin', {
			templateUrl: 'pages/admin.html',
			controller: 'adminController'
		});
	});

	mainApp.controller('mainController', function($scope) {
		$scope.title = 'Welcome to Contastic';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('leadsController', function($scope) {
		$scope.title = 'Leads';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('prospectsController', function($scope) {
		$scope.title = 'Prospects';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('closingController', function($scope) {
		$scope.title = 'Closing';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('summaryController', function($scope) {
		$scope.title = 'Summary';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('contactController', function($scope) {
		$scope.title = 'Contacts';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('addController', function($scope) {
		$scope.title = 'Add Contacts';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('cardController', function($scope) {
		$scope.title = 'Single Contact';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('editorController', function($scope) {
		$scope.title = 'Edit Single Contact';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

	mainApp.controller('adminController', function($scope) {
		$scope.title = 'Admin Panel for Managers and Configs';
		$scope.slogan = 'Staying in Touch Made Easy';
	});

  // mainApp.factory('Job',function($resource){
  //   return $resource('http://localhost:8000/api/jobs/:name',{name:'@name'},{
  //       update: {
  //           method: 'PUT'
  //       }
  //   });
  // });