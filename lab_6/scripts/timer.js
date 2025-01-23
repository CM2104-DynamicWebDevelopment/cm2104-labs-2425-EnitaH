/**
 * @Author: John Isaacs <john>
 * @Date:   14-Feb-192019
 * @Filename: timer.js
 * @Last modified by:   john
 * @Last modified time: 14-Feb-192019
 */

// Function to handle the alarm for "Boom"
function Boom() {
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='alarm.jpg' alt='Alarm Image' />"; // Change to alarm image
}

// Function to handle the alarm for "Bam"
function Bam() {
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='bam.jpg' alt='Bam Image' />"; // Change to bam image
}

// Function to handle the alarm for "Big Bada Boom"
function BigBadaBoom() {
  document.getElementById('alarm').innerHTML = "<img id='alarmimage' src='BigBadaBoom.jpg' alt='Big Bada Boom Image' />"; // Change to Big Bada Boom image
}

// Set countdowns with different durations and callback functions
setCountdown(10, Bam); // Calls Bam after 10 seconds
setCountdown(15, Boom); // Calls Boom after 15 seconds
setCountdown(17, BigBadaBoom); // Calls Big Bada Boom after 17 seconds

function setCountdown(delay, callback) {
  // Set an initial timeout to display the message after the delay
  setTimeout(function() {
      console.log("Countdown ended"); // Log to the console
      callback(); // Invoke the callback function
  }, delay * 1000);

  // Initialize seconds left
  var secondsleft = delay;

  // Set up an interval to fire every second
  var counter = setInterval(function() {
      // Display the current seconds left
      document.getElementById('countdown').innerHTML = secondsleft;

      // Reduce the seconds left by 1
      secondsleft--;

      // If we reach 0, stop the countdown
      if (secondsleft < 0) {
          clearInterval(counter);
      }
  }, 1000);
}
