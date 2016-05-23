angular.module('resume').service('ResumeService', function () {


    var socialLinks = [
        {url: 'https://www.facebook.com/radkov.sn', title: "Facebook", img: 'social/facebook_icon.png'},
		{url: 'https://www.linkedin.com/in/radkovsn', title: "LikedIn", img: 'social/linkedin_icon.png'},
		{url: 'https://github.com/sergeyradkov', title: "GitHub", img: 'social/github_icon.png'},
		{url: 'https://www.instagram.com/sergeriic/', title: "Instagram", img: 'instagram_info.png'}
	];

     var tools = [
         {url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',title: 'HTML',img: 'html.png',type: 'tool'},
         {url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',title: 'CSS',img: 'css.png',type: 'tool'},
         {url: 'http://getbootstrap.com/',title: 'Bootstrap',img: 'bootstrap.png',type: 'tool'},
         {url: 'http://jquery.com/',title: 'jQuery',img: 'jquery.png',type: 'tool'},
         {url: 'https://angularjs.org/',title: 'AngularJS',img: 'angular.png',type: 'tool'},
         {url: 'https://www.firebase.com/',title: 'Firebase',img: 'firebase.png',type: 'tool'},
         {url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',title: 'JavaScript',img: 'javascript.png' ,type: 'tool'},
         {url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',title: 'C#',img: 'csharp.png',type: 'tool'},
         {url: 'https://github.com/',title: 'GitHub',img: 'github.png',type: 'tool'},
         {url: 'https://www.microsoft.com/net/default.aspx',title: 'Microsoft.NET',img: 'dotnet.png',type: 'tool'},
         {url: 'https://www.visualstudio.com/',title: 'Visual Studio',img: 'vs.png',type: 'tool'},
         {url: 'https://www.jetbrains.com/idea/',title: 'Intellij IDEA',img: 'idea.png',type: 'tool'},
         {url: "https://www.java.com/",title: "Java",img: 'java.png',type: 'exp'},
         {url: "http://developer.android.com/index.html",title: "Android Studio",img: 'as.png',type: 'exp'},
         {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png',type: 'exp'}
     ];
 
     var skills = [
         {item: "Creative problem solver", stars: 5, type: "skill"},
         {item: "Communication & negotiation", stars: 5, type: "skill"},
         {item: "Staff management", stars: 4, type: "skill"},
         {item: "Project management", stars: 4, type: "skill"},
         {item: "Analitycal skills", stars: 5, type: "skill"},
         {item: "Time management", stars: 5, type: "skill"},
         {item: "Russian", stars: 5, type: "language"},
         {item: "English", stars: 4, type: "language"}
     ];
     
     this.getSocialLinks = function (){
         return socialLinks;
     };

     this.getTools = function(value){
         var list = [];
         for (var i = 0; i < tools.length; i++) {
             if (tools[i].type == value) {
                 list.push(tools[i]);
             }
         }
         return list;
     };
     
     function star(num) {
         var stars = [];
         for (var i = 1; i < 6; i++) {
             var x = "glyphicon glyphicon-star";
             if(i > num){
               x = x + ' lite';  
             }
             stars.push(x);
         }
         return stars;
     };
                       
     this.getSkills = function(value){
         var list = [];
         for (var i = 0; i < skills.length; i++) {
             if (skills[i].type === value) {
                 list.push(skills[i]);
             }
         }
         return list;
     };
     
     var projects = [
         {url: 'http://sergeyradkov.github.io/pop-up-penguins/',title: 'Find the penguins',img:'projects/findup.png'}  
     ];
     
     this.getProjects = function(){
         return projects;
     };
});
