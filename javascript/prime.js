function primefun(n)
{
	
	ans = "";
	for(i=2;i<=n;i++){
		d=0 ;
		for(j=2;j*j<=i;j++){
			if(i%j==0) {
				d = 1;
				break ;
			}
			
		}
		if(d==0){
			ans = ans+i+" ";
		} 
	}
	
	document.getElementById('prime').innerHTML = ans;	
}