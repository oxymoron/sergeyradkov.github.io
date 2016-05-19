(function(){var app = angular.module('resume', ['ui.router'])})();

angular.module('resume').component('aboutMe', {
        templateUrl: 'pages/about.html',
        controller: function(){}
        
});
angular.module('resume').component('abilities', {
        templateUrl: 'pages/abilities.html',
        controller: function(ResumeService){
           this.tools = ResumeService.getTools();
           this.skills = ResumeService.getSkills();
        } 
});
angular.module('resume').component('experience', {
        templateUrl: 'pages/experience.html',
        controller: function(){}
        
});
angular.module('resume').component('portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: function(ResumeService){
          this.works = ResumeService.getWorks();
        }
        
});
angular.module('resume').component('contacts', {
        templateUrl: 'pages/contacts.html',
        controller: function(ResumeService){
          this.socialLinks = ResumeService.getSocialLinks();
        }
});
