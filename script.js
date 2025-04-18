function stringChop(str, size) {
  // your code here
	let ans=[];
	for(let i=0;i<str.length;i=i+size){
		let subs= str.slice(i,i+size);
		ans.push(subs);
	}
	return ans;
	
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
