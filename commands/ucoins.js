const Discord = require("discord.js");
const coins = require("../coins.json");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
  let organizer = message.guild.roles.find("name", "Event Organizer");
if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission denied");
   let uUser = message.mentions.users.first()

  let Ucoins = coins[uUser.id].coins;

  let Uembed = new Discord.RichEmbed()
  .setAuthor(uUser.username)
  .setThumbnail(uUser.avatarURL)
  .addField("Coins", Ucoins)
  .setColor(botconfig.orange)
  .setTimestamp();

  message.delete();
  message.channel.send(Uembed);
}


module.exports.help = {
  name: "ucoins"
}
