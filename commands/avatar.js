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
            const user = message.mentions.users.first() || message.author;
            const avatarEmbed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Аватарка`)
            .setDescription(`Вот аватар пользователя user.username`)
          　.setImage(user.avatarURL);
            message.channel.send(embed);
            }
            avatar();
    }
}
