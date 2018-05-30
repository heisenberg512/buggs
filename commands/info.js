const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()
    .setColor("#ce0c5a")
    .setTitle(bot.user.username)
    .addField("Name", bot.user.username)
    .addField("Prefix", "t." )
    .setThumbnail("https://image.ibb.co/bFFFon/bot.png")
    .addField("Created At", bot.user.createdAt)
    .addField("Joined At", bot.user.joinedAt)
    .addField("Credits", "created by HeisenBERG#6584")
    .addField("Created on", bot.user.createdAt);

    message.delete().catch(O_o=>{});
    message.channel.send(botembed);
 }

module.exports.help = {
  name: "info"
}
