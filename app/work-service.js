angular.module('resume').service('WorkService', function(){
        
    var education = [{
        fullURL: 'https://boisecodeworks.com/',
        shortURL: 'boisecodeworks.com',
	    place: "BoiseCodeWorks",
		img: imgRoot + 'bcw.png',
        course: 'Web Development Immersive Course',
        subCourse: '',
        period: 'April - June 2016',
        address: 'Boise, ID, USA',
        description: "The Immersive Course is a full-time experience designed for students looking to start a career in programming. As an Immersive student I learned both front-end and back-end technologies, worked in groups under the supervision of experienced mentors to create fully functional real-world applications."
    },{
        fullURL: 'https://guu.ru/?page_id=19813&lang=en',
        shortURL: 'guu.ru',
	    place: "State University of Management",
		img: imgRoot + 'sum.png',
        course: 'Master’s Degree',
        subCourse: 'Transport Management (combined bachelor/master program)',
        period: 'September 1997 - June 2002',
        address: 'Moscow, Russia',
        description: "Five year program specialized in management, technology, communications and accounting for motor transport companies and business transport departments."
    }];
    
     this.getEducation = function(){
         return education;
     };
     
     var works = [];
     
     this.getWorks = function(){
         return works;
     }
    
});