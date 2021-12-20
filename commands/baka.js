const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'baka',
    execute(client, message, args){
        if (!message.guild) return;
            async function baka() {
            const GIF = await neko.sfw.baka();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Ты бака!`)
            .setDescription(`<@$message.author.id бака бака БАКА!`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            baka();
    }
}
