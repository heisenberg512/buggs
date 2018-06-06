const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .setTitle("Commands")
  .addField("Roll", " t.roll (Rolls a dice)")
  .addField("nickname", "set a different nickname for users")
  .addField("doggy", "sends random picture of doggy everytime user enters the command")
  .addField("avatar", "sends the avatar of author or the user tagged to channel")
  .addField("info", "displays information about the server.")
  .addField("stats", "displays the date you joined this server")
  .addField("weather", "displays weather forcast of the location entered")
  .setColor(botconfig.green);

  message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
