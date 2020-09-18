const { error } = require("console")

const { readdir } = require("fs")
const { resolve } = require("path")

module.exports = (client) => {
  if(typeof client == 'undefined') throw new error("Você deve informar o client")

  readdir(resolve(__dirname,`../commands/`), (err, CategoryFile) => {
      CategoryFile.forEach(category => {
          readdir(resolve(__dirname,`../commands/${category}/`),(er, cmdFile) => {
              cmdFile.forEach(cmd => {
                  let requestFile = require(`../commands/${category.toString()}/${cmd.toString()}`)

                  let cmdsName = cmd.split(".")[0]

                  client.cmds.set(cmdsName,requestFile)
                  client.commandsArray.push(cmdsName)

                  let cmdP = new requestFile(client)

                  cmdP.help.aliases.forEach(alias => {
                      client.aliases.set(alias, cmdsName)
                  })
              })
          })
      })
  })
}
