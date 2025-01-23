function addContent() {
    // Array of Disney Duck names
    let items = ["hewey", "dewey", "louie"];
    
    // Build the HTML string for a <ul> list
    let items_html = "<ul>";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        items_html += "<li>" + item + "</li>";
    }
    items_html += "</ul>";
    
    // 1. Find the content div
    let contentDiv = document.getElementById("content");
    
    // 2. Modify its innerHTML by adding items_html
    contentDiv.innerHTML = items_html;
}
