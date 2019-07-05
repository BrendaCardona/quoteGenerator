// array of quotes
var quotes = [
	{
	quote: 'If debugging is the process of removing software bugs, then programming must be process of putting them in.',
	source: '–Edsger Dijkstra'
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
	citation: 'softwarenature.com',
	year: '2016'
  },
  {
	quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
	source: '–Louis Srygley',
	citation: 'Twitter'
  },
  {
	quote: 'Every great developer you know got there by solving problems they were unquialified to solve until they actually did it.',
	source: 'Patrick McKenzie.',
	citation: 'Twitter',
	year: '2016'
	}
];

// create a viewedQuotes variable
var viewedQuotes = [];

//Create the 'getRandomQuote' function //
function getRandomQuote() {
	var quoteIndex = Math.floor( Math.random() * (quotes.length));
	// splice adds/removes items to/from an array and return removed items
		var splicedQuote = quotes.splice(quoteIndex, 1)[0];
			viewedQuotes.push(splicedQuote);
		
		if (quotes.length === 0){
		quotes = viewedQuotes;
		viewedQuotes = [];
		}
	return splicedQuote;
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
	var message = "";
	var randomQuote = getRandomQuote(quotes);
  message = "<p class='quote'>" + randomQuote.quote + "</p>";
  message += "<p class='source'>" + randomQuote.source;
	if (randomQuote.citation) {
		message += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if (randomQuote.year) {
		message += '<span class="year">' + randomQuote.year + '</span>';
	}
  message += "</p>";

    document.getElementById('quote-box').innerHTML = message;
}

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// call the printQuote to  update the quote periodically
setInterval(printQuote, 4000); 