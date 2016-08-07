//variables

var topics = ["cars", "trains", "instruments", "books", "geometry", "prisms", "caves", "space"];
var gifsdisplayed = 10;
var authKey = "&api_key=dc6zaTOxFJmzC&limit=10"
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=";
//functions

for (var i = 0; i < topics.length; i++) {
    var button = $('<button>');
    button.addClass('btn-style');
    button.addClass('button');

    var addtitles = topics[i].split(' ').join('+');
    button.attr('data-type', addtitles).append(topics[i]);

    button.text(topics[i]);

    
    $("#buttons").append(button);
};

$('button').on('click', function() {

    var topic = $(this).data('type');
    // console.log(topic);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
       // console.log(queryURL);

    $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
               // console.log(response);

            $("#gifsAppearHere").empty();

            for(i=0; i <gifsdisplayed; i++) {
              // console.log(response.data[i].images.fixed_height.url);
              // console.log(response.data[i].rating);

              var rating = response.data[i].rating;

              var gifs = $("<div>");

              gifs.addClass("gifs");
              gifs.attr("id", "gifs-" + i);
              $("#gifsAppearHere").append(gifs);

             
              $("#gifs-" + i).append("<img src=" + response.data[i].images.fixed_height.url + ">");

            }
      })
})
