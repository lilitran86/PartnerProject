function SetDate()
{
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;


document.getElementById('myDate').value = today;
}

//This is the api for eventful -- select id="activities"

console.log($);

$("#myBtn").click(function(){
//	add text to the modal
	$('#events').append('Your Events For the Day Go HERE');

});






// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





//

$("#activities").click(function(){
       $.ajax({
       type: "GET",
		xhrFields: {withCredentials: true},
//       data:{'submit': true},
       url: "http://api.eventful.com/json/events/search?&keywords=music&location=Los+Angeles&date=Future&app_key=qtzhbLdNnWNtZL7z",
       dataType: "json",
       success: function(events){
       alert("Hello!");
     }
  });
});

//
//
////THis is the jquery
//
//$("#new-itinerary").click(function(){
// var itinerary = $('<div>hey</div>');
// $('#agenda').append(itinerary);
//});
//




//
//
//
//
//function SetDate()
//{
//var date = new Date();
//
//var day = date.getDate();
//var month = date.getMonth() + 1;
//var year = date.getFullYear();
//
//if (month < 10) month = "0" + month;
//if (day < 10) day = "0" + day;
//
//var today = year + "-" + month + "-" + day;
//
//
//document.getElementById('myDate').value = today;
//}



// This is where the jquery for the sample begins


//
//$(document).ready(function(){
//
//   $('#term').focus(function(){
//      var full = $("#itinerary").has("img").length ? true : false;
//      if(full == false){
//         $('#itinerary').empty();
//      }
//   });
//
//   var getPoster = function(){
//
//        var film = $('#term').val();
//
//         if(film == ''){
//
//            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
//
//         } else {
//
//            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");
//
//            $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/
//23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {
//               if (json != "Nothing found."){
//                     $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
//                  } else {
//                     $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/
//23afca60ebf72f8d88cdcae2c4f31866/goonies?callback=?", function(json) {
//                        console.log(json);
//                        $('#poster').html('<h2 class="loading">We're afraid nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
//                     });
//                  }
//             });
//
//          }
//
//        return false;
//   }
//
//   $('#search').click(getPoster);
//   $('#term').keyup(function(event){
//       if(event.keyCode == 13){
//           getPoster();
//       }
//   });
//
//});
