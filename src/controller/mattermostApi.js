const database_id = "68009bd6df9640f9b09322eb70a3dee5";
const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const mattermostApi = async (req, res) => {
  try {
    const returnObj = {
      response_type: "in_channel",
      text: "\n#### Test results for July 27th, 2017\n@channel here are the requested test results.\n\n| Component  | Tests Run   | Tests Failed                                   |\n| ---------- | ----------- | ---------------------------------------------- |\n| Server     | 948         | :white_check_mark: 0                           |\n| Web Client | 123         | :warning: 2 [(see details)](https://linktologs) |\n| iOS Client | 78          | :warning: 3 [(see details)](https://linktologs) |\n\t\t      ",
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
