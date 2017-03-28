function SetDate(){
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
$("#myBtn").click(function(){
//	add text to the modal
	$('#events').append(function show_alert2(){
     var oArgs = {
        app_key: "qtzhbLdNnWNtZL7z",
        keywords: "music",
        location: "Los Angeles",
        date: "Future",
        page_size: 5,
        sort_order: "popularity",
     };
     EVDB.API.call("/events/search", oArgs, function(oData) {
       console.log("Hello");
      });
  });
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

// function show_alert2(){
//    var oArgs = {
//       app_key: "qtzhbLdNnWNtZL7z",
//       keywords: "music",
//       location: "Los Angeles",
//       date: "Future",
//       page_size: 5,
//       sort_order: "popularity",
//    };
//    EVDB.API.call("/events/search", oArgs, function(oData) {
//      console.log("Hello");
//     });
// }
