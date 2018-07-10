const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
 let orange = botconfig.orange;
 let blue = botconfig.blue;
 let yellow = botconfig.yellow;
 let pink = botconfig.pink;
 let red = botconfig.red;
 let title = args.join(" ");
 let description = args.slice(1).join(" ");
 let color = args.slice(2).join(" ");
 
 if(!args[0]) return message.channel.send("Usage: embed <title> <description> <color>", {code:'py'})
 if(!message.member.hasPermission("ADMINISTRATOR")) return;
 if(!description) return message.channel.send(" description is must you cannot leave it empty ",{code: 'py'});
 if(!color){
  let color = "#0000";
  }
  if(!title) return message.channel.send(" Please add a title ", {code: 'py'});
 
 let cembed = new Discord.RichEmbed()
 .setTitle(title)
 .setDescription(description)
 .setColor(color)
 .setTimestamp();
 
 message.channel.send(cembed);
 message.delete().catch(O_o=>{});
}

module.exports.help = {
name: "embed"
}
