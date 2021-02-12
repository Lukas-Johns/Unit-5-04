document.getElementById('report').addEventListener('click',myInput)
function myVanish() {
  document.getElementById('insert').style.display = 'none';
}
function myInput() {
  alert(document.getElementById('insert').value);
}
function myWallpaper() {
  document.body.style.backgroundColor = "lightgreen";
}