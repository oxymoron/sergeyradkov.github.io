(function(){var app = angular.module('resume', ['ui.router'])})();

    
angular.module('resume').config(function($stateProvider){
    
    $stateProvider
        .state('home',{
        url: '',
        template: '<about-me></about-me>'
        })
});

angular.module('resume').component('aboutMe', {
        templateUrl: 'pages/about.html',
        controller: function(){}
        
});
