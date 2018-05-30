const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let organizer = message.guild.roles.find("name", "Head Event Organizer");
  if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission Denied").then(msg => msg.delete(5000));
  let msg = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(msg);

//   let pmChannel = message.guild.channels.find(`name`, "terrorists-camp");
// pmChannel.send(msg);
}

module.exports.help = {
  name: "say"
}
