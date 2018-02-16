const exec = require('child_process').exec;

exports.run = async(client, message, args) => {
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      client.sendMessage(message.channel_id, `Ran: ${args.join(" ")}\n\`\`\`${response}\`\`\``)
    });
};
