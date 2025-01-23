$(function() {
    alert("document ready");
    
    $('#searchform').submit(function() {
        var searchterms = $("#searchterms").val();
        addItemToList("example item");
        return false; // Prevents the form from reloading the page
    });
    
    // Function to add items to the list
    function addItemToList(item) {
        $('#results').append("<li>" + item + "</li>");
    }
});
