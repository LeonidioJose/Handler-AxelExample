module.exports.run = async(client, msg) => {
   
    let prefix =  "!!"

    if (msg.channel.type !== 'text') return

    if (!msg.content.startsWith(prefix)) return
  
  
    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLocaleLowerCase()
  
    const cmd = client.cmds.get(command) || client.cmds.get(client.aliases.get(command))

    let _cmd = new cmd(client)

    _cmd.run(msg,args)
  
}