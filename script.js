document.getElementById('report').addEventListener('click',myInput)
/*Above me is the event listener connecting my button to myInput(). Below is the function that makes my text box vanish after poping up a 3D image*/
function myVanish() {
  document.getElementById('insert').style.display = 'none';
}
function myInput() {
  alert(document.getElementById('insert').value);
}
/*Above me is the function that changes the value of my textbox into an alert. Below is the function that changes my background colour*/
function myWallpaper() {
  document.body.style.backgroundColor = "lightgreen";
}