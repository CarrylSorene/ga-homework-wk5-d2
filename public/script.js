$(document).ready(function(){
  console.log('hello');

})

// $('#').on('click', function(event) {
//   createVideo();
// })

function showVideos(){
  request('GET', '/videos', null).done(function(response) {
    console.log(response);
    // $.each(response, function(index, value){
    //   appendNewVideo(value);
    })
  };

// function request(method, url, data){
//   return $.ajax({ 
//     method: method,
//     url: url,
//     dataType: 'json', 
//     data: data
//   })
// }

// function appendNewVideo(data) {

// }
// pseudo:

// get videos
// click add
// title, url, genre, desc
// click submit
// click edit
// same fields
// click delete

// eventlisteners - click buttons - add goes to form
// submit posts and redirects to show, edit goes to form, submit puts and redirects to ?, delete deletes.

// append title, iframe with url, genre and desc

// append form 

// Create event listeners to trigger the Ajax requests. (there is no need for forms to have a 'method: get/post' anymore.)
// * When adding a video, add it first to the database, then append it to the page 
// * When editing a video, update it first in the database, then update the page with the new values (no refresh!)
// * When deleting a video, delete it first from the database, then remove it from the page
