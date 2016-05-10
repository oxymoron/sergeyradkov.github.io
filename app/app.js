var app = angular.module('resume', ['ui.router']);

app.angular.module('resume').config(function($stateProvider){
    $stateProvider.state('main', {url:'', template: '<main-page></main-page>'}
                  .state('about',{url:'/pages/about.html',template: '<about></about>'})
    );

});

angular.module('resume').component('mainPage', {
        templateUrl: 'pages/main.html',
        controllerAs: 'vm',
        controller: function(){}
        
        });
