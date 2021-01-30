const Discord = require('discord.js');

module.exports = {
    name: 'eneihua',
    execute(client, message, args){
        if (!message.guild) return;
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`КАК ТЫ ЭТО УЗНАЛ? ._.`)
            message.channel.send(embed);
            }
    }