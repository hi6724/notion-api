import { Client } from "@notionhq/client";

const database_id = "cf6dea8440b04e5c85cf9bc986f546b7";
const notionSecret = "secret_WsQodOj0mpgr6p12JhzFqnbJZxkhJhraJ7WRvyLCofm";

export const getAllGuestBooks = async (req, res) => {
  try {
    const notion = new Client({
      auth: notionSecret,
    });

    const guestBooks = await notion.databases.query({
      database_id,
      auth: notionSecret,
      sorts: [
        {
          property: "createdAt",
          direction: "descending",
        },
      ],
    });

    const returnObj = guestBooks.results.map((result) => {
      const id = result.id;
      const icon = result.icon;
      const createdAt = result.properties.createdAt.created_time;
      const title = result.properties.title.title[0].plain_text;
      const user = result.properties.user.rich_text[0].plain_text;
      const content = result.properties.content.rich_text[0].plain_text;

      return {
        id,
        icon,
        title,
        createdAt,
        content,
        user: JSON.parse(user),
      };
    });

    return res.send(returnObj);
  } catch (error) {
    return res.send(error);
  }
};
