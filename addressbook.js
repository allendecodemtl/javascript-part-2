function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
}

function Email(address, type){
    this.address = address;
    this.type = ["work", "home", "other"];
}

Person.prototype.addEmail = function(emailAdd, emailType){
    var email_Obj = new Email(emailAdd, emailType);
    this.email.push(email_Obj);      
}

var person = new Person("alice","wonderland");
person.addEmail("alice@gmail.com","work");

console.log(person);