var quotesList = [];

function switchQuote() {

	randomQuoteNumber = Math.floor(Math.random() * quotesList.length);

	var nextQuote = quotesList[randomQuoteNumber];

	$("#quote").text(nextQuote["phrase"]);

	if (nextQuote["signature"] === undefined){
		$("#signature").html("");
	} else {
		$("#signature").text(nextQuote["signature"]);
	}
	
}


function initQuotes() {
	jsonText = $("#quotes_json").html();
	quotesList = JSON.parse(jsonText);
	switchQuote();

}


$(document).ready(initQuotes);

$("#next-button").click(function(){
	$("#quote-container").animate({ left:"100px", opacity:"0"}, "fast", switchQuote);
	$("#quote-container").animate({ left:"0", opacity:"1"},"fast");
});
