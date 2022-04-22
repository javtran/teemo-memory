# Pre-work - *Memory with Teemo*

**Memory with Teemo** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jackson Tran**

Time spent: **20** hours spent in total

Link to project: https://glitch.com/edit/#!/teemo-memory

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Teemo themed design
- [x] Display rules on how to play the game
- [x] Navigable slides to navigate between rules and the game
- [x] Animated buttons
- [x] Responsive website to screen size

## Video Walkthrough (GIF)

Navigable slides between rules and the game.

![](https://media4.giphy.com/media/wUMaSp3nGwgRqhXdcB/giphy.gif?cid=790b76117c58c87fa04457efe867aa7ff25872344a217dc2&rid=giphy.gif&ct=g)

Press the start button to start the game. After you successfully imitated the previous sequence, it will play the next version of the sequence (adding one more pattern).

![](https://media1.giphy.com/media/tKqtsoHnIXsVB19QVf/giphy.gif?cid=790b76117196d96c0e6026ba49a54f1624b2ca9627ca22c5&rid=giphy.gif&ct=g)

Press the stop button to stop the game.

![](https://media4.giphy.com/media/ueexCuE7Rf9YSY7Zju/giphy.gif?cid=790b761184b285ee367ef0266cc19ba3b71ed4a549416682&rid=giphy.gif&ct=g)

You will be allowed to have 3 mistakes total for the entire game. You lose if you make more than 3 mistakes.

![](https://media2.giphy.com/media/N9zqqaRCNYv5CLvUWB/giphy.gif?cid=790b7611aa3b153b55e922bef9285fc1c4215f5527a79b24&rid=giphy.gif&ct=g)

A new randomize sequence will play when starting a new round.

![](https://media4.giphy.com/media/2txllDktL8Gqt6OVx4/giphy.gif?cid=790b7611eae0ef88495e7181c9eb71c108fa4cbef8d8e974&rid=giphy.gif&ct=g)

The sequences playback speeds up on each turn.

![](https://media1.giphy.com/media/zvEGlwhxdKA1XALbfr/giphy.gif?cid=790b7611d0d051d0a7863bfc5133a5ee61fbaede0308ff6f&rid=giphy.gif&ct=g)

The web app is responsive to screen sizes.

![](https://media1.giphy.com/media/ITIHZpYhn4KKFIdR2a/giphy.gif?cid=790b761141d42aafaa686a1f3af253f259bf5c261861e22b&rid=giphy.gif&ct=g)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://pages.mtu.edu/~suits/notefreqs.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
- https://www.w3schools.com/js/js_random.asp
- https://www.w3schools.com/colors/colors_names.asp
- https://www.w3schools.com/cssref/pr_background-image.asp
- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
- https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createOscillator
- https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain
- https://www.youtube.com/watch?v=PNYHFluhOGI
- https://na.leagueoflegends.com/en-us/champions/teemo/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
- https://www.w3schools.com/howto/howto_css_animate_buttons.asp
- https://www.w3schools.com/w3css/w3css_slideshow.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

In my personal opinion, I think the biggest challenge for this submission is thinking about the relevance of this game and how it is applicable to a real user. Once I got the basic design and functionality, 
I started contemplating on the next steps for this game. I had to first put myself in the perspective of a user who wants to play memory game. And frankly I wouldn't want to play my own game if the game had took the version of the basic requirements.
As a gamer myself, I really like games to look interactive, well-designed and just overall created up to a viable standard. Hence, I made my game into a teemo themed memory game since I am a big fan of League of Legends. The whole process required me to extract
Teemo's voice dialogue from Youtube as well as importing Teemo pictures from the League of Legends website. I also had to think of other realistic user stories that applies to this game. For instance, as a gamer, I want to read the rules of the game so that I can understand
how to play the game. That user story was the reason in my decision of creating a rules page. While in the process of creating the rules page for the game, I was able to learn how to create a navigable page slider. The finishing touch I made for this game was animating
the components in the game. I looked up some basic CSS animations and was able to apply them to buttons to give them a more interactive feeling. Overall, there is still a lot to improve in making this a more fun and relevant games for users, but I got the chance to learn a lot of 
web development skills through this personal challenge.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

In my experience with talking to professional engineers, they tend to have an ultimate goal or dream that is unrelated to web development. I have also learned about great engineers who have had web development experience under their belt.
My questions for web development relates to questioning how web development serves as a stepping stone to achieving goals that are related or unrelated to web development. And my follow up question to that is why start at web development as opposed to 
other engineering roles. And for current web development engineers, how does being a web developer establishes their position in making a change in the world. Is it a positive change or is it negative change? How do we justify these changes in our society?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I have a few ideas in making this game better, but since I would only have a few hours I came down to these tasks. One idea is implementing a scoreboard that live broadcast players scores and ranks. In order to do so, I would have to implement some sort of database to store and receive data from users. There are existing
database that are free to use that could ease the back end work. With the remaining time, I would use it smooth out how the game logic is affecting the Teemo's voice as the game progresses. As of now, the feature to speed up playback cuts out Teemo's voice and it can get to a point where Teemo's voice is not heard in a playback. A solution
to this is to have the sound continue to play even if it overlaps with another sound playing.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Jackson Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
