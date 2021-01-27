const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'avatar',
    execute(client, message, args){
        if (!message.guild) return;
            async function avatar() {
            const GIF = await neko.sfw.avatar();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Рандомный аватар для ${message.author.tag}`)
            .setImage(`${message.author.avatar}`)
            message.channel.send(embed);
            }
            avatar();
    }
}