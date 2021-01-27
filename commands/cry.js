const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cry',
    execute(client, message, args){
        if (!message.guild) return;
            async function cry() {
            const GIF = await neko.sfw.cry();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} вот рандомное изображение/гиф бака`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            cry();
    }
}