var app = angular.module('resume', ['ui.router']);

app.config(function($stateProvider){
    $stateProvider.state('main', {url:'', template: '<main-page></main-page>'}
                  .state('about',{url:'/pages/about.html',template: '<about></about>'})
    );

});

app.component('mainPage', {
        templateUrl: 'pages/main.html',
        controllerAs: 'vm',
        controller: function(){}
        
        });
