export const mattermostEmoji = async (req, res) => {
  try {
    let emoji =
      "\n#### Test results for July 27th, 2017" +
      "\n@channel here are the requested test results." +
      "\n" +
      "\n| parameter  | return   |" +
      "\n| ---------- | ----------- |" +
      "\n| bear     | ⍝ •᎑ • ⍝         |" +
      "\n| fight1 | ╰༼.◕ヮ◕.༽つ¤=[]————         |" +
      "\n| fight2 | ———–[]=¤ԅ༼ ･ 〜 ･ ༽╯          |" +
      "\n| heart | (｡•̀ᴗ-ღ)          |" +
      "\n\t\t      ";

    switch (req.body.text) {
      case "bear":
        emoji = "⍝ •᎑ • ⍝";
        break;
      case "fight1":
        emoji = "╰༼.◕ヮ◕.༽つ¤=[]————";
        break;
      case "fight2":
        emoji = "———–[]=¤ԅ༼ ･ 〜 ･ ༽╯";
        break;

      case "heart":
        emoji = "(｡•̀ᴗ-ღ)";
        break;
      case "omok":
        emoji = `┌ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┐ 01
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 02　
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 03　 ◇
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 04　 ◆
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 05
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 06
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 07
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 08
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 09
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 10
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 11
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 12
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 13
          ├ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┼ ┤ 14
          └ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┴ ┘ 15 
          `;
        break;
      default:
        break;
    }

    const returnObj = {
      response_type: "in_channel",
      text: emoji,
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
