const os = require('os'); // informações do sistema 
setInterval(()=>{
    const {freemem, totalmem} = os // Desestruturação de objetos, como criar variaveis de forma mais moderna
    const total = parseInt(totalmem()/ 1024 / 1024)
    const mem = parseInt(freemem()/ 1024 / 1024)
    const percents = parseInt((mem / total) * 100)


    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    console.clear()
    console.log('====== PC Stats =======')
    console.table(stats)
}, 1000)
