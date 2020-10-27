const { Client, Collection } = require("discord.js")

module.exports = class bot extends Client {
    constructor(...args) {
        super(...args)

        this.client = this

        this.client.login(require("./config/config.js").token)

        var CollectionArray = ['aliases','cmds']
        var ArrayArray = ['commandsArray','aliasesArray']

        for(let num in CollectionArray) {
            let result = CollectionArray[num]

            this.client[result] = new Collection()
        }

        for(let _ in ArrayArray) {
            let result = ArrayArray[_]

            this.client[result] = []
        }
    }

    async initLoaders() {
        var array = ["commands","events"]

        for(let num in array) {
            let result = array[num]

            require(`./loaders/${result}`)(this.client)
        }

    }

    async initDatabase() {
        require("./db/firebase.js")()
    }

}
