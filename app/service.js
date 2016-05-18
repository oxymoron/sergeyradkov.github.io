angular.module('resume')
    .service('ResumeService', function () {

	var imgRoot = 'asset/img/';

    socialLinks = [{
            url: 'https://www.facebook.com/radkov.sn',
			title: "Facebook",
			img: imgRoot + 'facebook_icon.png'
		    }, {
            url: 'https://www.linkedin.com/in/radkovsn',
			title: "LikedIn",
			img: imgRoot + 'linkedin_icon.png'
			}, {
            url: 'https://github.com/sergeyradkov',
			title: "GitHub",
			img: imgRoot + 'github_icon.png'
			}, {
            url: 'https://www.instagram.com/sergeriic/',
			title: "Instagram",
			img: imgRoot + 'instagram_info.png'
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
            url: '',
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
         
     }
     this.getSkills = function(){
         
     }
});
