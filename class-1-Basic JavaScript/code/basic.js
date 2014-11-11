//
//var names = ["Jeremy", "John", "Jeffrey"];
//var functions = [];
//
//for (var ii = 0; ii < names.length; ii++) {
//
//    var name = names[ii];
//
//    functions[ii] = populateFunction(name);
//}
//
//
//
//for (var jj = 0; jj < functions.length; jj++) {
//    functions[jj]();
//}
//
//function populateFunction(name) {
//    return function () {
//        alert(name);
//    };
//}

//=================================================================

//var person = new Object();
//person.firstName = "John";
//person.lastName = "Doe";

//=================================================================

//var person ={};
//person.firstName = "John";
//person.lastName = "Doe";
//person.sayHi = function () {
//  return "Hi there";
//};

//=================================================================

//var person ={
//    firstName: "John",
//    lastName: "Doe",
//    sayHi: function () {
//        return "Hi there";
//    }
//};

//=================================================================

//var janeDoe = createFunction('jane', 'doe');
//
//function createFunction(firstName, lastName) {
//    return{
//        firstName: firstName,
//        lastName: lastName,
//        sayHi: function () {
//            return "Hi there from " + this.firstName;
//        }
//    }
//}



//=================================================================
//
//function Person(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//
//    this.sayHii = function () {
//      return "Hii there" + other;
//    };
//}
//
//Object.defineProperty(Person, 'fullname', {
//    enumerable: true,
//    configurable: false,
//    //  writable: true,
//    value: this.firstName +' ' + this.lastName
//   // get: function() { return this.firstName +' ' + this.lastName; }
//});
//
//Person.prototype.sayHii = function () {
//
//};
//
//var janeDoe = new Person('Jane', 'Doe');
//
//console.log(janeDoe instanceof Person);
//
//for (var i in janeDoe) {
//    console.log(i);
//}

//=================================================================
//
//var Person = function(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//}
//
//Object.defineProperties(Person.prototype, {
//    sayHii: {
//        value: function () {
//            return 'Hii there';
//        },
//        enumerable: true
//    },
//    fullName: {
//        get: function () {
//            return this.firstName + ' ' + this.lastName;
//        },
//        enumerable: true
//    }
//});
//
//
//var janeDoe = new Person('Jane', 'Doe');

//=================================================================

//var person = {
//    firstName: 'Jane',
//    lastName: 'Doe'
//}
//
//Object.defineProperty(person, 'fullname', {
//    get: function () {
//        return this.firstName + ' ' + this.lastName;
//    }
//});
//
//var employee = Object.create(person);
//
//person.sayHii = function () {
//  return 'Hii there ';
//};
//
//employee.sayHii = function () {
//    return this.__proto__.sayHii()+ this.fullname;
//};
//
//var employee = Object.create(person,{
//    sayHii:{
//        value: function () {
//            return this.__proto__.sayHii()+ this.fullname;
//        }
//    }
//});

//=================================================================


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Object.defineProperties(Person.prototype, {
    sayHii: {
        value: function () {
            return 'Hii there';
        },
        enumerable: true
    },
    fullName: {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: true
    }
});

function Employee(firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;

}

Employee.prototype = Object.create(Person.prototype,{
    sayHii: {
        value: function () {
            return Person.prototype.sayHii.call(this)+' My name is '+this.fullName;
        },
        enumerable: true
    },
    fullName: {
        get: function () {
            var desc = Object.getOwnPropertyDescriptor(Person.prototype, "fullName");
            return desc.get.call(this) + ", "+ this.position;
        },
        enumerable: true
    }
});

var joneDoe = new Employee('Jone', 'Doe', 'Manager');