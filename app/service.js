angular.module('resume')
    .service('ResumeService', function () {

	var imgRoot = 'asset/img/';

    socialLinks = [{
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
     }
     tools = [{
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			title: 'HTML',
			img: imgRoot + 'html.png'
            },{
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			title: 'CSS',
			img: imgRoot + 'css.png'
            },{
            url: 'http://getbootstrap.com/',
			title: 'Bootstrap',
			img: imgRoot + 'bootstrap.png'
            },{
            url: 'http://jquery.com/',
			title: 'jQuery',
			img: imgRoot + 'jquery.png'                                       
            },{
            url: 'https://angularjs.org/',
			title: 'AngularJS',
			img: imgRoot + 'angular.png' 
            },{
            url: 'https://www.firebase.com/',
			title: 'Firebase',
			img: imgRoot + 'firebase.png'                                       
            },{
            url: 'https://developer.mozilla.org/en/docs/Web/JavaScript',
			title: 'JavaScript',
			img: imgRoot + 'javascript.png'                                       
            },{
            url: 'https://msdn.microsoft.com/en-us/library/kx37x362.aspx',
			title: 'C#',
			img: imgRoot + 'csharp.png'                                       
            },{
            url: 'https://github.com/',
			title: 'GitHub',
			img: imgRoot + 'github.png'                                       
            },{
            url: 'https://www.microsoft.com/net/default.aspx',
			title: 'Microsoft.NET',
			img: imgRoot + 'dotnet.png'                                       
            },{
            url: 'https://www.visualstudio.com/',
			title: 'Visual Studio',
			img: imgRoot + 'vs.png'                                       
            },{
            url: 'https://www.jetbrains.com/idea/',
			title: 'Intellij IDEA',
			img: imgRoot + 'idea.png'                                                                  
            }]
            
     this.getTools = function(){
         return tools; 
     }
     
     exps = [{
            url: "https://www.java.com/",
			title: "Java",
			img: imgRoot + 'java.png'
            },{
            url: "http://developer.android.com/index.html",
			title: "Android Studio",
			img: imgRoot + 'as.png'
            },{
            url: "https://nodejs.org/",
			title: "Node.JS",
			img: imgRoot + 'nodejs.png'
          }]
     this.getExps = function(){
         return exps;
     }
     
     
     skills = [{
       item: "Creative problem solver",
       stars: star(5)
       },{       
       item: "Communication & negotiation",
       stars: star(5)
       },{
        item: "Staff management",
       stars: star(4)
       },{
       item: "Project management",
       stars: star(4)
       },{
       item: "Analitycal skills",
       stars: star(5)
       },{
       item: "Time management",
       stars: star(4)
       }]
     
     
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

                                  
     this.getSkills = function(){
         return skills;
     }
     
     works = [{
            url: 'http://sergeyradkov.github.io/pop-up-penguins/',
			title: 'Find the penguins',
			img: imgRoot + 'work/findup.png'  
     }];
     
     this.getWorks = function(){
         return works;
     }
});
