export const randomShinChan = async (req, res) => {
  const shinChans = [
    ":bored-shin-chang:",
    ":cheek-shin-chang:",
    ":curious-shin-chang:",
    ":fighting-shin-chang:",
    ":greet-shin-chang:",
    ":mask-shin-chang:",
    ":no-shin-chang:",
    ":ok-shin-chang:",
    ":sad-shin-chang:",
    ":sad-shin-chang2:",
    ":serious-shin-chang:",
    ":shake-shin-chang:",
    ":shoke-shin-chang:",
    ":star-shin-chang:",
  ];
  const text = shinChans[Math.floor(Math.random() * shinChans.length)];
  try {
    const size = req.body?.text?.toLowerCase();
    const returnObj = {
      response_type: "in_channel",
      text: size === "big" ? "# " + text : text,
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
