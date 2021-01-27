const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feed',
    execute(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.feed();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`${message.author.tag} покормил(а) самого(у) себя`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.feed();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} покормил(а) ${member.user.tag}`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}