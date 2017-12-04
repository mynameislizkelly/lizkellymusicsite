document.getElementsByTagName("body");
var infoHalf=document.querySelector("#infoHalf");
var infoKids=document.querySelector("#infoKids");
var scroll=document.querySelector(".betterHalf");
var scrollKids=document.querySelector(".kidsMusic")




	function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}
	 document.body.style.backgroundColor = randomColor();

	

	

scroll.addEventListener("click", function(){
	infoHalf.scrollIntoView();
});
scrollKids.addEventListener("click", function(){
	infoKids.scrollIntoView();
});