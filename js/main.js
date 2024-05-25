var quotes = [
        {
            text: '"Be yourself; everyone else is already taken."',
            author: '--Oscar Wilde',
        },
        {
            text: '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."',
            author: '--Marilyn Monroe'
        },
        {
            text: '"So many books, so little time."',
            author: '--Frank Zappa'
        },
        {
            text: '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
            author: '--Albert Einstein'
        },
        {
            text: '"A room without books is like a body without a soul."',
            author: '--Marcus Tullius Cicero'
        },
        {
            text: '"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."',
            author: '--Bernard M. Baruch'
        },
        {
            text: '"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth."',
            author: '--William W. Purkey'
        },
        {
            text: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
            author: '--Dr. Seuss'
        },
        {
            text: '"You only live once, but if you do it right, once is enough."',
            author: '--Mae West'
        },
        {
            text: '"Be the change that you wish to see in the world."',
            author: '--Mahatma Gandhi'
        },
        {
            text: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
            author: '--Robert Frost'
        },
        {
            text: '"If you tell the truth, you don\'t have to remember anything."',
            author: '--Mark Twain'
        },
        {
            text: '"A friend is someone who knows all about you and still loves you."',
            author: '--Elbert Hubbard',
        },
        {
            text: '"To live is the rarest thing in the world. Most people exist, that is all."',
            author: '--Oscar Wilde',
        },
        {
            text: '"Always forgive your enemies; nothing annoys them so much."',
            author: '--Oscar Wilde',
        },
        {
            text: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
            author: '--Mahatma Gandhi',
        },
        {
            text: '"We accept the love we think we deserve."',
            author: '--Stephen Chbosky, The Perks of Being a Wallflower',
        },
        {
            text: '"Without music, life would be a mistake."',
            author: '--Friedrich Nietzsche, Twilight of the Idols',
        },
        {
            text: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
            author: '--Ralph Waldo Emerson',
        },
        {
            text: '"Insanity is doing the same thing, over and over again, but expecting different results."',
            author: '--Narcotics Anonymous',
        },
    ]

    var prevRandomNumber = 0;
    var randomNumber = 0;
    function quoteButtonClick(){

        if(prevRandomNumber == 0)
        {
            randomNumber = Math.floor(Math.random() * quotes.length);
        }
        else if(prevRandomNumber == randomNumber)
        {
            randomNumber = Math.floor(Math.random() * quotes.length);  
        }
        prevRandomNumber = randomNumber;

        var quoteRandomObject = quotes[randomNumber];

        document.getElementById('quote-text').innerHTML = quoteRandomObject.text;
        document.getElementById('author').innerHTML = quoteRandomObject.author;
    }
   