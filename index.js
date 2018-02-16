const DiscordTNT = require("discord-tnt");
const config = require("./config.json");
const client = new DiscordTNT.Client({
    TOKEN:config.token,
    GAME:"with DiscordTNT",
    STATUS: "online"
});

const devs = [
 "292690616285134850"
];

const prefix = "d.";

client.on("ready", ready => {
  console.log(`Logged in as ${ready.user.username}`);
});

client.on("messageCreate", message => {
  if(message.content.indexOf(prefix) !== 0) return;
  if(message.author.bot) return; // ignore bots
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ping") {
   client.sendMessage(message.channel_id, "Pong!");
  } else if(command === "eval") {
      if(!devs.includes(message.author.id)) return client.sendMessage(message.channel_id, "This command is for devs only");
      try {
        let evaled = eval(args.join(" "));
        client.sendMessage(message.channel_id, `\`\`\`js\n${evaled}\`\`\``);
     } catch(e) {
        client.sendMessage(message.channel_id, `\`\`\`${e}\`\`\``);
     }
   }
});

client.connect();
