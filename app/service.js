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
            url: 'https://www.facebook.com/radkov.sn',
			title: "Facebook",
			img: imgRoot + 'facebook_icon.png'
            },{
         
            }]
     this.getTools = function(){
         
     }
     this.getSkills = function(){
         
     }
});

                    <div class="icon-list">
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
                        <img title="HTML" src="asset/img/html.png" alt="html">
                        </a>
                    </div>
                    <div  class="icon-list">
                        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank">
                        <img title="CCS3" src="asset/img/css.png" alt="css">
                        </a>
                    </div>
                    <div class="icon-list">
                        <a target="_blank" href="http://getbootstrap.com/">
                        <img title="Bootstarp" src="asset/img/bootstrap.png" alt="bootstrap" target="_blank">
                        </a>
                     </div>
                     <div class="icon-list">
                        <a target="_blank" href="http://jquery.com/">
                        <img title="jQuery" src="asset/img/jquery.png" alt="jquery" target="_blank">
                        </a>
                     </div>
                     <div class="icon-list">
                        <a target="_blank" href="https://angularjs.org/">
                        <img title="AngularJS" src="asset/img/angular.png" alt="angular" target="_blank">
                        </a>
                     </div>
                     <div class="icon-list">
                        <a target="_blank" href="https://www.firebase.com/">
                        <img title="Firebase" src="asset/img/firebase.png" alt="firebase" target="_blank">
                        </a>
                    </div>

                    <div class="icon-list">
                        <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/JavaScript">
                        <img title="JavaScript" src="asset/img/javascript.png" alt="javascript" target="_blank">
                        </a>
                    </div>               
                    <div class="icon-list">
                        <a target="_blank" href="https://github.com/">
                        <img title="C#" src="asset/img/csharp.png" alt="c#" target="_blank">
                        </a>
                    </div>
                    <div class="icon-list">
                        <a target="_blank" href="https://github.com/">
                        <img title="GitHub" src="asset/img/github.png" alt="github" target="_blank">
                        </a>
                    </div>
                    <div class="icon-list">
                        <a target="_blank" href="https://www.microsoft.com/net/default.aspx">
                        <img title="Microsoft .NET" src="asset/img/dotnet.png" alt=".net" target="_blank">
                        </a>
                    </div>           
                    <div class="icon-list">
                         <a target="_blank" href="https://www.visualstudio.com/">
                         <img title="Visual Studio" src="asset/img/vs.png" alt="visualstudio" target="_blank">
                         </a>
                    </div>

                    <div class="icon-list">
                            <a target="_blank" href="https://www.jetbrains.com/idea/">
                            <img title="Intellij IDEA" src="asset/img/idea.png" alt="idea" target="_blank">
                            </a>
                    </div>