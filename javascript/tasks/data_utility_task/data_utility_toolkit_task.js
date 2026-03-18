const users = [{
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"]
}, {
    id: 102,
    name: "mariasmith",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"]
}, {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"]
}];
titled_array=[]
function titled_string(name_string) {
    new_array=[]
    name_string = name_string.trim()
    array = name_string.split(" ")
    for (let name of array) {
        name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
        new_array.push(name)
    }
    valid_name_string = new_array.join(" ")
    return valid_name_string   
}
for (let user of users) {
    titled_array.push(titled_string(user["name"]))
}
console.log(titled_array)

