let process = require('process')
let os = require('os')
let fs = require('fs')

console.log('\x1b[31m%s\x1b[0m', 'For details please use "node cli.js help"');

let help = fs.readFileSync('help.txt', 'utf-8') 
if (process.argv[2] === 'help'){
    console.log('\x1b[36m%s\x1b[0m', help)
    console.log('\x1b[35m%s\x1b[0m', 'Please use "node cli.js abort" to exit' )
}

if (process.argv.length > 3) {
    console.log('\x1b[32m%s\x1b[0m', "Please enter one event for each query")
} else {
    switch (process.argv[2]){
        case 'arch':
            console.log("\x1b[35m%s\x1b[0m",process.arch);
            break;
        case 'cpu':
            console.log(os.cpus());
            break;
        case 'platform':
            console.log("\x1b[35m%s\x1b[0m",os.platform());
            break;
        case 'type':
            console.log("\x1b[35m%s\x1b[0m",os.type());
            break;
        case 'node':
            console.log("\x1b[35m%s\x1b[0m",process.argv[0]);
            break;
        case 'file':
            console.log("\x1b[35m%s\x1b[0m",process.argv[1]);
            break;
        case 'up':
            console.log(os.uptime());
            break;
        case 'env':
            console.log(process.env);
            break;
        case 'memory':
            console.log(process.memoryUsage());
            break;
        case 'version':
            console.log("\x1b[35m%s\x1b[0m",process.version);
            break;
        case 'abort':
            process.abort();
        default :
            console.log("\x1b[33m%s\x1b[0m",'Please use Help for commands')
    }
}