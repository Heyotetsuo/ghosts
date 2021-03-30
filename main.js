//globals
function init(){
	// init globals
}
function main(){
	init();
	var CVS = document.querySelector("canvas");
	var C = CVS.getContext("2d");
	C.fillStyle = "red";
	C.fillRect( 0, 0, 800, 800 );
}
main();
