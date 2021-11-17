const { Client, MessageEmbed, Collection } = require ("discord.js") // require the discord.js wrapper
const client = new Client({
  intents: ["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]
}) // Declare client to be a new Discord Client (bot)
const newUsers = [] // Declare newUsers to be an empty array
/*
Code Below provides info about the bot 
once it's ready
*/
let limit = 2 // How many users to welcome together
client.once("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by ZeroSync https://www.youtube.com/c/ZeroSync\n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
});
/* Client when detects a message 
then execute the code */
client.on("messageCreate", async message =>{
  if (message.content.startsWith("!ping"))
  {
    message.reply(`The client websocket latency is **${client.ws.ping}ms** (values in milliseconds)`)
  }
  if (message.content.startsWith("!add"))
  {
    message.channel.send(`Added ${message.mentions.users.first()} please add ${limit + 1} users in total`)
   client.emit("guildMemberAdd", (message.guild.members.cache.get(message.mentions.users.first().id)))
  }
});
/* 
Client when detects 
a new member join */
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Collection();
  newUsers[guild.id].set(member.id, member.user);
/* 
Below states if the members who joined are more than limit variable in value then
execute the following code to welcome all limit variable valued members together (can be set to any integral value (1,2,3,etc.)
*/
  if (newUsers[guild.id].size > limit) {
    const userlist = newUsers[guild.id].map(userlist => userlist.toString()).join("\n");
    guild.channels.cache.find(channel => channel.name === "welcome").send({embeds: [
      new MessageEmbed()
      .setTitle("Welcome to the server!")
      .setDescription(`${userlist}`)
      .setColor("#2F3136")
      .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
      .setTimestamp()
    ]
    });
    newUsers[guild.id].clear();
  }
});
/*
When a member leaves clear the cached info from the newUsers array
just to mantain stability lol
*/
client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.login("BotTokenHere"); // Login with the token make sure to add it when starting
