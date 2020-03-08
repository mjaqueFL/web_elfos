// JavaScript Document

function accessAFocus(elemento){
	
	elemento.style.backgroundColor="#303911";
	elemento.style.color="#ebc8a7";
	
}

function accessABlur(elemento){
	
	elemento.style.backgroundColor="#ebc8a7";
	elemento.style.color="black";
	
}

function accessFocusSubMenu(elemento){
	
	elemento.style.backgroundColor="#CBCBCB";
	
}

function accessBlurSubMenu(elemento){
	
	elemento.style.backgroundColor ="white";
}

function accessFocusMenu(elemento){
	
	elemento.style.backgroundColor = "gray"; 
}

function removeBackground(elemento){
	
	elemento.style.removeProperty('background-color');
	$.jGrowl("Hello world!",{ life : 2000});
}

function accessFocusTerms(elemento){
	
	elemento.style.backgroundColor ="#CBCBCB"; 
}
