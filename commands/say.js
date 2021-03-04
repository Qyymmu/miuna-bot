const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
};
module.exports.help = {
    name: "say"
};