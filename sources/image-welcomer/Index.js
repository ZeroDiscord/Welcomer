const Discord = require('discord.js')
const canvas = require('discord-canvas'),
    welcomeCanvas = new canvas.Welcome(),
    leaveCanvas = new canvas.Goodbye()

const {
    token,
    PREFIX,
    unicolor,
    imageLink,
    channel
} = require('./config.json')
let universalColor = unicolor.toUpperCase()

const client = new Discord.Client()

client.on('ready', () => {
console.log(`[STATUS] ${client.user.tag} is now online!\n[CREDITS] Credits to KoolWiza for the image-welcome.\n[INFO] Bot by ZeroSync https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ\n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
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
client.login("BOTTOKENHERE"); // Login with the token make sure to add it when starting

})

client.on('guildMemberAdd', async member => {
    let image = await welcomeCanvas
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount(member.guild.memberCount)
        .setGuildName(member.guild.name)
        .setAvatar(member.user.displayAvatarURL({
            format: 'png'
        }))
        .setColor("border", universalColor)
        .setColor("username-box", universalColor)
        .setColor("discriminator-box", universalColor)
        .setColor("message-box", universalColor)
        .setColor("title", universalColor)
        .setColor("avatar", universalColor)
        .setBackground(imageLink)
        .toAttachment()


    let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");

    member.guild.channels.cache.find(c => c.id === channel).send(attachment)
})

client.on('guildMemberRemove', async member => {
    let image = await leaveCanvas
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator)
        .setMemberCount(member.guild.memberCount)
        .setGuildName(member.guild.name)
        .setAvatar(member.user.displayAvatarURL({
            format: 'png'
        }))
        .setColor("border", universalColor)
        .setColor("username-box", universalColor)
        .setColor("discriminator-box", universalColor)
        .setColor("message-box", universalColor)
        .setColor("title", universalColor)
        .setColor("avatar", universalColor)
        .setBackground(imageLink)
        .toAttachment()


    let attachment = new Discord.MessageAttachment(image.toBuffer(), "leave-image.png");

    member.guild.channels.cache.find(c => c.id === channel).send(attachment)
})

client.on('message', async message => {
    if (message.content === "add") {
        client.emit('guildMemberAdd', message.member)
    }

    if (message.content === "leave"){
        client.emit('guildMemberRemove', message.member)
    }
})





client.login(token)
