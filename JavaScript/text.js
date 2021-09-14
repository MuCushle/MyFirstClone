var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var curLine = 1;
rl.on('line',function(line){
    var isPerfect = function(n){
        var str = n.toString();
        var m = str.split('');
        var flag = 1;
        for(let i = 0;i<m.length;i++){
            if(parseInt(m[i])>3 || parseInt(m[i])<1){
                flag = 0;
            }
        }
        return flag;
    }
    if(curLine>=2){
        var n1 = parseInt(line);
        while(isPerfect(n1)!=1){
            n1=n1-1;
        }
        console.log(n1);
    }
    curLine++;
})