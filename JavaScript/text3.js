var readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var curLine = 1;
var map = new Map();
var tokens = [];
rl.on('line',function(line){
    tokens.push(line);
    if(curLine == 2){
        var n = tokens[0].split(' ')[0];
        var m = tokens[0].split(' ')[1];
        var a = tokens[1].split(' ');
        for(let i=0;i<m;i++){
            if(!map.has(a[i])){
                map.set(a[i],1);
            } else {
                map.set(a[i],map.get(a[i])+1);
            }
        }
        if(map.size<n){
            console.log(0);
        } else {
            var foods = [];
            let j=0;
            for(let value of map.values()){
                foods[j] = value;
                j++;
            }
            foods.sort(function(a,b){
                return b-a;
            });
            var l=0,r=n;
            var day = 0;
            var t = 2;
            while(l<r){
                while(foods[l]/t>=foods[l+1]){
                    day = Math.min(foods[l]/t,foods[r-1]);
                    r--;
                    t++;
                }
                l++;
                t=2;
            }
            console.log(day);
        }
    rl.close();
    }
    curLine++;
});

rl.on('close',function(){
    process.exit(0);
})