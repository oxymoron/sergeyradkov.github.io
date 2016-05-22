angular.module('resume')
    .service('ResumeService', function () {

	var imgRoot = 'asset/img/';

    var socialLinks = [{
            url: 'https://www.facebook.com/radkov.sn',
			title: "Facebook",
			img: imgRoot + 'social/facebook_icon.png'
		    }, {
            url: 'https://www.linkedin.com/in/radkovsn',
			title: "LikedIn",
			img: imgRoot + 'social/linkedin_icon.png'
			}, {
            url: 'https://github.com/sergeyradkov',
			title: "GitHub",
			img: imgRoot + 'social/github_icon.png'
			}, {
            url: 'https://www.instagram.com/sergeriic/',
			title: "Instagram",
			img: imgRoot + 'social/instagram_info.png'
	 }];
     
     this.getSocialLinks = function (){
         return socialLinks;
     };
     
     var tools = [{
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			title: 'HTML',
			img: imgRoot + 'html.png',
            type: 'tool'
            },{
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			title: 'CSS',
			img: imgRoot + 'css.png',
            type: 'tool'
            },{
            url: 'http://getbootstrap.com/',
			title: 'Bootstrap',
			img: imgRoot + 'bootstrap.png',
            type: 'tool'
            },{
            url: 'http://jquery.com/',
			title: 'jQuery',
			img: imgRoot + 'jquery.png',
            type: 'tool'                                  
            },{
            url: 'https://angularjs.org/',
			title: 'AngularJS',
			img: imgRoot + 'angular.png',
            type: 'tool'
            },{
            url: 'https://www.firebase.com/',
			title: 'Firebase',
			img: imgRoot + 'firebase.png',
            type: 'tool'                                      
            },{
            url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',
			title: 'JavaScript',
			img: imgRoot + 'javascript.png' ,
            type: 'tool'                                     
            },{
            url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',
			title: 'C#',
			img: imgRoot + 'csharp.png',
            type: 'tool'                                  
            },{
            url: 'https://github.com/',
			title: 'GitHub',
			img: imgRoot + 'github.png',
            type: 'tool'                                     
            },{
            url: 'https://www.microsoft.com/net/default.aspx',
			title: 'Microsoft.NET',
			img: imgRoot + 'dotnet.png',
            type: 'tool'                                       
            },{
            url: 'https://www.visualstudio.com/',
			title: 'Visual Studio',
			img: imgRoot + 'vs.png',
            type: 'tool'                                      
            },{
            url: 'https://www.jetbrains.com/idea/',
			title: 'Intellij IDEA',
			img: imgRoot + 'idea.png',
            type: 'tool'                                                                 
            },{
            url: "https://www.java.com/",
			title: "Java",
			img: imgRoot + 'java.png',
            type: 'exp'
            },{
            url: "http://developer.android.com/index.html",
			title: "Android Studio",
			img: imgRoot + 'as.png',
            type: 'exp'
            },{
            url: "https://nodejs.org/",
			title: "Node.JS",
			img: imgRoot + 'nodejs.png',
            type: 'exp'
          }];
     
   
     this.getTools = function(value){
         var list = [];
         for (var i = 0; i < tools.length; i++) {
             if (tools[i].type == value) {
                 list.push(tools[i]);
             }
         }
         return list;
     };
     
     
     var skills = [{
       item: "Creative problem solver",
       stars: star(5),
       type: "main"
       },{       
       item: "Communication & negotiation",
       stars: star(5),
       type: "skill"
       },{
        item: "Staff management",
       stars: star(4),
       type: "skill"
       },{
       item: "Project management",
       stars: star(4),
       type: "skill"
       },{
       item: "Analitycal skills",
       stars: star(5),
       type: "skill"
       },{
       item: "Time management",
       stars: star(4),
       type: "skill" 
       },{
       item: "Russian",
       stars: star(5),
       type: "language"
       },{
       item: "English",
       stars: star(4),
       type: "language"    
       }];
     
     
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
     }
                       
     this.getSkills = function(value){
         var list = [];
         for (var i = 0; i < skills.length; i++) {
             if (skills[i].type === value) {
                 list.push(skills[i]);
             }
         }
         
         return list;
     };
     
     var projects = [{
            url: 'http://sergeyradkov.github.io/pop-up-penguins/',
			title: 'Find the penguins',
			img: imgRoot + 'projects/findup.png'  
     }];
     
     this.getProjects = function(){
         return projects;
     };
});
