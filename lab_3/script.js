function printresult(value){
    console.log(value);
}

/* function calc(num1, num2, callback){
    let sum= num1 + num2;
    callback(sum);
}
calc(2,5,printresult);
*/

// Asynchronous
/* function printHello(){
    console.log("hello");
}
setTimeout(printHello,3000);
*/

setInterval(dateShow, 1000);

function dateShow() {
    let date = new Date(); // Fixed: Changed 'new date()' to 'new Date()'
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // Add leading zeros for better formatting
    hour = String(hour).padStart(2, '0');
    minute = String(minute).padStart(2, '0');
    second = String(second).padStart(2, '0');

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
}
