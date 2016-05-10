(function(){var app = angular.module('resume', ['ui.router'])})();

(function(){
angular.module('resume').config(function($stateProvider){
    $stateProvider.state('home', {url:'', template: '<resume-service></resume-service>'});
});})();