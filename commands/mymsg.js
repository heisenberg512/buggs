const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't do that pal").then(msg => msg.delete(5000));
  let msg = args.join(" ");
  message.delete();
  message.channel.send(msg);

//   let pmChannel = message.guild.channels.find(`name`, "terrorists-camp");
// pmChannel.send(msg);
}

module.exports.help = {
  name: "say"
}
