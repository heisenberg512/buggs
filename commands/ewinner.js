const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{
  let euser = message.mentions.users.first();
  let organizer = message.guild.roles.find("name", "Event Organizer");
if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission denied");

  let winnerEmbed = new Discord.RichEmbed()
  .setDescription("Event Winner")
  .setColor("#ffe83d")
  .addField("We have a winner", `${euser.username} Congratulation, stay tuned for more`)
  .setThumbnail(euser.displayAvatarURL)
  .setTimestamp();


  let winnerchannel = message.guild.channels.find(`name`, "terrorists-camp");
  winnerchannel.send(winnerEmbed);

}

module.exports.help = {
  name: "ewinner"
}
