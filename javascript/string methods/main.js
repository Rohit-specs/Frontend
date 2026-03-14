// string method = allow you to manipulate and work with text (string)

let username = "Rohit559";
console.log(username.indexOf("5"))
console.log(username.lastIndexOf("5"))
console.log(username.charAt(0))
console.log(username.length);
username = "    Rohit559";
console.log(username.trim())
username = "Rohit559";
console.log(username.toLowerCase())
console.log(username.toUpperCase())
console.log(username.repeat(3))
console.log(username.startsWith('r'))
console.log(username.endsWith('9'))
console.log(username.includes("i"))

let phoneNumber = "123-456-7890";

console.log(phoneNumber.replaceAll("-",""));
console.log(phoneNumber.padStart("15","0"));
console.log(phoneNumber.padEnd("15","0"));