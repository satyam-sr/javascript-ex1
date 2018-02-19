function armfun(n){

	n = parseInt(n);
	num = n;
	sum = 0;
	//c = 0;

	while(n>0){
		r = n%10;
		n = Math.floor(n/10);;
		r = Math.pow(r,3);
		//c = c+1;
		sum += r;
		//console.log(n);
	}

	//document.write(c);
	if(sum==num){
		document.getElementById('armstrong').innerHTML = "yes";
	}
	else{
		document.getElementById('armstrong').innerHTML = "no";
	}
}