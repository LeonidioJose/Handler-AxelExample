const Base = require("../../modules/AxelCommands/Commands")

module.exports = class info extends Base {
    constructor(client) {

        super(client,{
            aliases: ['latencia','latência'],
            name: 'ping'
        })
    }

    async run(msg, args) {
        msg.channel.send(this.client.ws.ping)
    }
}