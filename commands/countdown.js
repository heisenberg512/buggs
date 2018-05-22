const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let countdownEmbed = new  Discord.RichEmbed()
  .addField("Countdown", "You have 30 minutes to complete the event")
  .setColor("#02FF00");

 message.channel.send(countdownEmbed).then(msg => msg.delete(300000));
}


module.exports.help = {
  name: "countdown"
}
