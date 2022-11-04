export const mattermostEmoji = async (req, res) => {
  try {
    console.log(req.body.text);
    const returnObj = {
      response_type: "in_channel",
      text: req.body.text ? req.body.text : "hello",
      username: "test-automation",
      icon_url: "https://mattermost.com/wp-content/uploads/2022/02/icon.png",
      props: {
        test_data: {
          ios: 78,
          server: 948,
          web: 123,
        },
      },
    };
    res.send(returnObj);
  } catch (error) {
    res.send(error);
  }
};
