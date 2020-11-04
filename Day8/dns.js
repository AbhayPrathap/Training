const { spawnSync } = require('child_process');
const dns = require('dns');

dns.lookup(
    'www.google.com',(err, address)=>{
        console.log('add',address)
    }
)