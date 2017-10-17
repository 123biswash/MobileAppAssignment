function openMe(inside){
	var i, content;
	contect=document.getElementByClassName("content");
	for(i=0;i<content.length;i++){
		content[i].style.display="none";
	}
	document.getElementById(inside).style.display="block";
	
}