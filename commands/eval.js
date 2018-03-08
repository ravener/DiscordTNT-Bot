const { inspect } = require("util");
const { post } = require("superagent");
const DiscordTNT = require("discord-tnt");

exports.run = async (client, message, args) => {
	const m = message.channel_id;
	if(message.author.id !== "292690616285134850") {
		return client.sendMessage(m, "This command is for devs only!");
	}
  const code = args.join(" ");
  const token = client.TOKEN.split("").join("[^]{0,2}");
  const rev = client.TOKEN.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, "[TOKEN]");
    output = clean(output);
    if (output.length < 1950) {
      client.sendMessage(m, `\`\`\`js\n${output}\n\`\`\``);
    } else {
    	  { body } = await post("https://hastebin.com/documents").send(output);
    	  client.sendMessage(m, `Output was too long so it was uploaded to hastebin\nhttps://hastebin.com/${body.key}`);
    }
  } catch (error) {
    client.sendMessage(m, `The following error occured \`\`\`js\n${error}\`\`\``);
 }

  function clean(text)  {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  }
};
