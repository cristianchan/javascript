function Sumar(callback,num1 , num2){
	console.log(num1+num2);
	callback();
}

Sumar(function(){
	console.log('Done!')
},5,6);

