
// array of quotes
var quotes = [
	{
	quote: 'If debugging is the process of removing software bugs, then programming must be process of putting them in.',
	source: '–Edsger Dijkstra',
	citation: 'reddit.com'
	},
	{
	quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
	source: '–Martin Goldin',
	citation: '"Perl Best Practices"'
	},
	{
	quote: 'It is not a bug – it is an undocumented feature.',
	source: '–Anonymous',
	citation: 'hackernoon.com'
	},
	{
	quote: 'Java is to JavaScript as ham is to hamster.',
	source: '–Jeremy Keith',
	citation: 'Resilient Web Design'
  },
	{
	quote: 'Before software can be reusable it first has to be usable.',
	source: '– Ralph Johnson',
	citation: 'softwarenature.com'
  },
  {
	quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
	source: '–Louis Srygley',
	citation: 'Twitter'
  }
];

//Create the 'getRandomQuote' function //
function getRandomQuote(array) {
	var quoteIndex = Math.floor( Math.random() * (quotes.length));
	for (var i = 0; i < array.length; i++ ) {
		var randomQuote = array[quoteIndex];
}
return randomQuote;
}
 // create function for random colors
setInterval(function() {
	var red = Math.round(Math.random() * 255 );
	var green = Math.round(Math.random() * 255 );
	var blue = Math.round(Math.random() * 255 );
	var bg = 'background: rgba(' + red + ',' + green + ',' + blue + ')';
	var element = document.getElementById('randomBackground');
	element.style = bg;
}, 4000);


// function to print quotes on the screen
function printQuote() {
	var message = '';
	var randomQuote = getRandomQuote(quotes);
  message = "<p class='quote'>" + randomQuote.quote + "</p>";
  message += "<p class='source'>" + randomQuote.source;
  message += "<span class='citation'>" + randomQuote.citation + "</span>";
  message += "</p>";

    document.getElementById('quote-box').innerHTML = message;
}

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
