import { Client } from "@notionhq/client";

const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const getProjectById = async ({ params: { id } }, res) => {
  try {
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
      cover: page.cover?.file?.url,
      createdAt: page.properties.createdAt.created_time,
      start: page.properties.date.date.start,
      end: page.properties.date.date.end,
      icon: page.icon ? page.icon : null,
      type: page.properties.type.select.name,
      status: page.properties.status?.select?.name,
      title: page.properties.name.title[0].plain_text,
      overview: page.properties.overview?.rich_text[0]?.plain_text,
      skills: page.properties.skills.multi_select.map((skill) => skill.name),
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
            // payload = payload.rich_text[0].plain_text;
            payload = payload.rich_text.reduce(
              (acc, value) => acc + value.plain_text,
              ""
            );
          } else {
            type = "blank";
            payload = "";
          }
        }

        return { id: result.id, type, payload, link };
      })
      .filter((item) => item !== undefined);

    res.send({ comments, pageInfo: pageInfo, child: returnArr });
  } catch (error) {
    res.send(error.body);
  }
};
