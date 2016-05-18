angular.module('resume')
    .service('ResumeService', function () {

	var imgRoot = 'asset/img/';

    socialLinks = [{
            url: "https://www.facebook.com/radkov.sn",
			title: "Facebook",
			img: imgRoot + 'facebook_icon.png'
		    }, {
            url: "https://www.linkedin.com/in/radkovsn",
			title: "LikedIn",
			img: imgRoot + 'linkedin_icon.png'
			}, {
            url: "https://github.com/sergeyradkov",
			title: "GitHub",
			img: imgRoot + 'github_icon.png'
			}, {
            url: "https://www.instagram.com/sergeriic/",
			title: "Instagram",
			img: imgRoot + 'instagram_info.png'
	 }];
     
     this.getSocialLinks = function (){
         return socialLinks;
     }
});
