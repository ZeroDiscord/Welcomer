const Discord = require ("discord.js") // require the discord.js wrapper
const client = new Discord.Client() // Declare client to be a new Discord Client (bot)
/*
Code Below provides info about the bot 
once it's ready
*/
client.once("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by ZeroSync https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ\n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
});
/* Client when detects a message 
then execute the code */
client.on("message", async message =>{
  if (message.content.startsWith("!ping"))
  {
    message.channel.send(`The client websocket latency is ${client.ws.ping}ms (values in milliseconds)`)
  }
});
/* Client when detects 
a new member join */
client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === 'welcome')
  let WELCOME = new Discord.MessageEmbed()
  .setTitle('New User Has Joined!')
  .setDescription(`Welcome To Our Server ${member.user} we are happy to have you! you are member number ${member.guild.memberCount}!`)
  .setColor('BLUE')
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setFooter('Thanks For Joining!')
  channel.send(WELCOME)
})
client.login("ODIxNjkzMTE2NDU3MTU2NjA4.YFHbWQ.Ml92hJiYANNIIeOY5Li5tiufqvM"); // Login with the token make sure to add it when starting
