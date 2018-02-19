function palfun(str){
	
	var strar = str.split("");
	var revar = strar.reverse();
	var strrev = revar.join("");

	//document.write(strrev);
	if(str==strrev){
		document.getElementById('palindrome').innerHTML = "yes";
	}
	else{
		document.getElementById('palindrome').innerHTML = "no";
	}
}