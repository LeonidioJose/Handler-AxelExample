module.exports = class Commands {
    constructor(client, config) {
        this.client = client

        if(!config.name) throw new error(`Nenhum nome foi citado.`)

        this.help = {
            aliases: config.aliases || [],
            cooldown: config.cooldown || '3s',
            name: config.name
        }
    }
}