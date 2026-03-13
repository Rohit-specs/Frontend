let current_datetime = new Date()
months_list = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
days_list = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]

let year = current_datetime.getFullYear()
let month = current_datetime.getMonth()
let date = current_datetime.getDate()
// let hour = ((current_datetime.getHours()+1)/2<=12)?`${current_datetime.getHours()+1}`:`${(((current_datetime.getHours())/2)-1)}`;
let hour;
if (!(current_datetime.getHours()%12)){
    hour = 12
}
else{
    hour = current_datetime.getHours()%12
}
let minutes = current_datetime.getMinutes()
let seconds = current_datetime.getSeconds()
let meridiem = ((current_datetime.getHours()+1)/2<=12)?"PM":"AM";
let day = current_datetime.getDay()
let current_date = `Date: ${date}/${months_list[month]}/${year}`;
let current_time = `Time: ${hour}:${minutes}:${seconds} ${meridiem}`
let current_day = `Day: ${days_list[day]}`
let result = `${current_date}   ${current_time}   ${current_day}`
console.log(result)