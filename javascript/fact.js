function factfun(n){

	ans = 1;
	for(i=2;i<=n;i++){
		ans = ans*i;
	}
	document.getElementById('factorial').innerHTML = ans;
}