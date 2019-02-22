/*
  Write a function to generate a random hexadecimal number
  Write a function to use that number to set the background color
  Run these functions when spacebar is hit
*/

//get random num, turn it to a hex num as string, take 6 chars from the string, add to #
function getHexNum() {
  return '#' + Math.random().toString(16).slice(2, 8);
}

//get random hex number and set the background color to that number
function setBackground() {
  let hexColor = getHexNum();
  //get the background property on style that is on body property of document
  let hexElement = document.getElementById('hex');
  hexElement.textContent = hexColor;
  document.body.style.background = hexColor;
}

//on keyup will run every time a key is depressed
//here, we set this property to a function, so function runs every time
//a key is depressed
//the function is passed a keyboard event object
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    setBackground();
  }
};
