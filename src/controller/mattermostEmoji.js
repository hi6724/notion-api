export const mattermostEmoji = async (req, res) => {
  try {
    let emoji =
      "\n#### 이모티콘 생성기" +
      "\n명령어 뒤에 parameter를 붙여주세요 " +
      "\n " +
      "\n" +
      "\n| parameter  | return   |" +
      "\n| ---------- | ----------- |" +
      "\n| bear     | ⍝ •᎑ • ⍝         |" +
      "\n| fight1 | ╰༼.◕ヮ◕.༽つ¤=[]————         |" +
      "\n| fight2 | ———–[]=¤ԅ༼ ･ 〜 ･ ༽╯          |" +
      "\n| heart | (｡•̀ᴗ-ღ)          |" +
      "\n| manse | ⸂⸂⸜(രᴗര๑)⸝⸃⸃          |" +
      "\n| x | ‧₊˚(✘﹏✘)        |" +
      "\n\t\t      ";

    const engPattern = /^[a-zA-Z]*$/;
    // const params = engPattern.

    const text = req.body.text.toLowerCase();
    let matchString = "";
    for (let index = 0; index < text.length; index++) {
      if (engPattern.test(text[index])) {
        matchString += text[index];
      }
    }

    switch (matchString) {
      case "bear":
        emoji = "⍝ •᎑ • ⍝";
        break;
      case "fight1":
        emoji = "╰༼.◕ヮ◕.༽つ¤=[]————";
        break;
      case "fight2":
        emoji = "———–[]=¤ԅ༼ ･ 〜 ･ ༽╯";
        break;
      case "manse":
        emoji = "⸂⸂⸜(രᴗര๑)⸝⸃⸃";
        break;
      case "heart":
        emoji = "(｡•̀ᴗ-ღ)";
        break;
      case "x":
        emoji = "‧₊˚(✘﹏✘)";
        break;
      case "omok":
        emoji = `
          ┌ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┬ ┐ 01
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
    const returnText = text.replace(matchString, emoji);
    const returnObj = {
      response_type: "in_channel",
      text: returnText,
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
