$(document).ready(function(){
  console.log('hello');
  getVideos();
});
//event listeners
// $('#add-video').on('click', function(event) {
//   loadAddForm();
// });
$('#submit-video').on('click', function(event) {
  createVideo();
});
// $('#edit-video').on('click', function(event) {
//   loadEditForm();
// });
// $('#update-video').on('click', function(event) {
//   editVideo();
// });

function getVideos(){
  request('GET', '/videos', null).done(function(response) {
    console.log(response);
    $.each(response, function(index, title){
      appendVideo(title.title, title.url, title.description) 
    });
  });
};

// function loadAddForm(){}
function appendVideo(title, url, genre, description){
 $("<li>" + title + '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ url +'" frameborder="0" allowfullscreen></iframe>' + genre + description + "</li>").appendTo("#video-list")
}

function createVideo() {
  data = {
    title: $('#new-title').val(),
    url: $('#new-url').val(),
    genre: $('#new-genre').val(),
    description: $('#new-description').val()
  }
  $.post('/videos/new', data, function(response) {
    console.log(response);
    appendNewVideo(response)
  })
}

function appendNewVideo(title, url, genre, description){
 $("<li>" + title + '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ url +'" frameborder="0" allowfullscreen></iframe>' + genre + description + "</li>").appendTo("#video-list")
}

// function loadEditForm(); {}

// function editVideo() {
// dataEdit = {
//     title: $('#edit-title').val(),
//     url: $('#edit-url').val(),
//     genre: $('#edit-genre').val(),
//     description: $('#edit-description').val()
//   }
//   $.post('/videos/:id/edit', data, function(response) {
//     appendNewVideo(response)
//   })
// }

function request(method, url, data){
  return $.ajax({ 
    method: method,
    url: url,
    dataType: 'json', 
    data: data
  })
};

// function appendNewVideo(data) {

// }

// * When adding, editing, deleting a video, first to the database, then append to/update on/remove from the page 