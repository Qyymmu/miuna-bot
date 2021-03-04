const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'test',
    execute(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.hug();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`Тест!`)
                .setField(`@<${message.author.id}> всё будет хорошо, солнышко!`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.hug();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Тест!`)
            .setFooter(`<@${member.author.id}> обнял(а) @<${member.user.id}>`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}