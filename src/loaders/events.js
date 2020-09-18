const { readdir } = require("fs")
const path = require("path")

module.exports = (client) => {
  readdir(path.resolve(__dirname, "../events/"), (err, e) => {
    if (err) console.error(err)
    e.forEach(eJ => {
      readdir(path.resolve(__dirname, `../events/${eJ}`), (er, even) => {
        even.forEach(eventJ => {
          let eFunction = require(`../events/${eJ}/${eventJ}`)

          let eName = eventJ.split(".")[0]

          console.log("Evento carregado: " + "\x1b[33m%s\x1b[0m", eventJ)

          client.on(eName, (...args) => eFunction.run(client, ...args))
        })
      })
    })
  })
}