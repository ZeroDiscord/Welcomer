const Discord = require ("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`${client.user.tag} is now online!`);
});
client.on("message", message => {
  if (message.content.startsWith("!ping")){
    message.channel.send(`${client.ws.ping} is your bot latency`)
  }
  client.on("guildMemberAdd", async member=> {
    let channel = member.guild.channels.cache.get('788663173255135273');
    let welcome = new Discord.MessageEmbed()
    .setTitle('New user has joined!')
    .setDescription(`Hello there ${member.user.username} Welcomer to our awesome server! now we have ${member.guild.memberCount} members, woah!`)
   channel.send(welcome)
  })
})
client.login("Nzg4NjYyMDE2MjM4ODEzMjM0.X9mwvQ.KREGoC06Eh8XY4czBwY8qLtMZmU")
