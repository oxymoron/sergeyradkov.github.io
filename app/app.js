(function(){var app = angular.module('resume', ['ui.router'])})();

(function(){
angular.module('resume').config(function($stateProvider){
    $stateProvider.state('main', {url:'/pages/main.html', template: '<main-page></main-page>'}
                  .state('about',{url:'/pages/about.html',template: '<about></about>'})
    );

});})();
angular.module('resume').component('MainPage', {});
