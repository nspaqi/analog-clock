# analog-clock
### How It Works
#### 1. Fetch the Current Time
The function refreshClock retrieves the current time using the JavaScript Date object:


`const currentTime = new Date();`
getHours(): Gets the current hour.
getMinutes(): Gets the current minutes.
getSeconds(): Gets the current seconds.

#### 2. Calculate Rotation Degrees
The code calculates the rotation angle for each clock hand (hour, minute and second) based on the current time:

Hour Hand:


`const hrRotation = ((hrs % 12) + mins / 60) * 30;`
This ensures that the hour hand moves slightly every minute.

Minute Hand:


`const minRotation = (mins + secs / 60) * 6;`
This makes the minute hand smoothly transition as seconds pass.

Second Hand:


`const secRotation = secs * 6;`
This updates the second hand every second.

#### 3. Update the Clock Hands
The script selects the HTML elements representing the clock hands:


`const hrHand = document.querySelector('.hour-hand');`

`const mnHand = document.querySelector('.min-hand');`

`const scHand = document.querySelector('.second-hand');`

Then, it applies a CSS transform to rotate each hand based on the calculated angles:


`hrHand.style.transform` `=` `translate(-50%, 0) rotate(${hrRotation}deg)`;

`mnHand.style.transform` `=` `translate(-50%, 0) rotate(${minRotation}deg)`;

`scHand.style.transform` `=` `translate(-50%, 0) rotate(${secRotation}deg)`;

#### 4. Update Every Second
The setInterval function ensures the clock updates every second:


`setInterval(refreshClock, 1000);`
The function is also called immediately to set the initial clock position:


`refreshClock();`

#### Inspiration
Parts of this code, such as the calculation of rotation degrees and element styling, were inspired by examples on GitHub and Stack Overflow. These resources helped refine the implementation.

