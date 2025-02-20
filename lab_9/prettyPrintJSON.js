$(function() {
    alert("document ready");
    
    $('#searchform').submit(function() {
        var searchterms = $("#searchterms").val();
        getResultFromOMDB(searchterms);
        return false; // Prevents the form from reloading the page
    });

});
    
    function getResultFromOMDB(searchterms){

        var url ="https://www.omdbapi.com/?i=tt3896198&apikey=43c43a83&?s=" + searchterms;

        $.getJSON(url, function(jsondata)
             {
                printJSON(jsondata);
             

    });

    }

    function printJSON(jsondata) {
        //prints the JSON to the screen
        var normal = JSON. stringify(jsondata);
        $('#resultsbox').append("<p>"+ normal +"</p>");


    }
    function prettyPrintJSON(jsondata) {
        //prints the prettyJSON to the screen
        var pretty = JSON. stringify(jsondata, null, 4);
        $('#resultsbox').append("<pre>" + pretty + "</pre>");
    }