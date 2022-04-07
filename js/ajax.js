function getData(pageName){
	var req = new XMLHttpRequest();
	req.open("get", ""+pageName);
	req.onload=function(){
		var content = document.getElementById("content");
		content.innerHTML = this.responseText;
		};
	req.send();
}