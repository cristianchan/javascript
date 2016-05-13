function Person(firstname , lastname , age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
}
 
var juan = new Person('Doe','Defualt',25);

Person.prototype.getFullName = function(){		
	 return this.firstname + ' ' + this.lastname;
};

console.log(juan.getFullName());

