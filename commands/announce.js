const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let organizer = message.guild.roles.find("name", "Event Organizer");
  if(!message.member.roles.has(organizer.id)) return message.channel.send("Permission denied");
   if(!args[0] || args[0 == "help"]) return message.reply("Usage: t.gcoin <user> <amount> ");
  let auser = message.mentions.users.first();
  let text = args.slice(1).join(" ");


  let aEmbed = new Discord.RichEmbed()
  .addField("💰💰 Prize Alert 💰💰", `${auser} has been awarded ${text} coins for winning the event`)
  .setColor("12FF21")
  .setFooter("To check how much coins you have write t.coins", auser.avatarURL)
  .setTimestamp();


  message.delete();
  message.channel.send(aEmbed).then(msg => msg.delete(1000000));
  auser.send(`You have been given ${text} coins for winning the event`);
  auser.send("------------Don't reply to this message-------------");
}


module.exports.help = {
  name: "ann"
}
