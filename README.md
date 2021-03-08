# Pre-work - *Teemo's Memory*

**Teemo's Memory** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jackson Tran**

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)
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

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src = "http://g.recordit.co/w6nOEzMsXe.gif" width = 250><br>
![](http://g.recordit.co/w6nOEzMsXe.gif)

GIF created with [Recordit](https://recordit.co/).

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

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I had minor challenges that had to do with first time coding in CSS, JS, and HTML. However, those were easily solved via researching on Google. The only major trouble I had was understanding
some of the given code from the prework instructions. From the first half of the instruction, I fully grasped what the coding was doing and how the syntax work for these programming languages. 
I was doing well in trying to take in these new content until the part where I had to copy and paste the JS functions for playTone, startTone, and stopTone. The functionality of those functions 
were understandable, but I personally like to look into and understand the technical code that makes up those functionality. The Web Audio API was used in these functions to play certain frequency 
tones for each unique button. In the effort to learn these concepts, I researched different websites on Google and looked at different examples that utilizes those functions. I looked for websites 
about AudioContext and the subcategories about AudioContext like createOscillator and createGain.  Then I looked back on the given code and applied what I researched to walk through what each line 
of code is for. Overall, I got to learn about CSS, JS, and HTML and how they cooperate with one another to create websites that we use.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing the prework, I want to learn more about web development engineer as a role. I want to know why people prefer web development over roles like machine learning and software development. 
I know that there are different categories in web development such as front-end, back-end and full-stack, but I don't have a full understanding of what each role does and how they work with one another. 
I somehow feel like web development is such a stretch from what I've been learning in school (learning about data structure, etc.) because it has more artistic value and freedom to it. I want to know 
how much coding and what requirement is needed to prepare for a professional role in web development.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would want to implement new features to it. One idea is making the game a multiplayer game where there can be a number of players who competes with one another to see who gets the furthest in the 
rhythmn game. This would mean that the number sequences is unlimited until a winner arises among the players. I would also want to implement a feature so the players can choose the number of buttons to display. 
Additionally, I would implement a scoreboard that live broadcast players that reached the top 10 records of sequence. Some of ideas would have to use API that stores data in realtime. Other than adding more functionality, 
I would also spend more time to improve the aesthetics of the game, through visual designs, animations, etc.,
to give a pleasing look to the website. 



## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.