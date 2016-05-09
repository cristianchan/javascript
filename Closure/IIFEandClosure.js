function SetArarray(){
	var arr = [];
	for(var i = 0; i<3 ; i++){
		arr.push(
			(function (j){
				return function(){
					console.log(j);
				}
			})(i)
		);
	}
	return arr;
}


var test = SetArarray();
console.log(test);
test[0]();
test[1]();
test[2]();