const { Client, MessageEmbed } = require ("discord.js") // require the discord.js wrapper
const client = new Client({
  intents: ["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]
}) // Declare client to be a new Discord Client (bot)
/*
Code Below provides info about the bot 
once it's ready
*/
client.once("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by ZeroSync https://www.youtube.com/c/ZeroSync\n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
});
/* Client when detects a message 
then execute the code */
client.on("messageCreate", async message => {
  if (message.content.startsWith("!ping"))
  {
    message.reply(`The client websocket latency is **${client.ws.ping}ms** (values in milliseconds)`)
  }
  if (message.content.startsWith("!add"))
  {
   client.emit("guildMemberAdd", message.member)
  }
});
/* Client when detects 
a new member join */
client.on("guildMemberAdd", async (member) => {
  const guild = member.guild;
  // exclude channel search in all other guilds
  let channel = guild.channels.cache.find(c => c.name === 'welcome')
  let welcome = new MessageEmbed()
  .setTitle('New User Has Joined!')
  .setDescription(`Welcome To Our Server ${member.user} we are happy to have you! you are member number ${guild.memberCount}!`)
  .setColor('#2F3136')
  .setThumbnail(member.displayAvatarURL({
    dynamic: true,
  }))
  .setTimestamp()
  .setFooter('Thanks For Joining!')
  if(!channel) return console.log("You do not have a channel called welcome, please make one or set the name of the channel in line 27 of the code.")
  channel?.send({
    embeds: [welcome]
  })
})
client.login("BotTokenHere"); // Login with the token make sure to add it when starting the bot