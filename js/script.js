/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var shows = [
    "Bob's Burgers",
    "Parks and Recreation",
    "This is Us",
    "The Handmaid's Tale"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var networks = [
    
];

var episodes = [
    
];

var image_links = [
    
];

var IMDB_links = [
    
];




function displayShowInfo(){
    shows.forEach(function(name) {
        $("#shows").append("<p>" + name + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    displayShowInfo(shows);
}

function emptyShowInfo(){
    $("#shows").empty();
    // Use jQuery to empty all of the remaining divs


}


function addShowInfo(){
    var showName = $("#show").val();
    shows.push(showName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptyShowInfo();
    addShowInfo();
    displayShowInfo();
});

displayShowInfo();
