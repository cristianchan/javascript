function mapArray(array,fun){
	var newArray = [];
	for(var i = 0 , tam = array.length; i<tam ; i++){
		newArray.push(
				fun(array[i])
			)
	}
	return newArray;
}


var limiter =  function myLimiter(limiter){
	return function function_name(limiter,item) {
		return item<limiter
	}.bind(this,limiter)
}


var array  = [1,2,3,4];
var arrayCompare = mapArray(array,limiter(2));
console.log(array);
console.log(arrayCompare);



var arrayPlus3 = mapArray(array , function function_name(argument) {
		return argument * 3; 
})

console.log(arrayPlus3);