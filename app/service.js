angular.module('resume').service('ResumeService', function () {

    var socialLinks = [
        {url: 'https://www.facebook.com/radkov.sn',title: "Facebook",img: 'social/facebook_icon.png'},
        {url: 'https://www.linkedin.com/in/radkovsn',title: "LikedIn",img: 'social/linkedin_icon.png'},
        {url: 'https://github.com/sergeyradkov',title: "GitHub",img: 'social/github_icon.png'},
        {url: 'https://www.instagram.com/sergeriic/',title: "Instagram",img: 'social/instagram_info.png'}
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
        {url: "https://nodejs.org/",title: "Node.JS",img: 'nodejs.png',type: 'exp'
    }];

    var skills = [
        {item: "Creative problem solver", stars: 5, type: "main"},
        {item: "Communication & negotiation", stars: 5, type: "skill"},
        {item: "Staff management", stars: 4, type: "skill"},
        {item: "Project management", stars: 4, type: "skill"},
        {item: "Analitycal skills", stars: 5, type: "skill"},
        {item: "Time management", stars: 5, type: "skill"},
        {item: "Russian", stars: 5, type: "language"},
        {item: "English", stars: 4, type: "language"}
    ];

    var works = [
        {url: 'http://sergeyradkov.github.io/pop-up-penguins/', title: 'Find the penguins', img: 'work/findup.png'}
    ];

    function arrayToMap(arr, field){
        var map = {};
        for (var i = 0; i < arr.length; i++){
            var type = arr[i][field];
            if (!map[type]) map[type] = [];
            map[type].push(arr[i]);
        }
        return map;
    }

    var toolMap = arrayToMap(tools, 'type');
    var skillMap = arrayToMap(skills, 'type');


    this.getSocialLinks = function () {
        return socialLinks;
    };

    this.getTools = function (type) {
        return toolMap[type];
    };

    this.getSkills = function (type) {
        return skillMap[type];
    };

    this.getWorks = function () {
        return works;
    }
});
