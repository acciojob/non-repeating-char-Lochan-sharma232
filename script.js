function firstNonRepeatedChar(str)
{
	let repeat=new Map()
	let char=null;
	for(let i of str){
		if(map.has(i)){
			map.set(i,map.get(i)+1)
		}else{
			map.set(i,1)
		}
	}
	map.forEach((value,key)=>{
		if(value==1){
			char=key;
			return char;
		}
			})
	
return char;		// Write your code here
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
