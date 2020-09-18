const config = {
    aliases: ['teste'],
    name: 'test'
}

const Base = require("../../modules/AxelCommands/Commands")

module.exports = class test extends Base {
    constructor(client) {
        super(client, config)

        this.client = client
    }

    async run(msg, args) {
        msg.channel.send('teste')

        msg.channel.send(this.client.guilds.cache.size)
    }
}