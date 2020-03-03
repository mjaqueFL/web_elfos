// JavaScript Document

function accessibility(elemento){
	
	elemento.style.backgroundColor="#303911";
	elemento.style.color="#ebc8a7";
	
}

function defecto(elemento){
	
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

function accessBlurMenu(elemento){
	
	elemento.style.removeProperty('background-color')
	
}