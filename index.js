const DiscordTNT = require("discord-tnt");
const client = new DiscordTNT.Client({
    TOKEN:"BOT TOKEN COMING SOON",
    GAME:"with DiscordTNT,
    STATUS: "online"
});

const prefix = "d.";

client.on("ready", ready => {
  console.log(`Logged in as ${ready.user.username}`);
});

client.on("messageCreate", message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return; // ignore bots and msgs don't begin with prefix
  if(message.content.startsWith(prefix + "ping")) {
   client.sendMessage(message.channel_id, "Pong!");
});

client.connect();
