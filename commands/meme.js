const Discrod = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let chance = Math.floor(Math.random() * 10);
   
   if(chance > 1 && chance < 3){
     message.reply("Your mama is beautiful as always");
   }else if(chance > 3 && chance < 6){
   message.reply("Tell your mom to shave her armpit");
   }else{
   message.reply("Your mom is a slut");
   }
   
   message.delete().catch(O_o=>{});
}

module.exports.help = {
 name: "meme"
}
