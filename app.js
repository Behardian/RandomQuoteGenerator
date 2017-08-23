$(document).ready(function () {
    // PAGE INIT FUNCTIONS
    getQuote_click();

    // KEY BINDINGS
    $("#newQuoteBtn").on("click", getQuote_click);
    $("#twitterButton").on("click", setData_click);

});

function getQuote_click() {    
    $.ajax( {
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(data) {
            var post = data.shift();            
            $("#quoteRow").html(post.content);
            $("#titleRow").text("- " + post.title);
            $(".twitter-share-button").prop("data-text", post.content);
        },
        cache: false
    });
};

function setData_click() {
    debugger;
    var phrase = document.getElementById("quoteRow").innerText;
    var tweetUrl = "https://twitter.com/share?text=" + encodeURIComponent(phrase) +
        "." +
        "&url=" +
        "https://github.com/Behardian/RandomQuoteGenerator";

    window.open(tweetUrl);
}
