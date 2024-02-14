const { WebClient } = require('@slack/web-api');

exports.handler = async function(event, context) {
  const slackToken = process.env.SLACK_BOT_TOKEN;
  const channelId = 'C06JT1UDSG4';
  const web = new WebClient(slackToken);

  try {
    const result = await web.chat.postMessage({
      channel: channelId,
      text: 'Remember to water the plants! 🌱',
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Reminder sent!' }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send reminder' }) };
  }
};
