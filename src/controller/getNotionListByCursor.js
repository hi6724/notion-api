import { Client } from "@notionhq/client";

const notionDatabaseId = "46055058d58743b1936f395c3dbac43c";
const notionSecret = "secret_CMIno6AJsiCyPkfetNN7oNqo8dxMH5pzcv0EZ93pJcs";

export const getNotionListByCursor = async (req, res) => {
  const notion = new Client({
    auth: notionSecret,
  });
  try {
    const { cursor } = req.params;
    const page = await notion.databases.query({
      database_id: notionDatabaseId,
      auth: notionSecret,
      page_size: 10,
      ...(parseInt(cursor) !== 0 && { start_cursor: cursor }),
    });
    res.send(page);
  } catch (error) {
    res.send(error.body);
  }

  // const returnObj = page.results.map((result) => {
  //   const createdAt = result.properties.createdAt.created_time;
  //   const icon = result.icon.emoji;
  //   const type = result.properties.type.select.name;
  //   const status = result.properties.status.select.name;
  //   const site = result.properties.site.select.name;
  //   const title = result.properties.name.title[0].text.content;
  //   const idx = result.id;
  //   const object = result.object;
  //   return { object, createdAt, icon, type, title, idx, site, status };
  // });
};
