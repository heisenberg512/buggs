const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});



fs.readdir("./commands/", (err, file) => {

  
  if(err) console.log(err);
  let jsfile = file.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't Find Commands.");
    return;
  }

//   jsfile.forEach((f, i) =>{
//     let props = require(`./commands/${f}`);
//     console.log(`${f} loaded!`);
//     bot.commands.set(props.help.name, props);
//   });

});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is now online`);
  bot.user.setActivity("Grand Theft Auto San Andreas");
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  
 let coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));
 let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


});

bot.login(process.env.BOT_TOKEN);
