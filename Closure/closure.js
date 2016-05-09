function SetArarray(){
	var arr = [];
	for(var i = 0; i<3 ; i++){
		arr.push(
			function (){
				console.log(i);
			}
		);
	}
	return arr;
}


var test = SetArarray();
console.log(test);
test[0]();
test[1]();
test[2]();



function SetArarray2(){
	var arr = [];
	for(var i = 0; i<3 ; i++){
		let j = i;
		arr.push(
			function (){
				console.log(j);
			}
		);
	}
	return arr;
}


var test2 = SetArarray2();
console.log(test2);
test2[0]();
test2[1]();
test2[2]();
