const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setColor("#ce0c5a")
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField("Created At", message.guild.createdAt)
    .addField("Region", message.guild.region)
    .addField("Members", message.guild.memberCount)
    .addField("Credits", "created by HeisenBERG#6584")
    .addField("Created on", bot.user.createdAt);

    message.delete().catch(O_o=>{});
    message.channel.send(botembed);
 }

module.exports.help = {
  name: "info"
}
