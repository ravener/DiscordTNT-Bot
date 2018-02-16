const exec = require('child_process').exec;

exports.run = async(client, message, args) => {
    if(message.author.id !== "292690616285134850") return client.sendMessage(message.channel_id, "This command is for owner only!");
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      client.sendMessage(message.channel_id, `Ran: ${args.join(" ")}\n\`\`\`${response}\`\`\``)
    });
};
