(function(){var app = angular.module('resume', ['ui.router'])})();

    
angular.module('resume').config(function($stateProvider){
    
    $stateProvider
        .state('home',{
        url: '',
        template: '<main-page></main-page>'
        })
});

angular.module('resume').component('mainPage', {
        templateUrl: 'pages/main.html',
        controller: function(){}
        
});
