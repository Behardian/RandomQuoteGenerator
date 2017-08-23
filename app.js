$(document).ready(function () {
    // PAGE INIT FUNCTIONS
    getQuote_click();

    // KEY BINDINGS
    $("#newQuoteBtn").on("click", getQuote_click);       

});

function getQuote_click() {    
    $.ajax( {
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(data) {
            var post = data.shift();            
            $("#quoteRow").html(post.content);
            $("#titleRow").text("- " + post.title);
        },
        cache: false
    });
};
