// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistake = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  mistake = 0;
  gamePlaying = true;
  pattern = createPattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: "yessir",
  2: "hut",
  3: "reporting",
  4: "swiftly",
  5: "laugh",
  6: "scout"
}
function playTone(btn,len){ 
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  document.getElementById(freqMap[btn]).play();
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn)
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    //o.frequency.value = freqMap[btn]
    //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    document.getElementById(freqMap[btn]).play();
    tonePlaying = true
  }
}

function stopTone(btn){
    //g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  document.getElementById(freqMap[btn]).pause();
  document.getElementById(freqMap[btn]).currentTime = 0;
  tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 900/pattern.length;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if(pattern[guessCounter] != btn) {
    mistake ++;
    if (mistake == 3) {
      loseGame();
      return;
    }
    if (mistake == 2) {
      alert("You have " + 1 + " try remaining.");
    }
    else {
      alert("You have " + (3 - mistake) + " tries remaining.")
    }
    guessCounter = 0;
    return;
  }
  if(guessCounter == progress) {
    if(progress == pattern.length - 1) {
      winGame();
      return;
    }
    progress += 1;
    playClueSequence();
  }
  else {
    guessCounter += 1;
  }
}

function createPattern(){
  let listo = [];
  for(let i = 0; i <= 8; i++) {
    listo.push(Math.ceil(Math.random() * 6));
  }
  return listo;
}

function playYessir(){
  document.getElementById("yessir").play();
}

function playHut(){
  document.getElementById("hut").play();
}

function playReporting(){
  document.getElementById("reporting").play();
}

function playSwiftly(){
  document.getElementById("swiftly").play();
}

function playLaugh(){
  document.getElementById("laugh").play();
}

function playScout(){
  document.getElementById("scout").play();
}

(function() {

  let slides = document.querySelectorAll('.page');
  let slidesCount = slides.length
  let index = 0; // index
  slides.forEach(slide => {
    slide.onclick = (e) => {
      
      // gets the click position
      
      // flips previous if click on left
      if (e.target.className == "arrow-left") {
        let nextIndex = (--index % slidesCount);
        
        let ditance = -100;
        let styleValue = nextIndex * ditance; 
        let style = `translateX(${styleValue}%)`;
        e.target.parentElement.parentElement.parentElement.style.transform = style;
        
      //flips next if click on right
      } else if (e.target.className == "arrow-right") {
        
        let nextIndex = (++index % slidesCount);
        
        /* Management for the CSS */
        // By how much we want to move, In Percents.
        // A negative value because we're moving left
        let ditance = -100;
        // If nextIndex = 2, Then rawCssValue = -200
        let styleValue = nextIndex * ditance; 
        
        /* Applying the CSS */
        let style = `translateX(${styleValue}%)`;
        e.target.parentElement.parentElement.parentElement.style.transform = style;
      }

    }
  });
})()