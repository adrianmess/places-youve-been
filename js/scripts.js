

function Places(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


//Business (Back-End) Logic
$(document).ready(function() {
  $("#newPlace").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var visitedPlaces = new Places(inputtedLocation, inputtedLandmarks, inputtedYear, inputtedNotes);

    $("ul#loc").append("<li><span class='locale'>" + visitedPlaces.location + "</span></li>");
    $("input#location").val('');
    $("input#landmarks").val('');
    $("input#timeOfYear").val('');
    $("input#notes").val('');

  $(".locale").last().click(function(){
    $("#showLocation").show();
    $("#showLocation h2").text(visitedPlaces.location)
    $(".location").text(visitedPlaces.location)
    $(".landmarks").text(visitedPlaces.landmarks)
    $(".time-of-year").text(visitedPlaces.timeOfYear)
    $(".notes").text(visitedPlaces.notes)
  })
  })

});
