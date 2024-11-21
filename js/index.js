const Quote = [
    `“Be yourself; everyone else is already taken.”`,
    `“So many books, so little time.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
    `“You only live once, but if you do it right, once is enough.”`,
    `“Be the change that you wish to see in the world.”`,
    `“In three words I can sum up everything I've learned about life: it goes on.”`
    
]
const titel = [
    '― Oscar Wilde',
    '― Frank Zappa',
    '― Albert Einstein',
    '― Marcus Tullius Cicero',
    '― Dr. Seuss',
    '― Ralph Waldo Emerson',
    `― Oscar Wilde, The Happy Prince and Other Stories`,
    `― Mae West`,
    `― Mahatma Gandhi`,
    `― Robert Frost`
]

function clickOnThe(){
    var randomNumber = Math.random() *titel.length ;
    var x = Math.floor(randomNumber) ;   
    document.getElementById('Quote1').innerHTML=Quote[x];
    document.getElementById('titel1').innerHTML=titel[x];
}         