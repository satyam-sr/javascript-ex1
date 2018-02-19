function fibfun(n){
	var a=0,b=1;
	ans = "0 1 ";

	while(1){
		c = a+b;
		if(c>n){
			break;
		}
		ans = ans+c+" ";
		a = b;
		b = c;
	}
	document.getElementById('fibonacci').innerHTML = ans;

}