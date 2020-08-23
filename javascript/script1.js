<script>
//FOR JEAN 1
function changeImage1() {
var image = document.getElementById('myImage1');
if (image.src.match("bulbon"))
{
 image.src="jean1.jpg";
}
else
{
 image.src="jean1back.jpg";
}
}

function revertImage1() {
var image = document.getElementById('myImage1');
if (image.src.match("bulbon"))
{
 image.src="jean1back.jpg";
}
else
{
 image.src="jean1.jpg";
}
}
//FOR JEAN 2
function changeImage2() {
var image = document.getElementById('myImage2');
if (image.src.match("bulbon"))
{
 image.src="jean2.jpg";
}
else
{
 image.src="jean2back.jpg";
}
}

function revertImage2() {
var image = document.getElementById('myImage2');
if (image.src.match("bulbon"))
{
 image.src="jean2back.jpg";
}
else
{
 image.src="jean2.jpg";
}
}
//FOR JEAN 3
function changeImage3() {
var image = document.getElementById('myImage3');
if (image.src.match("bulbon"))
{
 image.src="jean3.jpg";
}
else
{
 image.src="jean3back.jpg";
}
}

function revertImage3() {
var image = document.getElementById('myImage3');
if (image.src.match("bulbon"))
{
 image.src="jean3back.jpg";
}
else
{
 image.src="jean3.jpg";
}
}
//FOR JEAN 4
function changeImage4() {
var image = document.getElementById('myImage4');
if (image.src.match("bulbon"))
{
 image.src="jean4.jpg";
}
else
{
 image.src="jean4back.jpg";
}
}

function revertImage4() {
var image = document.getElementById('myImage4');
if (image.src.match("bulbon"))
{
 image.src="jean4back.jpg";
}
else
{
 image.src="jean4.jpg";
}
}
//FOR JEAN 5
function changeImage5() {
var image = document.getElementById('myImage5');
if (image.src.match("bulbon"))
{
 image.src="jean5.jpg";
}
else
{
 image.src="jean5back.jpg";
}
}

function revertImage5() {
var image = document.getElementById('myImage5');
if (image.src.match("bulbon"))
{
 image.src="jean5back.jpg";
}
else
{
 image.src="jean5.jpg";
}
}
//FOR JEAN 6
function changeImage6() {
var image = document.getElementById('myImage6');
if (image.src.match("bulbon"))
{
 image.src="jean6.jpg";
}
else
{
 image.src="jean6back.jpg";
}
}

function revertImage6() {
var image = document.getElementById('myImage6');
if (image.src.match("bulbon"))
{
 image.src="jean6back.jpg";
}
else
{
 image.src="jean6.jpg";
}
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script>