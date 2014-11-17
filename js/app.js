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
		$scope.barchart = {
		    data: [
				{ y: 'Jan', a: 100, b: 90 },
				{ y: 'Feb', a: 75,  b: 65 },
				{ y: 'Mar', a: 50,  b: 40 },
				{ y: 'Apr', a: 75,  b: 65 },
				{ y: 'May', a: 50,  b: 40 },
				{ y: 'Jun', a: 75,  b: 65 },
				{ y: 'Jul', a: 30, b: 25 },
				{ y: 'Aug', a: 40, b: 35 },
				{ y: 'Sep', a: 20, b: 15 },
				{ y: 'Oct', a: 50, b: 40 },
				{ y: 'Nov', a: 80, b: 55 }
		    ],
		    xkey: 'y',
		    ykeys: ['a', 'b'],
		    gridTextColor: '#fff',
		    labels: ['Hot', 'Warm'],
		    barColors: ['#fff', '#cfcfcf']
		};

		$scope.linechart = {
		    data: [
		      { y: '2008', a: 30, b: 10 },
		      { y: '2009', a: 45,  b: 15 },
		      { y: '2010', a: 50,  b: 5 },
		      { y: '2011', a: 60,  b: 35 },
		      { y: '2012', a: 40,  b: 20 },
		      { y: '2013', a: 60,  b: 30 },
		      { y: '2014', a: 20, b: 10 }
		    ],
		    xkey: 'y',
		    ykeys: ['a', 'b'],
		    gridTextColor: '#fff',
		    labels: ['Series A', 'Series B'],
		    lineColors: ['#fff', '#ccc']
		};

		$scope.donutchart = {
			data: [
				{label: "Upset", value: 12},
				{label: "Happy", value: 30},
				{label: "Content", value: 20}
			],
			labelColor: '#fff',
  			colors: ['#fff','#efefef','#cfcfcf']
		};

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

	mainApp.directive('barchart', function(){
	  
	  function createChart(el_id, options) {
	    options.element = el_id;
	    var r = new Morris.Bar(options);
	    return r;
	  }

	  return {
	    restrict: 'E',
	    scope: {
	      options: '='
	    },
	    replace: true,
	    template: '<div></div>',
	    link: function link(scope, element, attrs) {
	      return createChart(attrs.id, scope.options);
	    }
	  };
	});

	mainApp.directive('linechart', function() {

	    function createChart(el_id, options) {
	      options.element = el_id;
	      var r = new Morris.Line(options);
	      return r;
	    }

	    return {
	      restrict: 'E',
	      scope:  {
	        options: '='
	      },
	      replace: true,
	      template: '<div></div>',
	      link: function(scope, element, attrs) {
	        return createChart(attrs.id, scope.options)
	      }
	    }
	});

	mainApp.directive('donutchart', function() {

	    function createChart(el_id, options) {
	      options.element = el_id;
	      var r = new Morris.Donut(options);
	      return r;
	    }

	    return {
	      restrict: 'E',
	      scope:  {
	        options: '='
	      },
	      replace: true,
	      template: '<div></div>',
	      link: function(scope, element, attrs) {
	        return createChart(attrs.id, scope.options)
	      }
	    }
	});

  // mainApp.factory('Job',function($resource){
  //   return $resource('http://localhost:8000/api/jobs/:name',{name:'@name'},{
  //       update: {
  //           method: 'PUT'
  //       }
  //   });
  // });