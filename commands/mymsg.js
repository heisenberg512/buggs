const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== "332134348725813248") return message.delete().catch(O_o=>{});
  let msg = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(msg);

//   let pmChannel = message.guild.channels.find(`name`, "terrorists-camp");
// pmChannel.send(msg);
}

module.exports.help = {
  name: "say"
}
