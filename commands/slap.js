const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'slap',
    execute(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.slap();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`Получай!`)
                .setDescription(`<@${message.author.id}> не обижай меня!`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.slap();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Получай!`)
            .setDescription(`<@${message.author.id}> ударил(а) <@${member.user.id}>`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}
