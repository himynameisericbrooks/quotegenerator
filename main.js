// array of objects that are quotes
var quoteArray = [
	{
		quote: '"Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!"',
		author: '-Billy Connolly'
	},
	{
		quote: '“The best thing about the future is that it comes one day at a time.”',
		author: '-Abraham Lincoln'
	},
	{
		quote: '"People say nothing is impossible, but I do nothing every day."',
		author: '-A. A. Milne'
	},
	{
		quote: '"Forgiveness is a gift of high value. Yet its cost is nothing."',
		author: '-Betty Smith'
	},
	{
		quote: '"Knowledge is freedom and ignorance is slavery"',
		author: '-Miles Davis'
	},
	{
		quote: '"All we have to decide is what to do with the time that is given us."',
		author: '-J. R. R. Tolkien'
	},
	{
		quote: '"It does not do well to dwell on dreams and forget to live."',
		author: '-Albus Dumbledore'
	},
	{
		quote: '"I\'m sick of following my dreams. I\'m just going to ask them where they\'re goin\', and hook up with them later."',
		author: '-Mitch Hedberg'
	},
	{
		quote: '"This shirt is dry clean only. Which means... it\'s dirty."',
		author: '-Mitch Hedberg'
	},
	{
		quote: '"We know what we are, but know not what we may be."',
		author: '-William Shakespeare'
	},
	{
		quote: '"If everything was perfect, you would never learn and you would never grow."',
		author: '-Beyoncé'
	},
	{
		quote: '"Discovering the truth about ourselves is a lifetime\s work, but it\'s worth the effort."',
		author: '-Fred Rogers'
	},
	{
		quote: '"Often out of periods of losing come the greatest strivings toward a new winning streak."',
		author: '-Fred Rogers'
	},
	{
		quote: '"I want a burrito to tuck me gently into its warm beans and say \"Rest here, my child. Be at peace now.\""',
		author: '-Blue Q Dish Towel'
	},
	{
		quote: '"Leaders are made, they are not born. They are made by hard effort, which is the price which all of us must pay to achieve any goal that is worthwhile."',
		author: '-Vince Lombardi'
	},
	{
		quote: '"Soldiers generally win battles; generals get credit for them."',
		author: '-Napoleon Bonaparte'
	},
	{
		quote: '"Writing about music is like dancing about architecture."',
		author: '-Thelonius Monk'
	},
	{
		quote: '"I rebel; therefore I exist."',
		author: '-Albert Camus'
	},
	{
		quote: '"Suckin’ at something is the first step to being sorta good at something."',
		author: '-Jake the Dog'
	},
	{
		quote: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
		author: '-Robert Frost'
	},
];

// This is code so the enter key also fires (runs/invokes/instantiates) the function
// addEventListener('keypress', function enterKey(e) {
//     if(e.keyCode == 13) {
//         rqgFunc();
// };


// This function currently generates a random number that aligns with an array object and writes it to the corresponding html section.
function rqgFunc() {
	var qran = Math.floor((Math.random() * quoteArray.length));
			document.getElementById("quote-section").textContent = quoteArray[qran].quote;
			document.getElementById("author-section").textContent = quoteArray[qran].author;
};