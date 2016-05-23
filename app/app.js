(function(){var app = angular.module('resume', ['ui.router']);})();

angular.module('resume').component('aboutMe', {
        templateUrl: 'pages/about.html',
        controller: function(){}
        
});
angular.module('resume').component('abilities', {
        templateUrl: 'pages/abilities.html',
        controller: function(ResumeService){
           this.tools  = ResumeService.getTools("tool");
           this.exps   = ResumeService.getTools("exp");
           this.skills = ResumeService.getSkills("skill");
           this.languages = ResumeService.getSkills("language");
        } 
});
angular.module('resume').component('experience', {
        templateUrl: 'pages/experience.html',
        controller: function(WorkService){
           this.education = WorkService.getEducation();
           this.works = WorkService.getWorks();
        }
        
});
angular.module('resume').component('portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: function(ResumeService){
          this.projects = ResumeService.getProjects();
        }
        
});
angular.module('resume').component('contacts', {
        templateUrl: 'pages/contacts.html',
        controller: function(ResumeService){
          this.socialLinks = ResumeService.linkMap.socialLinks;
        }
});
