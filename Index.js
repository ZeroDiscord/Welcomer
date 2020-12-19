const Discord = require ("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`${client.user.tag} is now online!`);});
  client.on("message", async message => {
    if(message.content.startsWith('!ping'))
 { return message.channel.send (` Your Ping is ${client.ws.ping}ms`)
 }
  });
  client.on("guildMemberAdd", async member=> {
    let channel = member.guild.channels.cache.find("OURCHANNELID")
    let embed = new Discord.MessageEmbed()
    .setTitle(`New User Has Joined!`)
    .setDescription(`Hello, and welcome ${member.user.tag} We are happy to have you, now our server has ${member.guild.memberCount} users!`)
    .setTimestamp()
    .setColor('BLUE')
    .setFooter('Welcome To Our Server')
  
  })
  
client.login("Nzg4NjYyMDE2MjM4ODEzMjM0.X9mwvQ.KREGoC06Eh8XY4czBwY8qLtMZmU")
