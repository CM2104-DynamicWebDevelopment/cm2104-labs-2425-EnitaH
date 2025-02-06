$(function() {
    $('#searchform').submit(function() {
        var searchterms = $("#searchterms").val();
        getResultsFromOMDB(searchterms);
        return false; // Prevent form reload
    });
});

function getResultsFromOMDB(searchterms) {
    // Build URL to fetch movie data
    var url = `https://www.omdbapi.com/?s=${searchterms}&type=movie&apikey=43c43a83`;
    
    // Use jQuery's getJSON method to fetch the results
    $.getJSON(url, function(jsondata) {
        addResultTitles(jsondata);
    });
}

function addResultTitles(jsondata) {
    // Check if there are valid results
    if (jsondata.Response === "True") {
        var htmlstring = "";

        
        for (var i = 0; i < Math.min(5, jsondata.Search.length); i++) {
            var movie = jsondata.Search[i];
            var title = movie.Title;
            var year = movie.Year;
            var type = movie.Type;
            var poster = movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"; // Use a placeholder if no poster is available
            var imdbID = movie.imdbID;
            var imdbLink = `https://www.imdb.com/title/${imdbID}`;

            
            htmlstring += `
                <li>
                    <img src="${poster}" alt="Poster for ${title}" width="50" height="75">
                    <strong>${title}</strong> (${year}) - ${type}
                    <a href="${imdbLink}" target="_blank">IMDb</a>
                </li>
            `;
        }

        // Inject the HTML string into the results list
        $("#results").html(htmlstring);
    } else {
        // If no results found, display a message
        $("#results").html("<li>No movies found.</li>");
    }
}
