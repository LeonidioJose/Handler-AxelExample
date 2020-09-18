let request = require("./src/Axel")

const Axel = new request({
    fetchAllMembers: true
})

Axel.initLoaders().then(a => console.log('[LOADERS] Loaders carregado'))
Axel.initDatabase().then(a => console.log('[DATABASE] Database conectada ao firebase'))