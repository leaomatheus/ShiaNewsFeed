var quotes = [
	"Do it! Just do it!",
	"Don't let your dreams be dreams.",
	"Yesterday you said tomorrow.",
	"Do it. Make your dreams come true.",
	"Some people dream success while you're gonna wake up and work hard at it.",
	"Nothing is impossible.",
	"You should get to the point where anyone else would quit and YOU'RE NOT GOING TO STOP THERE",
	"WHAT ARE YOU WAITING FOR?",
	"Yes, you can! Just do it!",
	"If you're tired of starting over, stop giving up."
];

var myQuote = quotes[Math.floor(Math.random()*quotes.length)];
var shiaURL = chrome.extension.getURL("shia.png");

var quoteDiv = $("<div class='shia-quote' id='main-quote'/>");


$('div#main-quote').css('background-image', 'url("' + shiaURL + '")');
var quoteText = $("<p>“"+myQuote+"”</p>")
    .addClass('shia-quote-text')
    .appendTo(quoteDiv);

var quoteSource = $("<p>~ Shia LaBeouf</p>")
    .addClass('shia-quote-source')
    .appendTo(quoteDiv);

var quoteImg = $("<img src='" + shiaURL + "''>")
	.addClass('shia-quote-img')
	.appendTo(quoteDiv);

// This delay ensures that the elements have been created by Facebook's
// scripts before we attempt to replace them
setInterval(function(){
    // Replace the news feed
	$("div#pagelet_home_stream").replaceWith(quoteDiv);
	$("div[id^='topnews_main_stream']").replaceWith(quoteDiv);

    // Delete the ticker
    $("div#pagelet_ticker").remove();

    // Delete the trending box
    $("div#pagelet_trending_tags_and_topics").remove();
}, 1000);