const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
let fs = require('fs');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`${prefix}help`, { type: 'WATCHING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const prefixes = [ "m.", "M.", "М.", "м." ];

client.on("message", (message) => {
  if (prefixes.some((prefix) => message.content.startsWith(prefix))) {
    message.reply(botChoice[Math.floor(Math.random() * botChoice.length)]);
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./commands/' + file_name)) return undefined;
    if(fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.login(process.env.BOT_TOKEN);
