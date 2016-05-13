var person = {
	firstName:'Default',
	lastName: 'Default',
	age:25,
	getFullName: function () {
		return this.firstName +' '+this.lastName;
	}
}

var john = {
	firstName:'Juan',
	lastName: 'Espinal',	
}


var jane = {
	address:'111 main st.',
	getFormalFullName:function(){
		return this.lastName + ', ' + this.firstName;
	}
}


var jim = {
	getFirstName:function(){
		return this.firstName
	}
}

debugger;
_.extend(john,jane,jim);

