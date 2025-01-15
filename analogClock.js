function refreshClock() {
  const currentTime = new Date(); // Fetch the current date and time
  
  const hrs = currentTime.getHours(); // Get the current hour
  const mins = currentTime.getMinutes(); // Get the current minutes
  const secs = currentTime.getSeconds(); // Get the current seconds

  // Calculate rotation degrees for each hand (I had help with this part from github.)
  const hrRotation = ((hrs % 12) + mins / 60) * 30; 
  const minRotation = (mins + secs / 60) * 6; 
  const secRotation = secs * 6; 

  // Select elements for the clock hands
  const hrHand = document.querySelector('.hour-hand'); 
  const mnHand = document.querySelector('.min-hand'); 
  const scHand = document.querySelector('.second-hand'); 

  // Rotate clock hands based on calculated angles (I made this part like a similar one on Stack Overflow.)
  hrHand.style.transform = `translate(-50%, 0) rotate(${hrRotation}deg)`;
  mnHand.style.transform = `translate(-50%, 0) rotate(${minRotation}deg)`;
  scHand.style.transform = `translate(-50%, 0) rotate(${secRotation}deg)`;
}

// Trigger the clock refresh every second
setInterval(refreshClock, 1000);

// Call the function once to initialize the clock display
refreshClock();
