const Discord = require("discord.js"); // require the discord.js wrapper
const client = new Discord.Client(); // Declare client to be a new Discord Client (bot)

const newUsers = []; // a blank array for storing the newUser data

// Code Below provides info about the bot once it's ready
client.on("ready", () => {
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by ZeroSync https://www.youtube.com/channel/UCF9E-xef9jL9QgziZRDHKKQ\n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
});

//Client when detects a message then execute the code
client.on("messageCreate", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send({
      content: `My ping is \`${client.ws.ping}ms\`!`
    });
  }
});

// Client when detects a new member join */
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  // Below states if the members who joined are more than 5 in value then execute the following code to welcome all 5 together (can be set to any integral value (1,2,3,etc.)
  if (newUsers[guild.id].size > 5) {
    const userlist = newUsers[guild.id].map(userlist => userlist.toString()).join(" ");
    guild.channels.find(channel => channel.name === "welcome").send({
      embeds: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "This is an embed",
        description: userlist
      }
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

client.login("bot-token-here"); // Login with the token make sure to add it when starting