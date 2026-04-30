"use strict";
//Basics Types
//.Primitive Types (Number,Strings,Boolean)
//.Arrays
//.Tuples
//.Enums
//.any ,unknown ,void ,never,Null,Undefined
//Primitive Types
let a = 12;
let b = "Hello World";
let c = true;
//Array
let arr = [1, 2, 3, 4, "roshan", { name: "roshan" }];
//Tuples
let arr2 = ["roshan", 12];
//Enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["User"] = "User";
    UserRoles["Guest"] = "Guest";
})(UserRoles || (UserRoles = {}));
//when you type UserRoles. you will get the options Admin,User,Guest used for role based access control in applications
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
//Any
let value; //in short if the variable is declared without a type and without an initial value, it is of type any by default
value = 12;
value = "Hello";
value.toUpperCase(); //No error because any type allows any operations without type checking
//unknown
let valu2;
valu2 = 12;
valu2 = "Hello";
//valu2.toupperCase(); Error because unknown type does not allow any operations without type assertion
//Void
function example() {
    console.log("This function does not return anything");
}
function example2() {
    console.log("This function returns a number");
    return 12;
}
//Null
let nullValue = null;
//nullValue = 12; Error because null type can only be assigned null
//undefined
let undefinedValue;
//never
function abcd() {
    while (true) {
        console.log("This function never returns");
    }
}
abcd();
console.log("This will never be executed"); //Error because code after a function that never returns is unreachable
//type inference and type annotations
let num = 12; //inferenced as number
let str = "Hello"; //type annotation
function createUser(obj) {
    //obj. then you will get the properties name,email,password with type checking
}
createUser({ name: "roshan", email: "roshan@example.com", password: "password123" });
function sample(obj) {
    //obj. then you will get the properties name,email,password,role with type checking
}
let h = 12; //h is of type number because sankhya is a type alias for number
//unio and intersection types
let value3; //union type can be either number or string
