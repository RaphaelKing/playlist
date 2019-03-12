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
    "Hulu",
    "Netflix",
    "Hulu",
    "Hulu"
];

var episodes = [
    "160",
    "125",
    "45",
    "23"
];

var image_links = [
    "https://ib.hulu.com/user/v3/artwork/fdeb1018-4472-442f-ba94-fb087cdea069?base_image=c3be6bcd-278c-4e33-821c-a9e9b298029f&base_image_bucket_name=hummus&size=400x600&format=jpeg",
    "https://joesbar.com/wp-content/uploads/2017/10/ParksandRec.jpg",
    "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/48/f5/07/48f507e2-8232-00e8-eda7-df19e5d26ab4/source/1200x630bb.jpg",
    "https://fanart.tv/api/download.php?type=download&image=79901&section=1"
];

var IMDB_links = [
    "https://www.imdb.com/title/tt1561755/",
    "https://www.imdb.com/title/tt1266020/",
    "https://www.imdb.com/title/tt5555260/",
    "https://www.imdb.com/title/tt5834204/"
];

var bobsBurger = {
        show: "Bob's Burgers",
        network: "Hulu",
        episode: "160",
        photo: "https://ib.hulu.com/user/v3/artwork/fdeb1018-4472-442f-ba94-fb087cdea069?base_image=c3be6bcd-278c-4e33-821c-a9e9b298029f&base_image_bucket_name=hummus&size=400x600&format=jpeg",
        imdb: "https://www.imdb.com/title/tt1561755/",
};
var parksandRec = {
        show: "Parks and Recreation",
        network: "Netflix",
        episode: "125",
        photo: "https://joesbar.com/wp-content/uploads/2017/10/ParksandRec.jpg",
        imdb: "https://www.imdb.com/title/tt1266020/",
    
};
var thisisUs = {
        show: "This is Us",
        network: "Hulu",
        episode: "45",
        photo: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/48/f5/07/48f507e2-8232-00e8-eda7-df19e5d26ab4/source/1200x630bb.jpg",
        imdb:   "https://www.imdb.com/title/tt5555260/",
};

var handmaidsTale = {
        show: "The Handmaid's Tale",
        network: "Hulu",
        episode: "23",
        photo: "https://fanart.tv/api/download.php?type=download&image=79901&section=1",
        imdb:  "https://www.imdb.com/title/tt5834204/",
};

var emilyshows = [
    bobsBurger,
    parksandRec,
    thisisUs,
    handmaidsTale,
    ];
    
emilyshows.forEach(function(shows) {
    $('#images').append("<img src=" + shows.photo + ">");
    $('#shows').append("<p>" + shows.show + "</p>");
    $('#networks').append("<p>" + shows.network + "</p>");
    $('#episodes').append("<p>" + shows.episode + "</p>");
    $('#links').append("<a href='" + shows.imdb + "'>" + "IMDB Page" + "</a>");
    
});




// function displayShowInfo(){
//     shows.forEach(function(name) {
//         $("#shows").append("<p>" + name + "</p>"); 
//     });
//     // BELOW Use forEach Loop to display the data from each of your array's in the correct div
//     networks.forEach(function(name) {
//         $("#networks").append("<p>" + name + "</p>"); 
//     });
//     episodes.forEach(function(num) {
//         $("#episodes").append("<p>" + num + "</p>"); 
//     });
//     image_links.forEach(function(link) {
//         $("#images").append("<img src='" + link + "'>"); 
//     });
//     IMDB_links.forEach(function(link) {
//         $("#links").append("<a href='" + link + "'>" + "IMDB Page" + "</a>"); 
//     });
// }


function emptyShowInfo(){
    $("#shows").empty();
    // Use jQuery to empty all of the remaining divs
    $("#networks").empty();
    $("#episodes").empty();
    $("#links").empty();
    $("#images").empty();
}


function addShowInfo(){
    var showName = $("#show").val();
    shows.push(showName);
    // BELOW write the code to add new items to each of the other arrays
    var showNetwork = $("#network").val();
    networks.push(showNetwork);
    var showEp = $("#episode").val();
    episodes.push(showEp);
    var showLink = $("#link").val();
    IMDB_links.push(showLink);
    var showPic = $("#image").val();
    image_links.push(showPic);

}

$("#add").click(function() {
    emptyShowInfo();
    addShowInfo();
    displayShowInfo();
    $("input").val("");
});


displayShowInfo();