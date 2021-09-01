const textEl = document.getElementById('text');
const adviseBtn = document.getElementById('advice-btn');
const cirleEl = document.getElementById('circle');
let count = 0; 


let phrases = ["When life gives you lemonade, make lemons. Life will be all like whaaaaatttt",
"If you love something, set it free. Unless its a tiger",
"Are you here for a good time, or a long time?",
"Everything not saved will be lost - Dark Souls",
"Never trust an electrician with no eyebrows",
"Do not take life too seriously. You will never get out of it alive.",
"I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here.",
"If cats looked like frogs we’d realize what nasty, cruel little bastards they are. Style.That’s what people remember.",
"You can't shine like a diamond, if you not willing to get cut like a diamond!",
"The truth hurts, and so would you if you were stretched as much",
"Being rich is having money; being wealthy is having time.",
"If you are the smartest person in the room, then you are in the wrong room",
"Everything is funny, as long as it's happening to somebody else",
"You cannot be anything if you want to be everything.",
"A bank is a place that will lend you money if you can prove that you don't need it.",
"We don't stop playing because we grow old; we grow old because we stop playing."
]

function randomize() {
    let thatOne = randomColors();
    cirleEl.style.backgroundColor = thatOne;
    textEl.style.backgroundColor = thatOne;

  }
  
  // random colors - taken from here:
  // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



function Advise() {
    count++;
    randomize();
    let randomIndex = Math.floor(Math.random() * phrases.length);
    textEl.textContent = phrases[randomIndex];

    if (count > 5) {
        textEl.textContent = "You are now wise. No need to thank me!";
        adviseBtn.disabled = true;
    }
}
