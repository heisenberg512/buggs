const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .addField("Roll", " t.roll (Rolls a dice)")
  .addField("eans", " t.eans [proof] sends your screenshot/proof to event officers")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "t.avatar, +avatar [user] send the avatar of author or the user tagged to channel")
  .addField("info", "displays information about the server.")
  .addField("stats", "displays the date you joined this server") 
  .setColor(botconfig.green);

  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
