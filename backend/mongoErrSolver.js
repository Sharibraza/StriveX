
function mongoConnErrSolver() { 
    const dns = require('dns');
    dns.setDefaultResultOrder('ipv4first'); // optional 
    dns.setServers(['8.8.8.8','1.1.1.1']);  // it is must
}

module.exports = mongoConnErrSolver;