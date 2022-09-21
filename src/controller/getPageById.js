import { Client } from "@notionhq/client";

const notionDatabaseId = "46055058d58743b1936f395c3dbac43c";
const notionSecret = "secret_CMIno6AJsiCyPkfetNN7oNqo8dxMH5pzcv0EZ93pJcs";

export const getPageById = async ({ params: { id } }, res) => {
  const notion = new Client({
    auth: notionSecret,
  });

  const page = await notion.pages.retrieve({
    page_id: id,
    auth: notionSecret,
  });
  const comments = await notion.comments.list({
    auth: notionSecret,
    block_id: id,
  });

  const pageInfo = {
    id: page.id,
    createdAt: page.properties.createdAt.created_time,
    icon: page.icon,
    type: page.properties.type.select.name,
    status: page.properties.status.select.name,
    title: page.properties.name.title[0].plain_text,
  };

  const blockChild = await notion.blocks.children.list({
    block_id: id,
    auth: notionSecret,
  });

  const returnArr = blockChild.results
    .map((result) => {
      var type = result.type;
      var payload = result[result.type];
      var link = null;
      if (type === "divider") {
        payload = "divider";
      }
      if (payload.rich_text) {
        if (payload.rich_text.length > 0) {
          link = payload.rich_text[0].href;
          payload = payload.rich_text[0].plain_text;
        } else {
          type = "blank";
          payload = "";
        }
      }

      return { id: result.id, type, payload, link };
    })
    .filter((item) => item !== undefined);

  res.send({ comments, pageInfo, child: returnArr });
};
