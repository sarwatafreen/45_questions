"use strict";
// Task 1
console.log("Hello World!");
// Task 2
let personName = "ERIC";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// Task 3
let person_Name = "Eric";
// Lowercase
console.log("Lowercase:", person_Name.toLowerCase());
// Uppercase
console.log("Uppercase:", person_Name.toUpperCase());
// Titlecase
console.log("Titlecase:", person_Name.replace(/\b\w/g, c => c.toUpperCase()));
// Task 4
let author = "Elbert Einstien once said";
let quote = "“A person who never made a mistake never tried anything new.”";
console.log(`${author}, ${quote}`);
//Task 5
let Author = "Albert Einstein once said";
let Quote = "“A person who never made a mistake never tried anything new.”";
let message = `${author}, ${quote}`;
console.log(message);
//Task 6
let personname = '\n\t ERIC \t\n';
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//Task 7
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//Task 8
let favoriteNumber = 28;
console.log(`My favourite number is ${favoriteNumber}`);
//Task 9 
//exercise 10
//my name is Muhammad Ashar
//Date:08/04/2024
//this program will run simple code hello world 
console.log('hello world simple program');
//Task 10
let member = ['Eric', 'Cornel', 'Azhar', 'sara', 'saba',];
for (let i = 0; i < member.length; i++) {
    console.log(member[i]);
}
//Task 11
let Member = ['Ashar', 'ALI', 'alzia', 'sara', 'usman',];
for (let i = 0; i < member.length; i++) {
    console.log(member[i]);
}
//Task 12
let memBer = ['anabiya', 'Ashar', 'aliza', 'Usman', 'sabail',];
let _message = 'Have a nice day! ';
for (let i = 0; i < member.length; i++) {
    console.log(_message + memBer[i]);
}
//Task 13
let tranportation = ['toyota car', 'honda car', 'suzuki car',];
for (let i = 0; i < tranportation.length; i++) {
    console.log('I Would like to own a ' + tranportation[i] + "!");
}
//Task 14
let GuestList = ['anaya', 'anas', 'ali', 'ahmed',];
GuestList.forEach(oneGuest => console.log(`Asalam u Alaikum ${oneGuest} You are invited for dinner at my home`));
//Task 15
let GUestList = ['anaya', 'anas', 'Ureeda', 'ahmed',];
let notcome = GUestList[0];
console.log(notcome, `: my english paper would be held tommorow so ,I not attend your party, Thanks`);
GUestList.splice(0, 1, "noman");
GUestList.forEach(GUest => console.log(`Asalam u Alaikum ${GUest} You are invited for dinner at my home`));
//Task 16
let Guest_List = ['anaya', 'anas', 'Ureeda', 'ahmed',];
let not_come = GuestList[0];
console.log(notcome, `: my english paper would be held tommorow so ,I not attend your party, Thanks`);
Guest_List.splice(0, 1, "noman");
console.log("Good news ,I have found a bigger table for dinner!");
Guest_List.unshift("Ali");
Guest_List.push("Zain");
let middleindex = Math.floor(Guest_List.length / 2);
Guest_List.splice(middleindex, 0, "Osama");
console.log("GuestList Updated");
GuestList.forEach(Guest => console.log(`Asalam u Alaikum ${Guest} You are invited for dinner at my home`));
// Task 17
let _GuestList = ['anaya', 'ahmed', 'noman', 'ali',];
let _notcome = GuestList[0];
console.log(notcome, `: my english paper would be held tommorow so ,I not attend your party, Thanks`);
_GuestList.splice(0, 1, "ayan");
console.log("Good news ,I have found a bigger table for dinner!");
_GuestList.unshift("anas");
_GuestList.push("Zain");
let middle_index = Math.floor(Guest_List.length / 2);
Guest_List.splice(middleindex, 0, "Osama");
console.log("GuestList Updated");
GuestList.forEach(Guest => console.log(`Asalam u Alaikum ${Guest} You are invited for dinner at my home`));
console.log("Unfortunetly!, The bigger table hasn't arrived on time ,so I can invite only two guests");
while (Guest_List.length > 2) {
    let removedguests = GuestList.pop();
    console.log(`sorry ${removedguests} I cannot invite you in dinner`);
}
console.log("Invitations for last to guests");
Guest_List.forEach(lasttwo => console.log(`Luckly! ${lasttwo}, You are still invited to dinner`));
Guest_List.pop();
Guest_List.pop();
console.log("empty list:", Guest_List);
//Task 18
let places = ['multan', 'lahore', 'rohtas fort', 'moenjodare', 'fairy meadows'];
console.log('origional' + 'places');
console.log('copy' + [...places].sort());
console.log('origional' + 'places');
console.log('copy' + [...places].sort().reverse());
console.log('copy' + [...places].sort().reverse());
console.log('origional' + places.sort());
console.log('origional' + places.sort().reverse());
//Task 19
//Importing guestlist form exercise 14
let Guestlist = ['anaya', 'ahmed', 'ashar', 'aniqa',];
console.log('printing message indicating number of guest');
console.log(`we had finally invited ${Guestlist} guests in execise 14`);
//Task 20 
let Places = ['multan', 'lahore', 'rohtes fort'];
let mountains = ['Kangchenjunga', 'Annapurna', 'k2'];
let countries = ['Afghanistan', 'Albania', 'Algeria'];
let river = ['Abakan River', 'Indus River', 'Dasht River'];
let languages = ['aari', 'aasax', 'abaza'];
console.log(places, mountains, countries, river, languages);
// create two objects
const book = {
    name: 'ESSENTIAL TYPESCIPT',
    price: 1250
};
const ball = {
    name: 'ball',
    price: 4000
};
console.log(`book name:${book.name},price:${book.price}`);
console.log(`ball name:${ball.name},price:${ball.price}`);
const items = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Bookshelf", category: "Furniture", price: 200 },
    { name: "Coffee Maker", category: "Appliances", price: 100 },
    { name: "Running Shoes", category: "Clothing", price: 80 },
    { name: "Headphones", category: "Electronics", price: 100 }
];
console.log("List of Items:");
items.forEach(item => {
    console.log(`Name: ${item.name}, Category: ${item.category}, Price: $${item.price}`);
});
//Task 23
let x = 5;
let y = 10;
let z = "Hello";
let a = true;
let b = false;
// Test 1: Check if x is equal to 5
console.log("Is x equal to 5? I predict True.");
console.log(x === 5); // True
// Test 2: Check if y is greater than 15
console.log("Is y greater than 15? I predict False.");
console.log(y > 15); // False
// Test 3: Check if z is equal to "Hello"
console.log("Is z equal to 'Hello'? I predict True.");
console.log(z === "Hello"); // True
// Test 4: Check if a is equal to b
console.log("Is a equal to b? I predict False.");
console.log(a === true); // False
// Test 5: Check if x is less than or equal to 5
console.log("Is x less than or equal to 5? I predict True.");
console.log(x <= 5); // True
// Test 6: Check if y is not equal to 10
console.log("Is y not equal to 10? I predict False.");
console.log(y !== 10); // False
// Test 7: Check if z is equal to "hello" (with lowercase 'h')
console.log("Is z equal to 'hello'? I predict False.");
console.log(z === "hello"); // False
// Test 8: Check if a is equal to true
console.log("Is a equal to true? I predict True.");
console.log(a === true); // True
// Test 9: Check if b is equal to true
console.log("Is b equal to true? I predict False.");
console.log(b === false); // False
// Test 10: Check if x is greater than 3 and less than 8
console.log("Is x greater than 3 and less than 8? I predict True.");
console.log(x > 3 && x < 8); // True
//Task 24
// Tests for equality and inequality with strings
let string1 = "hello";
let string2 = "world";
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2); // False
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2); // True
// Tests using the lower case function
let str1 = "HELLO";
let str2 = "hello";
console.log("Is str1 in lowercase equal to str2? I predict True.");
console.log(str1.toLowerCase() === str2); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2); // False
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2); // True
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2); // False
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2); // False
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
let age = 25;
let hasLicense = true;
console.log("Is the age greater than 18 and has a license? I predict True.");
console.log(age > 18 && hasLicense); // True
console.log("Is the age less than 18 or has a license? I predict True.");
console.log(age < 18 || hasLicense); // True
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple')); // True
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape')); // True
//Task 25
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
let alienColor = 'red';
if (alienColor === 'green') {
    console.log("The player just earned 7 points.");
}
//Task 26
let Alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
let aliencolor = 'red';
if (alienColor === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
//Task 27
let alien_Color = 'green';
if (alien_Color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_Color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_Color === 'red') {
    console.log("The player earned 15 points.");
}
let alien__Color = 'yellow';
if (alien__Color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien__Color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien__Color === 'red') {
    console.log("The player earned 15 points.");
}
let alien_c_olor = 'red';
if (alien_c_olor === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_c_olor === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_c_olor === 'red') {
    console.log("The player earned 15 points.");
}
//Task 28
let _age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Task 29
let favorite_fruits = ['apple', 'banana', 'orange', 'grapes'];
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('grapes')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
//Task 30
let usernames = ['admin', 'alice', 'bob', 'charlie', 'dave'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Task 31
let user_names = [];
// Check if the list of users is not empty
if (user_names.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user_name of user_names) {
        if (user_name === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user_name}, thank you for logging in again.`);
        }
    }
}
//Task 32
let current_users = ['john', 'alice', 'bob', 'charlie', 'dave'];
let new_users = ['eric', 'john', 'mike', 'charlie', 'sarah'];
for (let new_username of new_users) {
    // Convert both the new username and current usernames to lowercase for case insensitive comparison
    let lowercase_new_username = new_username.toLowerCase();
    // Check if the lowercase version of the new username is already in the current usernames
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_username)) {
        console.log(`Sorry, ${new_username} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! ${new_username} is available.`);
    }
}
//Task 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Task 34
let favorite_pizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
// Print the names of each pizza
console.log("Names of my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}
// Print a sentence for each pizza
console.log("\nSentences about my favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Print additional sentence
console.log("\nI really love pizza!");
//Task 35
let animal = ["dog", "cat", "donkey"];
animal.forEach(animal => {
    console.log(` my favourtie animal is ${animal} `);
});
console.log(`A ${animal} would make a great pet`);
//Task 36
function Make_Shirt(size = 'large', message = 'i love typescript') {
    console.log(`Creation a ${size}shirt with the message:"${message}"`);
}
Make_Shirt();
Make_Shirt('medium');
Make_Shirt('small', "hello,world!");
//Task 37
function make_Shirt(size = 'large', message = 'i love typescript') {
    console.log(`Creation a ${size}shirt with the message:"${message}"`);
}
make_Shirt();
make_Shirt('medium');
make_Shirt('small', "hello,world!");
//Task 38
function describeCity(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("Tokyo", "Japan");
describeCity("Paris", "France");
//Task 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function for three different city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//Task 40
function makeAlbum(artistName, albumTitle, tracks) {
    const album = {
        artist: artistName,
        title: albumTitle
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three objects representing different albums
const album1 = makeAlbum("Ed Sheeran", "Divide");
const album2 = makeAlbum("Taylor Swift", "1989", 16);
const album3 = makeAlbum("Adele", "25", 11);
// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//Task 41
let _Magicians = ["Famous Magician", "Harry Houdini", "David Blaine"];
function show_magicians(_Magicians) {
    _Magicians.forEach(_Magician => {
        console.log(_Magician);
    });
}
show_magicians(_Magicians);
//Task 42
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great magician";
    }
}
let Magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
console.log("Original list of magicians:");
showMagicians(Magicians);
makeGreat(Magicians);
console.log("\nModified list of magicians:");
showMagicians(Magicians);
//Task 43
function show_Magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_Great(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
let magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
console.log("Original list of magicians:");
show_Magicians(magicians);
let great_Magicians = make_Great([...magicians]); // Creating a copy of the original array
console.log("\nList of magicians with 'the Great' added:");
show_Magicians(great_Magicians);
//Task 44
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Calling the function three times with a different number of arguments each time
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss cheese", "Avocado");
makeSandwich("Peanut butter", "Jelly");
//Task 45
function storeCarInfo(manufacturer, modelName, ...extras) {
    const carInfo = {
        manufacturer: manufacturer,
        model: modelName
    };
    for (const [key, value] of extras) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Calling the function with required information and two other name-value pairs
const car = storeCarInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
// Printing the object to verify all information was stored correctly
console.log(car);
///////////////////////////////  /THE END/   ////////////////////////////////
