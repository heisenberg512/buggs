const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .addField("Roll", " t.roll (Rolls a dice)")
  .addField("eans", " t.eans [proof] sends your screenshot/proof to event officers")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "t.avatar, +avatar [user] send the avatar of author or the user tagged to channel")
  .addField("info", "displays information about the bot.")
  .setColor("#FF2112");

  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
