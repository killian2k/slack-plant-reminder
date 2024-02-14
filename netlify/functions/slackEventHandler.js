exports.handler = async (event) => {
  const { type, challenge } = JSON.parse(event.body);

  if (type === 'url_verification') {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: challenge,
    };
  }

  // Your code to handle other events/actions goes here

  return {
    statusCode: 200,
    body: "This endpoint is for Slack events",
  };
};

