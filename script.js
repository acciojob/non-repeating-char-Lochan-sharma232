function firstNonRepeatedChar(str) 
{
	var ReapeatedChar;
	for(var i=0;i<str.length;i++){
		for(j=0;j<str.length;j++){
			if(str[i]!=str[j]){
				ReapeatedChar=str[j]
			}else{
				return null;
			}
		}
	}
	return ReapeatedChar;
 // Write your code here
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
