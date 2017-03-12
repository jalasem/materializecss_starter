$(document).ready(function () {
    // this code initialize the sideNav javascript functionality as explained at http://materializecss.com/side-nav.html
    $('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
})