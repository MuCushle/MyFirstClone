var str = "\"ac\"bdefg";

var re = new RegExp("\"","g");

var str2 = str.replace(re,'\'');

console.log(str2);