var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var count = 0;
var map = new Map();
var tokens = [];

rl.on('line', function(line){
    
    var path = line.split("\\");
    parse
    var name = path[path.length-1];
    if(map.has(name)){
        tokens[map.get(name)][1]++;
    } else {
        tokens.push([name,1,count]);
        map.set(name,tokens.length-1);
    }
    count++;

});
rl.on('close', function() {
    tokens.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[2] - b[2];
        }
        else return b[1] - a[1];
    })
 
    for (let i=0; i<tokens.length && i<8; i++) {
        let filename = tokens[i][0].split(" ")[0];
        let col = tokens[i][0].split(" ")[1];
        if (filename.length > 16){
            filename = filename.substr(-16,16);
        }
 
        process.stdout.write(filename+" "+col+" "+tokens[i][1]+"\n");
 
    }
    process.exit(0);
});