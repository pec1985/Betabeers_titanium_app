
var TabGroup = require('common/tabgroup').sharedInstance();

/*
var EventsController = require('screens/events');
var JobOffersController = require('screens/joboffers');
var CoursesController = require('screens/courses');

TabGroup.addTab({
    title: 'Events',
    controller: new EventsController()
});

TabGroup.addTab({
    title: 'Job Offers',
    controller: new JobOffersController() 
});

TabGroup.addTab({
    title: 'Courses',
    controller: new CoursesController() 
});
*/

var LandingPageController = require('screens/landingpage');

TabGroup.addTab({
    title: 'Courses',
    controller: new LandingPageController('courses') 
});
TabGroup.addTab({
    title: 'Events',
    controller: new LandingPageController('events') 
});
TabGroup.addTab({
    title: 'Job Offers',
    controller: new LandingPageController('job offers') 
});

TabGroup.open();
